import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MeusLinks from "./pages/MeusLinks";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<MeusLinks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
