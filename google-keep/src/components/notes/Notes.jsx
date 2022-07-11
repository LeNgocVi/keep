import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import EditNote from "./EditNote";
import { deleteNote } from "../../redux/noteSlice";
import { addTrash } from "../../redux/trashSlice";

import { useDispatch, useSelector } from "react-redux";
import { noteSelector } from "../../redux/selector";

const Notes = ({ notes, grid }) => {
  const photos = useSelector(noteSelector);
  const dispatch = useDispatch();
  async function deleteNotes(id) {
    const small_animals = photos.filter((animal) => {
      return animal.id === id;
    });

    const action1 = addTrash(small_animals[0]);
    const actionResult1 = await dispatch(action1);

    const action2 = deleteNote(id);
    const actionResult2 = await dispatch(action2);
  }
  return (
    <>
      <div className={grid}>
        <div className="noteWrapper">
          <p>{notes.title}</p>
          <p>{notes.content}</p>
          <div className="actionButtons">
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => deleteNotes(notes.id)}
            >
              <DeleteForeverIcon />
            </button>
            <button
              type="button"
              className="btn btn-warning"
              data-toggle="modal"
              data-target={`#exampleModal-${notes.id}`}
            >
              <EditIcon />
            </button>
          </div>
          <EditNote notes={notes} />
        </div>
      </div>
    </>
  );
};

export default Notes;
