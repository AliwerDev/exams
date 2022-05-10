import React from "react";
import { Route, Routes } from "react-router-dom";
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
          <Route path="" element={<Exams />} />
          <Route path="my" element={<MyExams />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
