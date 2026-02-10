export const navItems = [
    { name: "Sobre mí", link: "#about" },
    { name: "Proyectos", link: "#projects" },
    { name: "Contacto", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Resuelvo problemas reales con código limpio y criterio técnico.",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Diseño, lógica y datos en cada proyecto.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Stack técnico",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Siempre aprendiendo nuevas herramientas y frameworks.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Enfocado en proyectos full-stack y data-driven.",
      description: "Actualmente",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "¿Arrancamos un proyecto juntos?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const  projects = [
    {
      id: 1,
      title: "UTNRating",
      des: "Sistema web para gestionar y visualizar ratings académicos con backend propio y lógica orientada a decisiones.",
      img: "/utnrating.webp",
        iconLists: ["react", "nextjs", "typescript", "supabase"],
      link: "https://utnrating.vercel.app/",
    },
    {
      id: 2,
      title: "Predictor de partidos – Premier League",
      des: "Modelo de ML para predecir resultados con datos históricos, EDA, selección de variables y evaluación.",
      img: "/premierleague.webp",
        iconLists: ["python", "scikit-learn", "pandas", "numpy"],
      link: "https://github.com/BautistaAlosMartorell/premierleague-predictor",
    },
    {
      id: 3,
      title: "Detector de cartas – PyTorch",
      des: "Visión por computadora para detectar y clasificar cartas con redes entrenadas en PyTorch.",
      img: "/carddetector.webp",
        iconLists: ["python", "pytorch", "numpy"], 
      link: "https://github.com/BautistaAlosMartorell/card-detector-pytorch.git",
    },
    {
      id: 4,
      title: "GESPRO – Sistema de stock",
      des: "Sistema full-stack de inventario y operaciones con foco en backend, datos y lógica de negocio.",
      img: "/gespro.webp",
        iconLists: ["nextjs", "typescript", "postgresql", "tailwindcss"],
      link: "https://github.com/valentinmathey/stock-system-frontendt",
    },
    {
        id: 5,
        title: "ThreeJS Shop",
        des: "Web interactiva para diseñar remeras 3D con visualización avanzada, personalización y gran UX.",
        img: "/threejsshop.webp",
          iconLists: ["javascript", "threejs", "tailwindcss"],
        link: "https://github.com/BautistaAlosMartorell/ThreejsShop.git",
      },
      {
        id: 6,
        title: "Nike Landing Page",
        des: "Clon responsive de la landing de Nike con foco en diseño, layout y fidelidad visual.",
        img: "/nike.webp",
          iconLists: ["typescript", "nextjs", "tailwindcss"],
        link: "https://github.com/BautistaAlosMartorell/NikeLandingPage.git",
      },
  ];
  

  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/BautistaAlosMartorell"
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/bautista-alos-martorell"
    },
  ];