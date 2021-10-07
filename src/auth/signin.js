import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./fireApp";
const auth = getAuth(app);
export const signIn = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log(result);
    return {};
  } catch (e) {
    throw new Error("Erro singin in");
  }
};
