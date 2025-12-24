import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">Inicio</NavLink>
      <NavLink to="/historia" className="nav-link">Historia</NavLink>
      <NavLink to="/galeria" className="nav-link">Galería</NavLink>
      <NavLink to="/mensaje" className="nav-link">Mensaje</NavLink>
    </nav>
  );
}
