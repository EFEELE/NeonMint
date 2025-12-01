// Translation keys and values
export const translations = {
  es: {
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      about: "Sobre Mí",
    },
    hero: {
      available: "Disponible para trabajar",
      experience: "6 meses de experiencia",
      description: "apasionado por el desarrollo, la tecnología. Me encanta dar vida a proyectos digitales.",
      aboutMe: "Sobre Mí",
    },
    experience: {
      title: "Experiencia",
      work: "Laboral",
      education: "Educación",
      developer: "Desarrollador Web",
      systemsEngineer: "Ingeniero en Sistemas y Computación",
      python: "Introducción a la Programación en Python I",
      certifications: "Múltiples Certificaciones",
      current: "Actualidad",
      tasks: {
        webSystems: "Creación de sistemas Web personalizados",
        apis: "Desarrollo de APIs y Microservicios",
        integration: "Elaboración de integración de sistemas",
        ecommerce: "Divulgación E-commerce",
        softwareStages: "Aplicación de las etapas del desarrollo de software en la implementación de soluciones de TIC",
        cpp: "Estructura de lenguaje de programación C++ (NIVEL I)",
        electronics: "Elaboración de circuitos electrónicos",
      },
      descriptions: {
        systems: "Estudiante de Ingeniería en Sistemas y Computación, enfocado en desarrollo de software y tecnologías modernas.",
        python: "Aprendiendo a programar con Python - Fundamentos de programación y desarrollo de software.",
      },
    },
    projects: {
      title: "Mis",
      titleGradient: "Proyectos",
      description: "Aquí puedes ver algunos de los proyectos en los que he trabajado, aplicando las últimas tecnologías y mejores prácticas de desarrollo.",
      viewProject: "Ver proyecto",
      code: "Código",
      featured: "Destacado",
    },
    contact: {
      title: "Contáctame",
      titleGradient: "Ahora",
      workTogether: "¡Trabajemos juntos!",
      description: "¿Tienes un proyecto en mente? Me encantaría escuchar sobre tu idea y ayudarte a convertirla en realidad. Estoy disponible para proyectos freelance y colaboraciones.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      connectLinkedIn: "Conectar en LinkedIn",
      viewProjects: "Ver mis proyectos",
      available: "Disponible para proyectos",
      responseTime: "Actualmente acepto proyectos freelance y colaboraciones. Tiempo de respuesta: 24-48 horas.",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre completo",
        email: "Email",
        emailPlaceholder: "tu@email.com",
        subject: "Asunto",
        subjectPlaceholder: "¿En qué puedo ayudarte?",
        message: "Mensaje",
        messagePlaceholder: "Cuéntame sobre tu proyecto o consulta...",
        send: "Enviar mensaje",
        sending: "Enviando...",
        success: "✅ ¡Mensaje enviado con éxito!",
        error: "❌ Ocurrió un error al enviar el mensaje. Intenta de nuevo más tarde.",
      },
    },
    tech: {
      stack: "Stack",
    },
    hobbies: {
      title: "Más allá del",
      titleGradient: "Código",
    },
    github: {
      text: "¿Te gusta el diseño de este portafolio?",
      description: "Explora mi código, contribuciones y proyectos open source en GitHub.",
    },
  },
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      about: "About Me",
    },
    hero: {
      available: "Available for work",
      experience: "6 months of experience",
      description: "passionate about development, technology. I love bringing digital projects to life.",
      aboutMe: "About Me",
    },
    experience: {
      title: "Work",
      titleGradient: "Experience",
      work: "Work",
      education: "Education",
      developer: "Web Developer",
      systemsEngineer: "Systems and Computer Engineering",
      python: "Introduction to Python Programming I",
      certifications: "Multiple Certifications",
      current: "Present",
      tasks: {
        webSystems: "Creation of customized Web systems",
        apis: "Development of APIs and Microservices",
        integration: "System integration development",
        ecommerce: "E-commerce promotion",
        softwareStages: "Application of software development stages in ICT solution implementation",
        cpp: "C++ Programming Language Structure (LEVEL I)",
        electronics: "Electronic circuit development",
      },
      descriptions: {
        systems: "Systems and Computer Engineering student, focused on software development and modern technologies.",
        python: "Learning to program with Python - Programming fundamentals and software development.",
      },
    },
    projects: {
      title: "My",
      titleGradient: "Projects",
      description: "Here you can see some of the projects I've worked on, applying the latest technologies and best development practices.",
      viewProject: "View project",
      code: "Code",
      featured: "Featured",
    },
    contact: {
      title: "Contact",
      titleGradient: "Me",
      workTogether: "Let's work together!",
      description: "Do you have a project in mind? I'd love to hear about your idea and help you bring it to life. I'm available for freelance projects and collaborations.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      connectLinkedIn: "Connect on LinkedIn",
      viewProjects: "View my projects",
      available: "Available for projects",
      responseTime: "Currently accepting freelance projects and collaborations. Response time: 24-48 hours.",
      form: {
        name: "Name",
        namePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        subject: "Subject",
        subjectPlaceholder: "How can I help you?",
        message: "Message",
        messagePlaceholder: "Tell me about your project or inquiry...",
        send: "Send message",
        sending: "Sending...",
        success: "✅ Message sent successfully!",
        error: "❌ An error occurred while sending the message. Please try again later.",
      },
    },
    tech: {
      stack: "Stack",
    },
    hobbies: {
      title: "Beyond the",
      titleGradient: "Code",
    },
    github: {
      text: "Do you like this portfolio's design?",
      description: "Explore my code, contributions and open source projects on GitHub.",
    },
  },
};

export type Language = "es" | "en";
export type TranslationKey = keyof typeof translations.es;

// Get current language from localStorage or default to Spanish
export function getCurrentLanguage(): Language {
  if (typeof window === "undefined") return "es";
  const saved = localStorage.getItem("language") as Language;
  return saved && (saved === "es" || saved === "en") ? saved : "es";
}

// Set language in localStorage
export function setLanguage(lang: Language): void {
  if (typeof window === "undefined") return;
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;
}

// Get translation for a key
export function t(key: string, lang?: Language): string {
  // If lang is provided, use it. Otherwise, try to get from localStorage (client-side only)
  let currentLang: Language = "es"; // Default to Spanish
  
  if (lang) {
    currentLang = lang;
  } else if (typeof window !== "undefined") {
    // Only try to get from localStorage on client-side
    currentLang = getCurrentLanguage();
  }
  
  const keys = key.split(".");
  let value: any = translations[currentLang];
  
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) {
      // Fallback to Spanish if translation not found
      value = translations.es;
      for (const k2 of keys) {
        value = value?.[k2];
      }
      break;
    }
  }
  
  return typeof value === "string" ? value : key;
}

