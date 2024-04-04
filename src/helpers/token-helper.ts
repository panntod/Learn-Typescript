import { JwtPayload, TokenExpiredError, sign, verify } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export interface DataInterface {
  userID: number;
  firstname: string;
  lastname: string;
  email: string;
  password?: string;
  role: string;
}

const secretKey = process.env.APP_SECRET as string;

export const GenerateToken = (data: DataInterface): string => {
  const token = sign(data, secretKey, { expiresIn: "1m" });
  return token;
};

export const ExtractToken = (
  token: string
): DataInterface | { error: string } | null => {
  try {
    const decode = verify(token, secretKey);
    return decode as DataInterface;
  } catch (error: any) {
    if (error.name === "TokenExpiredError") {
      return { error: "Token already expired" };
    } else {
      console.error("Token verification failed:", error.message);
      return null;
    }
  }
};
