import bcrypt from "bcrypt";

export const PasswordHashing = async (password: string): Promise<string> => {
  const result = await bcrypt.hash(password, 10);
  return result;
};

export const ComparePassword = async (
  password: string,
  hashed: string
): Promise<Boolean> => {
  const match = await bcrypt.compare(password, hashed);
  return match;
};
