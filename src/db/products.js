import prodE1 from "../assets/products/english/prod_1.webp";
import prodE1_1 from "../assets/products/english/prod_1_1.webp";
import prodE1_2 from "../assets/products/english/prod_1_2.webp";
import prodE1_3 from "../assets/products/english/prod_1_3.webp";
import prodE2 from "../assets/products/english/prod_2.webp";
import prodE2_1 from "../assets/products/english/prod_2_1.webp";
import prodE2_2 from "../assets/products/english/prod_2_2.webp";
import prodE2_3 from "../assets/products/english/prod_2_3.webp";
import prodE3 from "../assets/products/english/prod_3.webp";
import prodE3_1 from "../assets/products/english/prod_3_1.webp";
import prodE3_2 from "../assets/products/english/prod_3_2.webp";
import prodE4 from "../assets/products/english/prod_4.webp";
import prodE4_1 from "../assets/products/english/prod_4_1.webp";
import prodE4_2 from "../assets/products/english/prod_4_2.webp";
import prodE5 from "../assets/products/english/prod_5.webp";
import prodE5_1 from "../assets/products/english/prod_5_1.webp";
import prodE5_2 from "../assets/products/english/prod_5_2.webp";
import prodE5_3 from "../assets/products/english/prod_5_3.webp";
import prodE5_4 from "../assets/products/english/prod_5_4.webp";
import prodF1 from "../assets/products/french/prod_1.webp";
import prodF1_1 from "../assets/products/french/prod_1_1.webp";
import prodF1_2 from "../assets/products/french/prod_1_2.webp";
import prodF1_3 from "../assets/products/french/prod_1_3.webp";
import prodF2 from "../assets/products/french/prod_2.webp";
import prodF2_1 from "../assets/products/french/prod_2_1.webp";
import prodF2_2 from "../assets/products/french/prod_2_2.webp";
import prodF3 from "../assets/products/french/prod_3.webp";
import prodF3_1 from "../assets/products/french/prod_3_1.webp";
import prodF3_2 from "../assets/products/french/prod_3_2.webp";
import prodF4 from "../assets/products/french/prod_4.webp";
import prodF4_1 from "../assets/products/french/prod_4_1.webp";
import prodF4_2 from "../assets/products/french/prod_4_2.webp";
import prodF4_3 from "../assets/products/french/prod_4_3.webp";
import prodF5 from "../assets/products/french/prod_5.webp";
import prodF5_1 from "../assets/products/french/prod_5_1.webp";
import prodF5_2 from "../assets/products/french/prod_5_2.webp";
import prodF5_3 from "../assets/products/french/prod_5_3.webp";
import prodF5_4 from "../assets/products/french/prod_5_4.webp";
import prod6 from "../assets/products/prod_6.webp";
import prod7 from "../assets/products/prod_7.webp";

const productsList = [
    {
        id: 0,
        title: "English",
        subtitle: "Primary School Young learners",
        desc: "¡Aprender inglés desde pequeños es una aventura emocionante! Nuestros cursos para niños de primaria están diseñados para que desarrollen habilidades lingüísticas de manera divertida y efectiva. Con actividades interactivas y profesores especializados, fomentamos la confianza y el amor por el inglés desde temprana edad.",
        img: prodE1,
        items: [
            {
                id: 0,
                title: "Movers A1",
                subtitle: "3º-4º de primaria",
                desc: {
                    desc:"Primeros pasos en la comunicación en inglés.",
                    schedule: {
                        day: "Martes",
                        time: "17:40 - 18:40"
                    },
                    price: "50€/mes"
                },
                img: prodE1_1
            },
            {
                id: 1,
                title: "Flyers A2",
                subtitle: "4º-5º de primaria",
                desc: {
                    desc:"Expansión del vocabulario y habilidades orales.",
                    schedule: {
                        day: "Martes",
                        time: "17:40 - 18:40"
                    },
                    price: "50€/mes"
                },
                img: prodE1_2
            },
            {
                id: 2,
                title: "Explorers A2 Plus",
                subtitle: "5º-6º de primaria",
                desc: {
                    desc:"Mayor fluidez con estructuras más avanzadas",
                    schedule: {
                        day: "Martes, miércoles y jueves",
                        time: "17:40 - 19:10"
                    },
                    price: "74€/mes"
                },
                img: prodE1_3
            }
        ]
    },
    {
        id: 1,
        title: "English",
        subtitle: "Secondary School Achievers",
        desc: "Nuestros cursos para secundaria están diseñados para que los adolescentes avancen en su aprendizaje con confianza, preparándose para certificaciones y un futuro bilingüe.",
        img: prodE2,
        items: [
            {
                id: 0,
                title: "Achievers B1.1",
                subtitle: "6º-1º ESO",
                desc: {
                    desc:"Inicio del nivel intermedio",
                    schedule: {
                        day: "Lunes",
                        time: "17:40-19:10"
                    },
                    price: "74€/mes"
                },
                img: prodE2_1
            },
            {
                id: 1,
                title: "Achievers B1.2",
                subtitle: "1º-2º ESO",
                desc: {
                    desc:"Consolidación del B1.",
                    schedule: {
                        day: "Miércoles",
                        time: "17:40 - 19:10"
                    },
                    price: "74€/mes"
                },
                img: prodE2_2
            },
            {
                id: 2,
                title: "Boosters B1 Plus",
                subtitle: "B1 Plus",
                desc: {
                    desc:"Para quienes buscan perfeccionar su inglés y alcanzar un nivel B1 más sólido",
                    schedule: {
                        day: "Jueves",
                        time: "18:00 - 19:00"
                    },
                    price: "50€/mes"
                },
                img: prodE2_3
            }
        ]
    },
    {
        id: 2,
        title: "English",
        subtitle: "High School Pathfinders",
        desc: "Programa enfocado en adolescentes que desean alcanzar un nivel B2 con confianza, prepararse para certificaciones oficiales y un futuro académico o profesional internacional.",
        img: prodE3,
        items: [
            {
                id: 0,
                title: "Pathfinders B2",
                subtitle: "FCE Starters: B2.1",
                desc: {
                    desc:"Primer contacto con el nivel B2.",
                    schedule: {
                        day: "Lunes, martes",
                        time: "16:10-17:40"
                    },
                    price: "74€/mes"
                },
                img: prodE3_1
            },
            {
                id: 1,
                title: "Pathfinders",
                subtitle: "FCE Masters: B2.2",
                desc: {
                    desc:"Preparación avanzada para el First Certificate (B2).",
                    schedule: {
                        day: "Miércoles, viernes",
                        time: "M(19:10 - 21:10) - V(16:00 - 18:00)"
                    },
                    price: "92€/mes"
                },
                img: prodE3_2
            }
        ]
    },
    {
        id: 3,
        title: "English",
        subtitle: "Pre-College LEAders",
        desc: "Programa para quienes quieren alcanzar un nivel C1 antes de la universidad o para estudios internacionales. Perfecto para destacar en exámenes oficiales y desarrollar un dominio avanzado del idioma.",
        img: prodE4,
        items: [
            {
                id: 0,
                title: "LEAders",
                subtitle: "CAE Starters: C1.1",
                desc: {
                    desc:"Primeros pasos en el nivel avanzado (C1)",
                    schedule: {
                        day: "Lunes",
                        time: "16:10-17:40"
                    },
                    price: "74€/mes"
                },
                img: prodE4_1
            },
            {
                id: 1,
                title: "LEAders",
                subtitle: "CAE Masters: C1.2",
                desc: {
                    desc:"Preparación avanzada para el CAE (C1).",
                    schedule: {
                        day: "Lunes, martes",
                        time: "19:10 - 21:10"
                    },
                    price: "92€/mes"
                },
                img: prodE4_2
            }
        ]
    },
    {
        id: 4,
        title: "English",
        subtitle: "Adults Classes",
        desc: "Nuestros cursos para adultos están diseñados para diferentes niveles y necesidades, desde principiantes hasta viajeros y profesionales.",
        img: prodE5,
        items: [
            {
                id: 0,
                title: "Venturers",
                subtitle: "A1 - A2",
                desc: {
                    desc:"Primeros pasos en inglés con un enfoque práctico y comunicativo.",
                    schedule: {
                        day: "Miércoles",
                        time: "10:00-11:00"
                    },
                    price: "50€/mes"
                },
                img: prodE5_1
            },
            {
                id: 1,
                title: "Challengers",
                subtitle: "B1",
                desc: {
                    desc:"Mejora la fluidez y la comprensión en situaciones cotidianas",
                    schedule: {
                        day: "Miércoles",
                        time: "19:15 - 20:15"
                    },
                    price: "50€/mes"
                },
                img: prodE5_2
            },
            {
                id: 2,
                title: "Gliders",
                subtitle: "Mínimo B2",
                desc: {
                    desc:"Inglés avanzado para el ámbito académico o profesional",
                    schedule: {
                        day: "Miércoles",
                        time: "11:00 - 12:00"
                    },
                    price: "50€/mes"
                },
                img: prodE5_3
            },
            {
                id: 3,
                title: "Travelers",
                subtitle: "Inglés para viajar",
                desc: {
                    desc:"Expresiones y habilidades clave para viajar con confianza",
                    schedule: {
                        day: "Jueves",
                        time: "20:15 - 21:15"
                    },
                    price: "50€/mes"
                },
                img: prodE5_4
            }
        ]
    },
    {
        id: 5,
        title: "Français",
        subtitle: "École élémentaire",
        desc: "¡Aprender francés desde pequeños es una aventura emocionante! Nuestros cursos para niños de primaria están diseñados para que desarrollen habilidades lingüísticas de manera divertida y efectiva. Con actividades interactivas y profesores especializados, fomentamos la confianza y el amor por el francés desde temprana edad.",
        img: prodF1,
        items: [
            {
                id: 0,
                title: "Débutants",
                subtitle: "3º de primaria",
                desc: {
                    desc:"Primeros pasos en la comunicación en francés.",
                    schedule: {
                        day: "Lunes",
                        time: "18:00 - 19:00"
                    },
                    price: "50€/mes"
                },
                img: prodF1_1
            },
            {
                id: 1,
                title: "Volants",
                subtitle: "4º de primaria",
                desc: {
                    desc:"Expansión del vocabulario y habilidades orales.",
                    schedule: {
                        day: "Lunes",
                        time: "18:00 - 19:30"
                    },
                    price: "50€/mes"
                },
                img: prodF1_2
            },
            {
                id: 2,
                title: "Explorateurs",
                subtitle: "5º-6º de primaria",
                desc: {
                    desc:"Mayor fluidez con estructuras más avanzadas.",
                    schedule: {
                        day: "Lunes",
                        time: "18:00 - 19:30"
                    },
                    price: "50€/mes"
                },
                img: prodF1_3
            }
        ]
    },
    {
        id: 6,
        title: "Français",
        subtitle: "Collège B1",
        desc: "Nuestros cursos para secundaria están diseñados para que los adolescentes avancen en su aprendizaje con confianza, preparándose para certificaciones y un futuro bilingüe.",
        img: prodF2,
        items: [
            {
                id: 0,
                title: "Les conquérants B1.1",
                subtitle: "Iniciación",
                desc: {
                    desc:"Iniciación en el nivel intermedio.",
                    schedule: {
                        day: "Jueves",
                        time: "16:10 - 17:40"
                    },
                    price: "74€/mes"
                },
                img: prodF2_1
            },
            {
                id: 1,
                title: "Les élant B1.2",
                subtitle: "Consolidación",
                desc: {
                    desc:"Preparación avanzada para el DELF B1.",
                    schedule: {
                        day: "Jueves",
                        time: "16:10 - 17:40"
                    },
                    price: "74€/mes"
                },
                img: prodF2_2
            }
        ]
    },
    {
        id: 7,
        title: "Français",
        subtitle: "Lycee B2",
        desc: "Programa enfocado en adolescentes que desean alcanzar un nivel B2 con confianza, prepararse para certificaciones oficiales y un futuro académico o profesional internacional.",
        img: prodF3,
        items: [
            {
                id: 0,
                title: "Les aventurers B2.1",
                subtitle: "Iniciación",
                desc: {
                    desc:"Primer contacto con el nivel B2.",
                    schedule: {
                        day: "Lunes",
                        time: "20:00 - 21:30"
                    },
                    price: "74€/mes"
                },
                img: prodF3_1
            },
            {
                id: 1,
                title: "Les maître B2.2",
                subtitle: "Consolidación",
                desc: {
                    desc:"Preparación avanzada para el DELF B2.",
                    schedule: {
                        day: "Viernes",
                        time: "16:15 - 18:15"
                    },
                    price: "92€/mes"
                },
                img: prodF3_2
            }
        ]
    },
    {
        id: 8,
        title: "Français",
        subtitle: "LEAders C1",
        desc: "Programa para quienes quieren alcanzar un nivel C1 antes de la universidad o para estudios internacionales. Perfecto para destacar en exámenes oficiales y desarrollar un dominio avanzado del idioma.",
        img: prodF4,
        items: [
            {
                id: 0,
                title: "LEAders C1.1",
                subtitle: "Iniciación",
                desc: {
                    desc:"Primeros pasos en el nivel avanzado C1.",
                    schedule: {
                        day: "Martes",
                        time: "19:10 - 20:40"
                    },
                    price: "74€/mes"
                },
                img: prodF4_1
            },
            {
                id: 1,
                title: "LEAders C1.1",
                subtitle: "Consolidación",
                desc: {
                    desc:"Preparación avanzada para el DALF C1.",
                    schedule: {
                        day: "Jueves",
                        time: "19:10 - 21:10"
                    },
                    price: "92€/mes"
                },
                img: prodF4_2
            },
            {
                id: 2,
                title: "Preparación EvAU",
                subtitle: "Simulacros de exámenes EvAU",
                desc: {
                    desc:"Inglés y francés",
                    schedule: {
                        day: "NO INFO",
                        time: "NO INFO"
                    },
                    price: "NO INFO"
                },
                img: prodF4_3
            }
        ]
    },
    {
        id: 9,
        title: "Français",
        subtitle: "Leçons pour les adultes",
        desc: "Nuestros cursos para adultos están diseñados para diferentes niveles y necesidades, desde principiantes hasta viajeros y profesionales.",
        img: prodF5,
        items: [
            {
                id: 0,
                title: "Les Audacieux",
                subtitle: "A1 - A2",
                desc: {
                    desc:"Primeros pasos en francés con un enfoque práctico y comunicativo",
                    schedule: {
                        day: "Lunes",
                        time: "18:30 - 19:30"
                    },
                    price: "50€/mes"
                },
                img: prodF5_1
            },
            {
                id: 1,
                title: "Les Challengers",
                subtitle: "B1",
                desc: {
                    desc:"Mejora la fluidez y la comprensión en situaciones cotidianas.",
                    schedule: {
                        day: "Miércoles",
                        time: "19:15 - 20:15"
                    },
                    price: "50€/mes"
                },
                img: prodF5_2
            },
            {
                id: 2,
                title: "Les Bavards",
                subtitle: "Mínimo B2",
                desc: {
                    desc:"Francés avanzado para el ámbito académico o profesional.",
                    schedule: {
                        day: "Miércoles",
                        time: "11:00 - 12:00"
                    },
                    price: "50€/mes"
                },
                img: prodF5_3
            },
            {
                id: 3,
                title: "Les Voyageurs",
                subtitle: "Francés para viajar",
                desc: {
                    desc:"Expresiones y habilidades clave para viajar con confianza.",
                    schedule: {
                        day: "Jueves",
                        time: "20:15 - 21:15"
                    },
                    price: "50€/mes"
                },
                img: prodF5_4
            }
        ]
    },
    {
        id: 10,
        title: "Otros idiomas",
        subtitle: "¿Estás interesado en otros idiomas?",
        desc: "NO INFO",
        img: prod6,
        items: [
            {
                id: 0,
                title: "Español",
                subtitle: "Particulares en línea y presenciales",
                desc: {
                    desc:"A1-C1",
                    schedule: {
                        day: "",
                        time: ""
                    },
                    price: "30€/hora"
                },
                img: prod6
            },
            {
                id: 1,
                title: "Italiano",
                subtitle: "Particulares en línea y presenciales",
                desc: {
                    desc:"A1-B2",
                    schedule: {
                        day: "",
                        time: ""
                    },
                    price: "30€/hora"
                },
                img: prod6
            },
            {
                id: 2,
                title: "¿Otros idiomas?",
                subtitle: "¡Pregúntanos!",
                desc: {
                    desc:"Alemán, árabe, portugués, japonés, chino, …",
                    schedule: {
                        day: "",
                        time: ""
                    },
                    price: ""
                },
                img: prod6
            }
        ]
    },
    {
        id: 11,
        title: "Otros servicios",
        subtitle: "",
        desc: "En LEA ofrecemos una variedad de servicios diseñados para complementar tu aprendizaje y adaptarnos a tus necesidades. Desde clases particulares y formación para empresas hasta traducciones y asesoramiento lingüístico. ¡Descubre cómo podemos acompañarte",
        img: prod7,
        items: [
            {
                id: 0,
                title: "Refuerzo escolar",
                subtitle: "Clases particulares de inglés, francés o español",
                desc: {
                    desc:"Primaria, secundaria, bachillerato y universidad",
                    schedule: {
                        day: "",
                        time: ""
                    },
                    price: ""
                },
                img: prod7
            },
            {
                id: 1,
                title: "Traducciones juradas",
                subtitle: "Inglés-español y español inglés",
                desc: {
                    desc:"Títulos y certificados académicos, antecedentes penales, nacimiento, matrimonio, etc.",
                    schedule: {
                        day: "",
                        time: ""
                    },
                    price: ""
                },
                img: prod7
            },
            {
                id: 2,
                title: "Estudiar en el extranjero",
                subtitle: "¿Verano en Irlanda? ¿Universidad en EE.UU.?",
                desc: {
                    desc:"Asesoramiento, búsqueda y selección de programas de estudio.",
                    schedule: {
                        day: "",
                        time: ""
                    },
                    price: ""
                },
                img: prod7
            },
            {
                id: 3,
                title: "Formación",
                subtitle: "Empresas y centros educativos",
                desc: {
                    desc:"Clases de idiomas y formación docente.",
                    schedule: {
                        day: "",
                        time: ""
                    },
                    price: ""
                },
                img: prod7
            },
        ]
    },
]

export default productsList;