import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "@firebase/auth";

export const addAuthLister = (callback) => {
  const onChange = (user) => {
    if (user) {
      callback({});
    } else {
      callback(null);
    }
  };
  return onAuthStateChanged(getAuth(), onChange);
};
