import { Product, BlogPost, Category } from './types';

export const categories: Category[] = [
  { id: 1, name: "Aplicaciones Web", iconClass: "fa-solid fa-globe", href: "/fabrica-software" },
  { id: 2, name: "Aplicaciones Móvil", iconClass: "fa-solid fa-mobile-screen", href: "/fabrica-software" },
  { id: 3, name: "Apps con Base de Datos", iconClass: "fa-solid fa-database", href: "/fabrica-software" },
  { id: 4, name: "Mantenimiento Site", iconClass: "fa-solid fa-server", href: "/infraestructura-tecnologica" },
  { id: 5, name: "Mantenimiento CCTV", iconClass: "fa-solid fa-video", href: "/infraestructura-tecnologica" },
  { id: 6, name: "Licencias Suite Adobe", iconClass: "fa-solid fa-pen-nib", href: "/suite-licencias" },
  { id: 7, name: "Licencias Microsoft", iconClass: "fa-brands fa-windows", href: "/suite-licencias" },
  { id: 8, name: "Licencias Autodesk", iconClass: "fa-solid fa-compass-drafting", href: "/suite-licencias" },
  { id: 9, name: "Menús Digitales", iconClass: "fa-solid fa-utensils", href: "/fabrica-software" },
  { id: 10, name: "Soporte Técnico", iconClass: "fa-solid fa-headset", href: "#contact-footer" },
  { id: 11, name: "Infraestructura", iconClass: "fa-solid fa-satellite-dish", href: "/infraestructura-tecnologica" },
  { id: 12, name: "Sistemas Operativos", iconClass: "fa-brands fa-windows", href: "/suite-licencias" },
  { id: 13, name: "Software Contable", iconClass: "fa-solid fa-calculator", href: "/suite-licencias" },
  { id: 14, name: "Software Restaurantero", iconClass: "fa-solid fa-utensils", href: "/suite-licencias" },
];

export const products: Product[] = [
  { id: 1, name: "WordPress Pro", price: 59.99, oldPrice: 89.99, image: "/media-clear/474036AC-DED2-43F0-B8A5-C662A3B35519_1_102_o-1536x1536.jpeg", category: "Aplicaciones Web", isSale: true },
  { id: 2, name: "App con Base Datos", price: 99.99, oldPrice: 149.99, image: "/media-clear/3-1-1536x1536.png", category: "Aplicaciones Móvil", isSale: true },
  { id: 3, name: "Eccomerce", price: 149.99, image: "/media-clear/5-1-1536x1536.png", category: "Apps con Base de Datos", isSale: true},
  { id: 4, name: "Site Maintenance Plus", price: 29.99, oldPrice: 45.00, image: "/media-clear/Gemini_Generated_Image_1cog3y1cog3y1cog.png", category: "Mantenimiento Site", isSale: false },
  { id: 5, name: "CCTV Security Pro", price: 49.99, image: "/media-clear/6-2-1536x1536.png", category: "Mantenimiento CCTV" },
  { id: 6, name: "Adobe Creative Cloud", description: "Compatible con Win 10/11 & Mac (Intel/Silicon)", price: 39.99, oldPrice: 59.99, image: "/media-clear/1-1536x1536.png", category: "Licencias Suite Adobe", isSale: false },
  { id: 7, name: "Microsoft 365 Business", description: "Compatible con Win 10/11 & Mac (Intel/Silicon)", price: 8.99, oldPrice: 12.50, image: "/media-clear/1484D618-3FCE-4D82-AB8A-E95A8B87FA11_1_102_o-1536x1536.jpeg", category: "Licencias Microsoft", isSale: false },
  { id: 8, name: "Autodesk AutoCAD", description: "Compatible con Win 10/11 & Mac (Intel)", price: 149.99, oldPrice: 195.00, image: "/media-clear/6-1536x1536.png", category: "Licencias Autodesk", isSale: false },
  { id: 9, name: "Menú Digital QR", price: 19.99, image: "/media-clear/8-1-1536x1536.png", category: "Menús Digitales" },
  { id: 10, name: "Soporte Técnico 24/7", price: 39.99, oldPrice: 59.99, image: "/media-clear/10-1536x1536.png", category: "Soporte Técnico", isSale: false },
  { id: 11, name: "Instalación de Starlinks", price: 299.99, oldPrice: 350.00, image: "/media-clear/star-pre.png", category: "Infraestructura", isSale: true },
  { id: 12, name: "Windows 11 Professional", description: "Compatible con Ecosistemas Win 10 y 11", price: 129.99, oldPrice: 199.99, image: "/media-clear/win11.jpeg", category: "Sistemas Operativos", isNew: true },
  { id: 13, name: "CONTPAQi Contabilidad (Compaq)", description: "Compatible con Win 10 y 11", price: 450.00, image: "/media-clear/compaq.jpeg", category: "Software Contable" },
  { id: 14, name: "SoftRestaurant v11 Pro", description: "Compatible con Win 10 y 11", price: 599.00, image: "/media-clear/soft-restaurant.jpeg", category: "Software Restaurantero" },
];

export const blogPosts: BlogPost[] = [
  { id: 1, title: "Ingeniería", date: "roberttozappiain@ceteos.mx", author: "Ing. Robertto Zappiain. ", excerpt: "Ingeniero en Desarrollo y Gestión de software, Tecnologías de la información, Informatica", image: "/media-clear/device-mockup_1.5x_postspark_2026-01-21_00-29-54.webp" },
  { id: 2, title: "Arquitectura movil", date: "@ceteos.mx", author: ". ", excerpt: "Ingeniero en Desarrollo y Gestión de software, Tecnologías de la información, Informatica", image: "/media-clear/screenshot_1.5x_postspark_2025-11-26_22-24-57.png" },
  { id: 3, title: "Marketing y Diseño", date: "", author: "mkt@ceteos.com", excerpt: "Cómo optimizar tu negocio con aplicaciones web y móviles personalizadas con un diseño increible inpulsado por IA para maximizar la productividad...", image: "/media-clear/cropped-F5701508-82D0-44A8-8056-8A9D0C5B3F35_1_102_o-1-1536x1536.jpeg" },
  { id: 4, title: "Ventas y Cotización", date: "", author: "ventas@ceteos.com", excerpt: "Nuestro equipo de ventas te ayuda a solucionar tus dudas antes de realizar algun pago.", image: "/media-clear/screenshot_1.5x_postspark_2025-11-26_22-24-57.png" },
];

export const brands = [
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Autodesk", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Autodesk_Logo_2021.svg" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg" },
  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
  { name: "Hikvision", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Hikvision_logo.svg" },
  { name: "Dahua", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Dahua_Technology_logo.svg" },
  { name: "WordPress", logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" },
];
