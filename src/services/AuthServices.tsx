import axios from "axios";
import { api, apiEndpoints } from "../api/endpoints";
import type { Token } from "../models/Auth";
import type { UserPrivate } from "../models/User";

export const loginAPI = async (identifier: string, password: string) => {
  return await axios.post<Token>(api + apiEndpoints.auth.login, {
    username: identifier,
    password: password,
  });
};

export const getCurrentUserAPI = async (accessToken: string) => {
  return await axios.get<UserPrivate>(api + apiEndpoints.users.getMe, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
