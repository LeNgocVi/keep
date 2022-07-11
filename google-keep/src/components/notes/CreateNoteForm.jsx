import React, { useState, useRef } from "react";
import AddIcon from "@material-ui/icons/Add";
import ImageIcon from "@material-ui/icons/Image";
import BrushIcon from "@material-ui/icons/Brush";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/noteSlice";

export default function CreateNoteForm({}) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const formReset = useRef();
  // form hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    if (data !== "") {
      //   const action = addNote(data);
      const actionResult = await dispatch(addNote(data));
      e.preventDefault();
    } else {
      alert("fields cannot be left blank");
    }

    //  insert data

    e.target.reset();
    console.log(data);
    setShow(false);
  };

  // check the click target
  window.addEventListener("click", function (e) {
    if (document.getElementById("createNoteForm").contains(e.target)) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  return (
    <div className="container">
      <form
        ref={formReset}
        className="form"
        id="createNoteForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className="form-group"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            style={{
              fontSize: "0.875rem",
              fontWeight: "600",
            }}
            autoComplete="off"
            placeholder="Tạo ghi chú...."
            className="form-control"
            type="text"
            name="title"
            onClick={() => setShow(true)}
            {...register("title", { required: "Please enter your title." })}
          />
          <span class="material-icons-outlined " style={{ color: "#9aa0a6" }}>
            check_box
          </span>
          <span
            class="material-icons-outlined "
            style={{ marginLeft: "32px", color: "#9aa0a6" }}
          >
            brush
          </span>
          <span
            class="material-icons-outlined "
            style={{
              marginLeft: "32px",
              marginRight: "18px",
              color: "#9aa0a6",
            }}
          >
            image
          </span>
        </div>
        <div className={!show ? "d-none" : "form-group"}>
          <textarea
            {...register("content", { required: "Please enter your content." })}
            placeholder="Tạo ghi chú"
            className="form-control"
            name="content"
            style={{
              paddingTop: "16px",
              fontSize: "0.875rem",
              fontWeight: "600",
            }}
          />
          <div>
            <span class="material-icons-outlined hover small-icon">
              add_alert
            </span>
            <span class="material-icons-outlined hover small-icon">
              person_add
            </span>
            <span class="material-icons-outlined hover small-icon">
              palette
            </span>
            <span class="material-icons-outlined hover small-icon">image</span>
            <span class="material-icons-outlined hover small-icon">
              archive
            </span>
            <span class="material-icons-outlined hover small-icon">
              more_vert
            </span>
            <span class="material-icons-outlined hover small-icon">undo</span>
            <span class="material-icons-outlined hover small-icon">redo</span>
            <button type="submit" name="submit" className="addButton">
              <AddIcon />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
