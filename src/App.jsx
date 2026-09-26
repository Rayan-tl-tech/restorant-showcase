import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./pages/Menu";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menu" element={<Menu />} />
        {/* Temporary default to Menu until Home is provided */}
        <Route path="/" element={<Menu />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        {/* Fallback for unintegrated demo routes */}
        <Route path="*" element={<Navigate to="/menu" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
