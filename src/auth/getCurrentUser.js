import { getAuth } from "firebase/auth";
import { app } from "./fireApp";

export const getCurrentUser = () => {
  const _currentUser = getAuth(app).currentUser;
  if (_currentUser) {
    console.log(_currentUser);
    return _currentUser.user;
  }
  return null;
};
