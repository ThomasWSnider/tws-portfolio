import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('./models/Skill.js').Skill[]} An array of objects containing data about relevant skills*/
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
  /**@type {import('./models/Project.js').Project[]} */
  projects: [
    {
      title: 'Keepr',
      img: '',
      description: ''
    },
    {
      title: 'Keepr',
      img: '',
      description: ''
    },
  ]

})

