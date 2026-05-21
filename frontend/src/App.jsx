import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Components/pages/Login";
import Register from "./Components/pages/Register";
import Exams from "./Components/pages/Exams";
import Questions from "./Components/pages/Questions";
import Result from "./Components/pages/Result";
import Profile from "./Components/pages/Profile";
import AdminDashboard from "./Components/pages/AdminDashboard";
import AdminStudents from "./Components/pages/AdminStudents";
import AdminResults from "./Components/pages/AdminResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Register />} />

        <Route path="/exams" element={<Exams />} />

        <Route path="/questions/:examId" element={<Questions />} />
        <Route path="/result" element={<Result />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Admin" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<AdminStudents />} />
        <Route path="/admin/results" element={<AdminResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
