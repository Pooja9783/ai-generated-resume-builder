import "./App.css";
import AuthScreen from "./screens";
import CreateResume from "./screens/CreateResume";
import Home from "./screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="mx-auto w-full bg-sky-950	h-screen py-10">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateResume />} />
          <Route path="/auth" element={<AuthScreen />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
