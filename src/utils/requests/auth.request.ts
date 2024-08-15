import {
  LoginBodyType,
  LoginResType,
  RegisterBodyType,
  RegisterResType,
} from "@/schema/auth.schema";
import http from "@/utils/http";

const authApiRequest = {
  login: (body: LoginBodyType) => http.post<LoginResType>("/login", body),
  register: (body: RegisterBodyType) =>
    http.post<RegisterResType>("/register", body),
  auth: (body: { accessToken: string; refreshToken: string; id: string }) =>
    http.post("/api/auth", body, {
      baseUrl: "",
    }),
  logoutServer: (accessToken: string) =>
    http.post(
      "/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    ),
  logoutClient: () =>
    http.post(
      "api/logout",
      {},
      {
        baseUrl: "",
      }
    ),
};

export default authApiRequest;
