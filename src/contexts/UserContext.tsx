import { createContext } from "react";
import type { CurrentUser } from "../models/User";

type UserContextType = {
  currentUser: CurrentUser | null;
  accessToken: string | null;
  loginUser: (identifier: string, password: string) => void;
  logoutUser: () => void;
  isLoggedIn: () => boolean;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType,
);
