"use server";
import { authKey } from "@/contants/authkey";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const setAccessToken = (token: string, options?: any) => {
  cookies().set(authKey, token);

  if (options && options.redirect) {
    redirect(options.redirect);
  }
};

export default setAccessToken;