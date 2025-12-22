import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SIgnUp";
import Login from "./components/Login";
import HomePage from "./pages/HomePage";
import Vote from "./components/Vote";
import Results from "./components/Results";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  );
}

export default App;
