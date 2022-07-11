import { auth, db } from "../firebase";

const trashApi = {
  getTrash: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const currentUser = auth.currentUser;
        var a = [];
        const docRef = db
          .collection("users")
          .doc(currentUser.uid)
          .collection("trash")
          .get()
          .then((query) => {
            query.forEach((doc) => {
              const data1 = doc.data();
              data1.id = doc.id;
              a.push(data1);
            });

            resolve(a);
          });
      }, 500);
    });
  },
  addTrash: (newTrash) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const currentUser = auth.currentUser;
        var a = [];
        const docRef = db
          .collection("users")
          .doc(currentUser.uid)
          .collection("trash")
          .doc(newTrash.id)
          .set(newTrash)
          .then((docReff) => {
            console.log("ok");

            const docRef = db
              .collection("users")
              .doc(currentUser.uid)
              .collection("trash")
              .get()
              .then((query) => {
                query.forEach((doc) => {
                  const data1 = doc.data();
                  data1.id = doc.id;
                  a.push(data1);
                });

                resolve(a);
              });
          });
      }, 500);
    });
  },
  deleteTrash: (Trash) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const currentUser = auth.currentUser;
        var a = [];
        const docRef = db
          .collection("users")
          .doc(currentUser.uid)
          .collection("trash")
          .doc(Trash)
          .delete()
          .then((doc) => {
            const docRef = db
              .collection("users")
              .doc(currentUser.uid)
              .collection("trash")
              .get()
              .then((query) => {
                query.forEach((doc) => {
                  const data1 = doc.data();
                  data1.id = doc.id;
                  a.push(data1);
                });

                resolve(a);
              });
          });
      }, 500);
    });
  },
};
export default trashApi;
