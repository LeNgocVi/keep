import React, { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SaveIcon from "@material-ui/icons/Save";
import axios from "axios";
import { updateNote } from "../../redux/noteSlice";
import { useDispatch } from "react-redux";
import { auth, db } from "../../firebase";

const EditNote = ({ notes }) => {
  const dispatch = useDispatch();
  const closePopupRef = useRef();
  const [user, setUser] = useState([]);
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      id: notes.id,
      title: notes.title,
      content: notes.content,
    },
  });
  async function UpdateNote(notes) {
    const action = updateNote(notes);
    const actionResult = await dispatch(action).then(() => {
      document.getElementsByClassName("modal-backdrop")[0].click();
      document.getElementsByClassName("modal-backdrop")[0].remove();
    });
  }

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });

    return unsub;
  }, []);
  return (
    <div>
      <div
        ref={closePopupRef}
        className="modal fade"
        id={`exampleModal-${notes.id}`}
        HTMLtabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <form
              className="editForm"
              id={`editNoteForm-${notes.id}`}
              onSubmit={handleSubmit(UpdateNote)}
            >
              <div className="form-group">
                <input
                  autoComplete="off"
                  placeholder="Take a note..."
                  className="form-control"
                  type="text"
                  name="title"
                  {...register("title")}
                />
              </div>
              <div className="form-group">
                <textarea
                  {...register("content")}
                  placeholder="Add Content Here...!"
                  className="form-control"
                  name="content"
                />
                <button
                  type="submit"
                  name="submit"
                  className="addButton"
                  data-mdb-dismiss="modal"
                >
                  <SaveIcon />
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                  style={{ marginLeft: "350px" }}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNote;
