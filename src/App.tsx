import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Exams from "./pages/Exams";
import Home from "./pages/Home";
import MyExams from "./pages/MyExams";
import Profile from "./pages/Profile";
import Test from "./pages/Test";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Navigate to={"exams"} />} />
          <Route path="exams" element={<Exams />} />
          <Route path="myexams" element={<MyExams />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/auth">
          <Route path="" element={<Navigate to={"login"} />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
