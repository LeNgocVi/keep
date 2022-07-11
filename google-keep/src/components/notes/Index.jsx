import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getNote, deleteNote } from "../../redux/noteSlice";
import { getTrash, addTrash } from "../../redux/trashSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { auth, db } from "../../firebase";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import { notesRemainingSelector, noteSelector } from "../../redux/selector";
const Index = ({ grid }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const notes = useSelector(noteSelector);
  //   const photos = useSelector(notesRemainingSelector);
  useEffect(() => {
    // console.log(grid);
    setIsLoading(true);
    const unregisterAuthObserver = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        console.log("User is not logged in");
        return;
      }
      const action1 = getNote();
      const actionResult1 = await dispatch(action1);
      const currentUser1 = unwrapResult(actionResult1);

      const action3 = getTrash();
      const actionResult3 = await dispatch(action3);
      const currentUser3 = unwrapResult(actionResult3);
      setIsLoading(false);
    });

    return () => unregisterAuthObserver();
  }, []);

  return (
    <div className={grid}>
      {isLoading ? (
        <h3 className="col-md-12 text-white text-center">
          <AutorenewIcon className="loader" />
        </h3>
      ) : (
        ""
      )}
      {!isLoading &&
        notes.map((note, index) => (
          <Notes key={index} notes={note} grid={grid} />
        ))}
    </div>
  );
};

export default Index;
