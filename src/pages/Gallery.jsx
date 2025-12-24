import { useState } from "react"
import "../styles/gallery.css"

const images = [
  "../images/fotos/1.jpeg",
  "../images/fotos/2.jpeg",
  "../images/fotos/3.jpeg",
  "../images/fotos/4.jpeg",
  "../images/fotos/5.jpeg"
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="gallery-page">
      <h1 className="gallery-title">Nuestra Galería Mágica ✨</h1>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-card"
            onClick={() => setSelected(img)}
          >
            <img src={img} alt={`foto-${index}`} />
          </div>
        ))}
      </div>

      {selected && (
        <div className="gallery-modal" onClick={() => setSelected(null)}>
          <img src={selected} alt="foto ampliada" />
        </div>
      )}
    </section>
  )
}
