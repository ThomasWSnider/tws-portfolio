import { reactive } from 'vue'
// @ts-ignore
import keeperScreenshot from '../public/img/KeeprScreenshot.png'
// @ts-ignore
import MindPaletteScreenshot from '../public/img/MindPaletteScreenshot.png'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {Boolean} whether the contact form has been submitted or not*/
  submitted: false,
  /**@type {Object[]} An array of objects containing data about relevant skills*/
  skills: [
    {
      name: "HTML",
      logo: "language-html5",
      color: "#e34c26"
    },
    {
      name: "CSS",
      logo: "language-css3",
      color: "#264de4"
    },
    {
      name: "JavaScript",
      logo: "language-javascript",
      color: "#f7df1e"
    },
    {
      name: "C Sharp",
      logo: "language-csharp",
      color: "#876ce1"
    },
    {
      name: "SQL",
      logo: "dolphin",
      color: "#00618a"
    },
    {
      name: "MongoDB",
      logo: "leaf",
      color: "#00684a"
    },
    {
      name: "Vue.js",
      logo: "vuejs",
      color: "#42b883"
    },
    {
      name: "Node.js",
      logo: "nodejs",
      color: "#44883e"
    },
    {
      name: "Bootstrap",
      logo: "bootstrap",
      color: "#563d7c"
    }
  ],
  /**@type {Object[]} array of objects containing data about different projects*/
  projects: [
    {
      title: 'Keepr',
      img: keeperScreenshot,
      description: 'Keepr is a social media app that allows users to explore, create, and organize keeps into personal vaults, with options for private or public vaults. Built with Vue.js and Vue Router for the frontend, a .NET Web API backend using the Repository pattern, and MySQL with Dapper for the database, the app integrates Auth0 for secure authentication. Key features include engagement tracking for keeps, detailed views, and private vault functionality. The project follows a Figma design mock-up, adhering to UI/UX best practices, and meets all functionality through a comprehensive API test suite.',
      link: 'https://keepr.twsnider.work/'
    },
    {
      title: 'Mind Palette',
      img: MindPaletteScreenshot,
      description: 'Mind Palette is a flashcard study app designed to help users efficiently create, manage, and study flashcards. Built with Vue.js, Node.js, Express, and MongoDB, the app features user registration and secure authentication via Auth0. Users can organize flashcards into decks, and engage with the study mode, which mimics the experience of physical flashcards. The app is responsive, user-friendly, and optimized for both desktop and mobile. MindPalette offers a seamless learning experience through its intuitive interface and robust functionality.',
      link: 'https://mindpalette.twsnider.work/'
    },
  ]
})

