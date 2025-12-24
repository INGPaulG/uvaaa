import { motion } from "framer-motion";
import StarDivider from "../components/StarDivider";
import "../styles/animations.css";

const chapters = [
  {
    title: "Capítulo I — El inicio ✨",
    text: `
    El dia que te vi por primera vez, No imaginé que esto pasaría.
    Algo en nuestras vidas cambió para siempre, no pensaba que fuera posible.
    Sin embargo pasó, Me acuerdo cuando te contaba cosas de la U, y me decias 
    exagerado jejeje, ahora ya me crees. Cuando aveces te iba a ver o recoger
    de la universidad o de algun lugar, cuando nos quedabamos en Almirante 
    viendo videos jejeje, varias veces te quedaste dormida en el mueble y 
    si te vi dormir desde ese entonces, me parecia tierno verte dormir. Recuerdo
    que me negaba a tus abrazos, y lo siento es que no me gustan, pero poco a poco
    tus abrazos me gustaban mas, y ya me anime a tocar tu mano aunque me daba pena,
    pero no lo hacia con otras intenciones en ese entonces jeje, solo queria 
    sentir confianza y sentir que tu estabas ahi.
    `,
  },
  {
    title: "Capítulo II — El primer acercamiento 🌙",
    text: `
    Cuando te fuiste a colombia, jeje reconozco que te extrañaba aunque sabia 
    que la estabas pasando bien allá. En aqellos días estaba muy ocupado recuerdo,
    y aunque queria hablar contigo, no podia hacerlo tanto como queria. Pero cuando
    volviste todo cambió, jejeje recuerdo que nos vimos, varias veces y por una 
    extraña razon yo queria verte, jeje asi como cuando te espere para verte en 
    Open plaza, jajaja hasta estaba Lupe, luego cuando viajamos a la Arena, me gustó 
    muchooo en serioo, sigo agradecido, me contaste tus cosas, y pues era raro, ya 
    cuando empecé a frecuentarte en la casa, jajaja buscaba cualquier excusa para ir
    a verte, y pues jaja la primera vez que sentí celos, fue raro pero ahi entendí 
    que ya sentía algo por ti, luego iba a verte de nuevo y veiamos peliculas, te acompañaba
    era muy bonito ejejje.   `,
  },
  {
    title: "Capítulo III — El primer beso 💫",
    text: `
    Cuando vimos esa pelicula, jejeje un poco antes habiamos comprado helado, y fue raro
    no recuerdo exactamente como resultamos acostados asi de pegados, pero me gusto mucho
    cuando te pude sentir muy cerca, y cuando tome tu pierna fue jeje me senti nervioso
    y cuando nos dimos ese beso, fue algo que nunca olvidare, jeje me sentia raro, nervioso 
    pero a la vez estaba feliz, yo en el fondo sabia que queria ese beso, me asustó un poco
    pero a la vez me sentia tan bien porque me gustó demasiado, jeje y ahi empezó todo ese 8 
    de Octubre será un dia que nunca olvidaré.
    `,
  },
  {
    title: "Capítulo IV — Nuestro momentos juntos 🌑",
    text: `
    Nada de esto será fácil lo sabemos muy bien, sin embargo yo quiero ser feliz a tu lado.
    Quiero enfrentar lo que venga contigo, Y sé que de ninguna manera esto será algo que podamos
    hacer como perosnas normales porque nada de esto es normal, sin embargo cada momento que pasé 
    a tu lado a sido increible, no imagine que podia sentirme tan bien con alquien, las cositas 
    que hicimos juntos, los besos, abrazos, las caricias, las miradas, todo eso me hizo sentir 
    tan especial, y me hizo darme cuenta de muchas cosas, de lo que realmente quiero en la vida.
    Quiero estar contigo, quiero que seas parte de mi vida, quiero que me apoyes y yo apoyarte, 
    en todo lo que venga quiero apoyarte y quiero que me apoyes a mi, quiero que seamos un equipo
    y que luchemos juntos por lo que queremos, quiza el destino no es como imaginamos o como 
    queremos pero confio en que Dios nos tiene algo mejor preparado, y quiero que lo vivamos, 
    quizá no estemos junto o quizá sí, pero de lo que si estoy seguro es que Te Amo, y eso 
    nunca cambiará.
    `,
  },
  {
    title: "Capítulo V — Tú me haces libre 💖",
    text: `
    Esto lo escribí pensando en tí
    porque tú me haces libre
    porque tú me haces sentir
    que puedo volar sin miedo
    que puedo soñar despierto

    Tú tienes el aroma que encanta
    me deslumbra tu sonrisa franca
    me pierdo en tu mirada
    y en tu voz tan delicada

    Pierdo la noción del tiempo
    cuando estoy en tu pensamiento
    me haces sentir tan vivo
    que olvido todo lo negativo

    tú eres mi musa inspiradora
    mi razón para seguir adelante
    tú me haces libre
    y por eso te amo tanto
    y siempre te querré a mi lado

    No soy ningun soldado guerrero
    pero lucho por cada momento
    que puedo estar contigo
    por cada oprtunidad que me das
    de amarte sin medida
    y de sentir que la vida
    es más hermosa a tu lado

    Verso, rimas, prosas o Rosas
    no importa cuanto las ecoga
    no seran sifiente para ti 
    mi bellas rosa
    de jardin prohibido
    que es lo que escribo
    porque tu eres el motivo
    de que mi corazon este vivo

    Dicen que las estrellas 
    son lo que brilla en la oscuridad
    pero en mi vida la unica verdad
    es que no eres mi casualidad
    eres mi momento y mi realidad
    eres mi estrella en la inmensidad
    eres mi vida y mi felicidad
    Eres mi todo y mi libertad.

    Te Quiero Dayana <3
    `,
  },
];

export default function Story() {
  return (
    <div className="story-container">
      <h2 className="story-title">Nuestra Historia</h2>

      <div className="chapters">
        {chapters.map((chapter, index) => (
          <div key={index}>
            <motion.section
              className="chapter-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h3>{chapter.title}</h3>
              <p>{chapter.text}</p>
            </motion.section>

            {/* Estrella entre capítulos */}
            {index < chapters.length - 1 && <StarDivider />}
          </div>
        ))}
      </div>

    </div>
  );
}
