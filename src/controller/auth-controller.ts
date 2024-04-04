import { NextFunction, Request, Response } from "express";
import {
  DataInterface,
  ExtractToken,
  GenerateToken,
} from "../helpers/token-helper";
import { ComparePassword } from "../helpers/password-helper";
const { user: userModel } = require("../db/models/index");

export const Authorization = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authToken =
      req.headers.authorization && req.headers.authorization.split(" ")[1];
    if (!authToken)
      return res.status(401).json({ success: false, message: "Invalid Token" });

    const decodedToken = ExtractToken(authToken);

    if (!decodedToken) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User" });
    } else if ("error" in decodedToken) {
      return res
        .status(401)
        .json({ success: false, message: decodedToken.error });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const Authentication = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;
    const existingUser = await userModel.findOne({ where: { email: email } });

    if (!existingUser)
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });

    const isPasswordValid = ComparePassword(password, existingUser.password);

    if (!isPasswordValid)
      return res
        .status(401)
        .json({ success: false, message: "Password Incorrect" });

    const dataUser: DataInterface = {
      userID: existingUser.userID,
      firstname: existingUser.firstname,
      lastname: existingUser.lastname,
      email: existingUser.email,
      role: existingUser.role,
    };

    const token = GenerateToken(dataUser);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ ...dataUser, token: token });
  } catch (error: any) {
    console.log(error);
    return error;
  }
};
