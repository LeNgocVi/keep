import React, { useEffect } from "react";
import "./App.scss";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { auth, db } from "./firebase";

import { getNote } from "./redux/noteSlice";
import { getTrash } from "./redux/trashSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
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
    });

    return () => unregisterAuthObserver();
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home/*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
