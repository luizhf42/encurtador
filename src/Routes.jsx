import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MeusLinks from "./pages/MeusLinks";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<MeusLinks />} />
      </Routes>
    </BrowserRouter>
  );
}
