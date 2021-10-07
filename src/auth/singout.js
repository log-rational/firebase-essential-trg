import { getAuth, signOut } from "firebase/auth";
import { app } from "./fireApp";
const auth = getAuth(app);
export const signout = async () => {
  try {
    await signOut(auth);
  } catch (e) {
    throw new Error("Error while signing out");
  }
};
