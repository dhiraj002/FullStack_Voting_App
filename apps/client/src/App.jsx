import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Results from "./components/Results";
import SignUp from "./components/SIgnUp";
import Vote from "./components/Vote";
import HomePage from "./pages/HomePage";

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
