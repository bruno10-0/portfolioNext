import { Project } from "./types"

export const projects: Project[] = [
  {
    id: 1,
    title: "Queen's Closet",
    description: 'Tienda de ropa con estilo minimalista e integración con MercadoPago.',
    descriptionLong: `Queen's Closet es una tienda de ropa online diseñada con un enfoque minimalista y moderno, pensada para brindar una experiencia de usuario limpia, fluida y visualmente atractiva. 

La plataforma permite explorar una variedad de productos, cada uno presentado con imágenes de alta calidad y descripciones claras. Su diseño responsive asegura una navegación cómoda tanto en dispositivos móviles como de escritorio.

Se destaca su integración con MercadoPago, facilitando compras seguras y rápidas para el público de Latinoamérica. 

Fue construida utilizando tecnologías modernas del ecosistema JavaScript como React, Next.js y Tailwind CSS, y desplegada en Vercel.`,
    image: 'https://kera-two.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.83fac741.png&w=640&q=75',
    tags: ['E-commerce', 'Minimalismo', 'UX/UI', 'Pago en línea'],
    date: 'Enero 2023',
    tecnology: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'MercadoPago'],
    github: 'https://github.com/bruno10-0/queenF',
    liveUrl: 'https://kera-two.vercel.app/',
  },
  {
    id: 2,
    title: 'Bloomi',
    description: 'Plataforma que conecta mentores con mentees para compartir conocimientos y habilidades.',
    descriptionLong: `Bloomi es una plataforma educativa y de networking donde mentores y mentees pueden conectarse a través de intereses y habilidades compartidas. 

Ofrece perfiles personalizados, filtros por categorías de conocimiento y herramientas para agendar sesiones o intercambiar mensajes.

La aplicación está desarrollada con Next.js y Tailwind CSS, utilizando Supabase como backend para autenticación y base de datos. Además, se integra con Shadcn para una interfaz consistente y accesible.`,
    image: 'https://res.cloudinary.com/dzemdgvqo/image/upload/v1744215705/imgPortfolio/le0nozkqh0dklncxi2lo.png',
    tags: ['Educación', 'Mentoría', 'Desarrollo Personal', 'Conexión Humana'],
    date: '2024',
    tecnology: ['Next.js', 'Tailwind CSS', 'Supabase', 'Shadcn', 'Typescript'],
    github: 'https://github.com/usuario/bloomi',
    liveUrl: 'https://bloomioficial.com/',
  },
  {
    id: 3,
    title: 'DataPet',
    description: 'App móvil para gestión de la libreta sanitaria y seguimiento de salud de mascotas.',
    descriptionLong: `DataPet es una aplicación móvil pensada para facilitar la vida de los dueños de mascotas, permitiéndoles registrar, consultar y gestionar la libreta sanitaria de sus animales.

La app permite llevar un historial de vacunas, visitas al veterinario, tratamientos y recordatorios. Su interfaz es intuitiva y centrada en la experiencia del usuario.

Desarrollada en React Native con Expo, usando Firebase para autenticación y almacenamiento de datos en tiempo real.`,
    image: 'https://portfolio-skuu.onrender.com/assets/logoDataPet-DAu4U9CH.png',
    tags: ['Salud Animal', 'Mascotas', 'Mobile App', 'Firebase'],
    date: '2023',
    tecnology: ['React Native', 'Expo', 'Firebase', 'Push Notifications'],
    github: 'https://github.com/usuario/datapet',
    liveUrl: 'https://datapet.app/',
  },
  {
    id: 4,
    title: 'Espacio Baco',
    description: 'E-commerce de vinos con atención personalizada por WhatsApp.',
    descriptionLong: `Espacio Baco es una tienda virtual especializada en vinos y bebidas premium. El proyecto se enfocó en ofrecer una atención más cercana a través de WhatsApp, permitiendo una experiencia de compra personalizada.

El sitio cuenta con un catálogo visual y funcional, optimizado para carga rápida y navegación simple.

Construido con tecnologías web tradicionales como HTML, CSS y JavaScript, e integrado con enlaces directos a WhatsApp para facilitar la compra.`,
    image: 'https://portfolio-skuu.onrender.com/assets/logoEspacioBaco-Rx5UUPaQ.png',
    tags: ['Vinos', 'Venta Directa', 'Tienda Online', 'WhatsApp'],
    date: '2022',
    tecnology: ['HTML', 'CSS', 'JavaScript', 'WhatsApp API'],
    github: 'https://github.com/usuario/espacio-baco',
    liveUrl: 'https://espaciobaco.vercel.app/',
  },
  {
    id: 5,
    title: 'Quejup',
    description: 'Plataforma cívica de publicaciones georreferenciadas de quejas ciudadanas.',
    descriptionLong: `Quejup es una aplicación web que permite a los ciudadanos hacer visibles sus reclamos y problemas cotidianos mediante publicaciones geolocalizadas en un mapa interactivo.

El objetivo es empoderar a la ciudadanía y visibilizar reclamos barriales para generar impacto colectivo. 

Desarrollada con React, Leaflet para mapas, Node.js en el backend y MongoDB como base de datos, Quejup es una herramienta útil para fomentar la participación ciudadana.`,
    image: 'https://portfolio-skuu.onrender.com/assets/logoQuejup-GT4qLXPr.png',
    tags: ['Ciudadanía', 'Geolocalización', 'Cívico', 'Mapa Interactivo'],
    date: '2024',
    tecnology: ['React', 'Leaflet', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/usuario/quejup',
    liveUrl: 'https://quejup.app/',
  },
]
