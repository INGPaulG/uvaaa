import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MusicPlayer from "../components/MusicPlayer";
import MagicButton from "../components/MagicButton";
import "../styles/animations.css";
import "../styles/stars.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Fondo de estrellas */}
      <div className="stars" />
      <div className="stars2" />
      <div className="stars3" />

      {/* Contenido */}
      <div className="home-content">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Bienvenida a Nuestro Mundo ✨
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
        >
          Donde cada estrella tiene tu nombre
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <Link to="/historia" className="magic-button">
            Comenzar viaje 🌙
          </Link>
        </motion.div>
      </div>
      <MusicPlayer />
      <MagicButton />
    </div>
  );
}
