import { FieldValues } from "react-hook-form";
import setAccessToken from "./setAccessToken";

export const userLogin = async (data: FieldValues) => {
  const res = await fetch(`http://localhost:5000/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    // cache: "no-store",
    credentials: "include",
  });

  const userInfo = await res.json();

  if (userInfo.data.accessToken) {
    setAccessToken(userInfo.data.accessToken, { redirect: "/dashboard" });
  }

  return userInfo;
};
