import axios from "axios";
import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { handleError } from "../helpers/ErrorHandler";
import type { CurrentUser } from "../models/User";
import { getCurrentUserAPI, loginAPI } from "../services/AuthServices";
import { UserContext } from "./UserContext";

type Props = {
  children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();

  const [accessToken, setAccessToken] = useState<string | null>(() => {
    return localStorage.getItem("accessToken");
  });
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(() => {
    const savedCurrentUser = localStorage.getItem("currentUser");
    return savedCurrentUser
      ? (JSON.parse(savedCurrentUser) as CurrentUser)
      : null;
  });

  useEffect(() => {
    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [accessToken]);

  const loginUser = async (identifier: string, password: string) => {
    try {
      const tokenResponse = await loginAPI(identifier, password);

      const accessToken = tokenResponse.data.access_token;
      const refreshToken = tokenResponse.data.refresh_token;
      const tokenType = tokenResponse.data.token_type;

      const currentUserResponse = await getCurrentUserAPI(accessToken);

      const userId = currentUserResponse.data.id;
      const username = currentUserResponse.data.username;
      const avatarUrl = currentUserResponse.data.avatar_url;

      const userObj = {
        id: userId,
        username: username,
        avatar_url: avatarUrl,
      };

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("tokenType", tokenType);
      localStorage.setItem("currentUser", JSON.stringify(userObj));

      setCurrentUser(userObj);
      setAccessToken(accessToken);

      toast.success("Login success");
      navigate("/");
    } catch (error) {
      handleError(error);
    }
  };

  const isLoggedIn = () => {
    return !!currentUser;
  };

  const logoutUser = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("tokenType");
    localStorage.removeItem("currentUser");

    setCurrentUser(null);
    setAccessToken(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        currentUser,
        accessToken,
        logoutUser,
        isLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
