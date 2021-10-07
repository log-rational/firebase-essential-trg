import React, { useState, useEffect } from "react";
import { getCurrentUser } from "./getCurrentUser";
import { addAuthLister } from "./addAuthListner";

export const useAuth = () => {
  const [authInfo, setAuthInfo] = useState(() => {
    const user = getCurrentUser();
    const isLoading = !user;
    return { isLoading, user };
  });

  useEffect(() => {
    console.log(authInfo);
  }, [authInfo]);
  useEffect(() => {
    const unsubscribe = addAuthLister((user) => {
      console.log(user);
      return setAuthInfo({ isLoading: false, user: user });
    });
    return unsubscribe;
  }, []);
  return authInfo;
};
