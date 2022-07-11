import { auth, db } from "../firebase";

const noteApi = {
  getNote: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const currentUser = auth.currentUser;
        var a = [];
        const docRef = db
          .collection("users")
          .doc(currentUser.uid)
          .collection("notes")
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
  addNote: (newNote) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const currentUser = auth.currentUser;
        var a = [];
        const docRef = db
          .collection("users")
          .doc(currentUser.uid)
          .collection("notes")
          .add(newNote)
          .then((doc) => {
            const document = db
              .collection("users")
              .doc(currentUser.uid)
              .collection("notes")
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

  RehibiliTrash: (newTrash) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const currentUser = auth.currentUser;
        var a = [];
        const docRef = db
          .collection("users")
          .doc(currentUser.uid)
          .collection("notes")
          .doc(newTrash.id)
          .set(newTrash)
          .then((docReff) => {
            console.log("ok");

            const docRef = db
              .collection("users")
              .doc(currentUser.uid)
              .collection("notes")
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
  updateNote: (note) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("note", note.id);
        const currentUser = auth.currentUser;
        var a = [];
        const docRe = db
          .collection("users")
          .doc(currentUser.uid)
          .collection("notes")
          .doc(note.id)
          .update(note)
          .then((doctt) => {
            const document = db
              .collection("users")
              .doc(currentUser.uid)
              .collection("notes")
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

  deleteNote: (Note) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const currentUser = auth.currentUser;
        var a = [];
        const docRef = db
          .collection("users")
          .doc(currentUser.uid)
          .collection("notes")
          .doc(Note)
          .delete()
          .then((doc) => {
            const document = db
              .collection("users")
              .doc(currentUser.uid)
              .collection("notes")
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

export default noteApi;
