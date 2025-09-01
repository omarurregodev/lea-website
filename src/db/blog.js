import img1 from "../assets/anuncios/Anuncio1.webp";
import img2 from "../assets/anuncios/Anuncio2.webp";
import img3 from "../assets/anuncios/Anuncio3.webp";
import img4 from "../assets/anuncios/Anuncio4.webp";
import img5 from "../assets/anuncios/Anuncio5.webp";
import Horario from "../assets/Horario.pdf";

const phoneNumber = "+34668551899";
const message = encodeURIComponent("Hola, estoy interesado en ");
const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

const blogList = [
  {
    title: "¡English Summer Camp!",
    img: img1,
    date: "19/06/25",
    desc: "Retoma tu inglés antes de la vuelta al cole: ACTIVIDADES, JUEGOS, APRENDIZAJE Y DIVERSIÓN.",
    cta: true, // call to action button
    cta_title: "Inscribirme",
    link: "https://forms.gle/VUmz6fMSJZDGVdtWA",
  },
  {
    title: "¿List@ para estudiar en Francia?",
    img: img2,
    date: "18/06/25",
    desc: "No te vayas sin ponerte a prueba… Prepárate para tu estancia en Francia con nosotros.",
    cta: true, // call to action button
    cta_title: "Inscribirme",
    link: "https://forms.gle/VUmz6fMSJZDGVdtWA",
  },
  {
    title: "Matrículas abiertas curso 2025-26",
    img: img4,
    date: "18/06/25",
    desc: "Consulta nuestros horarios y oferta de cursos. ¡Reserva tu plaza ahora!",
    cta: true, // call to action button
    cta_title: "Inscribirme",
    link: "https://forms.gle/z7WZ2Rye32khJiLr5",
  },
  {
    title: "¡Cursos intensivos de junio!",
    img: img5,
    date: "18/06/25",
    desc: "Prepárate con nuestros cursos intensivos. En solo dos semanas, mejorarás todas las habilidades clave del examen con profesores expertos, estrategias efectivas y simulaciones reales.",
    cta: true, // call to action button
    cta_title: "Más información...",
    link: whatsappLink,
  },
  {
    title:
      "Simulacros de exámenes de certificación Cambridge, DELF, DALF y PAU",
    img: img3,
    date: "18/06/25",
    desc: "Gana confianza, pon a prueba tu nivel antes del gran día y mejora tu puntuación.",
    cta: true, // call to action button
    cta_title: "Más información...",
    link: whatsappLink,
  },
];

export default blogList;
