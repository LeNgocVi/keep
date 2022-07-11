import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import CreateNoteForm from "../components/notes/CreateNoteForm";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ArchiveIcon from "@material-ui/icons/Archive";
import EditIcon from "@material-ui/icons/Edit";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

import Index from "../components/notes/Index";
import TrashIndex from "../components/trash/Index";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [grid, setGrid] = useState("grid-column");

  const handleClickMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Header
        handleClickMenuOpen={handleClickMenuOpen}
        setGrid={setGrid}
        grid={grid}
      />
      <div className={`sideBar text-white ${menuOpen && "open"}`}>
        <ul>
          <Link to={"/home/note"}>
            <li>
              <span className="icon">
                {/* <EmojiObjectsIcon /> */}
                <span class="material-icons-outlined hover active">
                  lightbulb
                </span>
              </span>
              <span className="linkText">Ghi chú</span>
            </li>
          </Link>
          <Link to={"/home/"}>
            <li>
              <span className="icon">
                {/* <NotificationsIcon /> */}
                <span class="material-icons-outlined hover">notifications</span>
              </span>
              <span className="linkText">Lời nhắc</span>
            </li>
          </Link>
          <Link to={"/home"}>
            <li>
              <span className="icon">
                {/* <EditIcon /> */}
                <span class="material-icons-outlined hover">edit</span>
              </span>
              <span className="linkText">Chỉnh sửa nhãn </span>
            </li>
          </Link>
          <Link to={"/home/archives"}>
            <li>
              <span className="icon">
                {/* <ArchiveIcon /> */}
                <span class="material-icons-outlined hover">archive</span>
              </span>
              <span className="linkText">Lưu trữ</span>
            </li>
          </Link>
          <Link to={"/home/trash"}>
            <li>
              <span className="icon">
                <DeleteOutlineIcon />
                {/* <span class="material-icons-outlined hover">delete</span> */}
              </span>
              <span className="linkText">Thùng rác</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className={`mainContent ${menuOpen && "open"}`}>
        <CreateNoteForm />
        <div className="container">
          <Routes>
            <Route path="/note" element={<Index grid={grid} />} />
            <Route path="archives" element={<Index grid={grid} />} />
            <Route path="trash" element={<TrashIndex grid={grid} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
