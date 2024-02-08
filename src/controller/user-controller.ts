import { user as userModel } from "../models/index";
import bcrypt from "bcrypt";
import { Request, Response } from 'express';

export const getAllUser = async (req: Request, res: Response) => {
    try {
      const dataUser = await userModel.findAll();
  
      const responseUsers = dataUser.map((user: any) => {
        const { id, firstname, lastname, email, role } = user;
        return {
          id,
          firstname,
          lastname,
          email,
          role,
        };
      });
  
      return res.status(200).json({
        success: true,
        data: responseUsers,
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
