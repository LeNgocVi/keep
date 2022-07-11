import firebase from "firebase";
import { auth, db } from "../firebase";
const userApi = {
  getUser: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const currentUser = auth.currentUser;

        resolve({
          id: currentUser.uid,
          name: currentUser.displayName,
          email: currentUser.email,
        });
      }, 500);
    });
  },
};

export default userApi;
