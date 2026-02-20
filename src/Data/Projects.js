import shoppingCenterIMG from '../assets/Images/Shopping-center.jpeg';
import emsIMG from '../assets/Images/EMS-IMG.jpg';

const projects = [
    {
        projectIMG: shoppingCenterIMG,
        title: "Shopping Center Website",
        description: "E-commerce platform built with Django and Tailwind CSS featuring product filtering, cart and checkout functionality, secure payment integration, and admin-based order management. Designed with a clean, responsive UI and modular backend architecture.",
        ProjectLink: "https://github.com/anurag-rajput-work/eCommerce",
        technologies: "Python, Django, Tailwind CSS"
    },
    {
        projectIMG: emsIMG,
        title: "Employee Management System",
        description: "A React.js application that allows users to add, edit, view, and delete employee records with full CRUD functionality. Built using Vite and Tailwind CSS, it leverages LocalStorage for persistent data handling and demonstrates clean component-based architecture and state management.",
        ProjectLink: "https://github.com/anurag-rajput-work/Employee-management-system",
        technologies: "Javascript, React.js, Tailwind CSS"    
    }

]

export default projects;