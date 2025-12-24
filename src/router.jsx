import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Gallery from "./pages/Gallery";
import Message from "./pages/Message";

export default function Router() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<Story />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/mensaje" element={<Message />} />
      </Routes>
  );
}
