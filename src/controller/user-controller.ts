const bcrypt = require("bcrypt");
const userModel = require("../models/index").user;
import { Request, Response } from "express";

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const dataUser = await userModel.findAll();

    return res.status(200).json({
      success: true,
      data: dataUser,
      message: "All users have been loaded",
    });
  } catch (error) {
    console.error("Error in getAllUser:", error);
    return res.status(500).json({
      success: false,
      data: null,
      message: "Internal Server Error",
    });
  }
};

interface DataUser {
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  password: string;
}

export const registration = async (req: Request, res: Response) => {
  let newUser: DataUser = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    role: req.body.role,
    password: bcrypt.hashSync(req.body.password, 10),
  };
  try {
    const result: any = await userModel.create(newUser)
    return res.json({
      success: true,
      rowAffected: result,
      message: "New member has been inserted",
    });
  } catch (error: any) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
