import React, { useEffect, useState } from "react";
import Trash from "./Trash";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { auth, db } from "../../firebase";
import { RehibiliTrash } from "../../redux/noteSlice";
import { deleteTrash, getTrash } from "../../redux/trashSlice";
import AutorenewIcon from "@material-ui/icons/Autorenew";

const TrashIndex = ({ grid }) => {
  const dispatch = useDispatch();
  const trash = useSelector((state) => state.trash.current);
  async function restores(id) {
    let small_animals = trash.filter((animal) => {
      return animal.id === id;
    });
    const action1 = RehibiliTrash(small_animals[0]);
    const actionResult1 = await dispatch(action1);

    const action2 = deleteTrash(id);
    const actionResult2 = await dispatch(action2);
  }

  async function deleteNote(id) {
    const action = deleteTrash(id);
    const actionResult2 = await dispatch(action);
  }

  //   useEffect(() => {
  //     setIsLoading(true);
  //     const unregisterAuthObserver = auth.onAuthStateChanged(async (user) => {
  //       if (!user) {
  //         console.log("User is not logged in");
  //         return;
  //       }

  //       const action3 = getTrash();
  //       const actionResult3 = await dispatch(action3);
  //       const currentUser3 = unwrapResult(actionResult3);
  //       setIsLoading(false);
  //     });

  //     return unregisterAuthObserver;
  //   }, []);
  //   useEffect(() => {
  //     setIsLoading(true);
  //     const unsub = auth.onAuthStateChanged(async (user) => {
  //       if (user) {
  //       }
  //     });
  //     setIsLoading(false);
  //     return unsub;
  //   }, []);
  return (
    <div className={grid}>
      {trash.map((trash, index) => (
        <Trash
          key={index}
          trash={trash}
          grid={grid}
          onRestores={restores}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
};

export default TrashIndex;
