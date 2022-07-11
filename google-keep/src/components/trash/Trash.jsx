import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import RestoreFromTrashRoundedIcon from "@material-ui/icons/RestoreFromTrashRounded";

const Trash = ({ trash, grid, onDelete, onRestores }) => {
  console.log("kkkkk", grid);
  return (
    <>
      <div className={grid}>
        <div className="noteWrapper">
          <p>{trash.title}</p>
          <p>{trash.content}</p>
          <div className="actionButtons">
            <button
              type="button"
              className="btn "
              onClick={() => onDelete(trash.id)}
            >
              <DeleteForeverIcon />
            </button>
            <button
              type="button"
              className="btn "
              onClick={() => onRestores(trash.id)}
            >
              <RestoreFromTrashRoundedIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Trash;
