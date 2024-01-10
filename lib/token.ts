import { v4 as uuidv4 } from "uuid"
import { db } from "@/lib/db";
import { getVerificationTokenByEmail } from "@/data/verification-token";

export const generateVerificationToken = async (email:string) => {
  const token = uuidv4();

  // expires in 1hr
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existinToken = await getVerificationTokenByEmail(email);

  // if token is exist inside db for specific email then delete that verificationToken from db;
  if (existinToken) {
    await db.verificationToken.delete({
      where: {
        id: existinToken?.id
      }
    })
  }

  // if token does't exist inside db for specific email then create verificationToken with token and email relation inside a db;
  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      expires,
      token,
    }
  });

  return verificationToken;
};