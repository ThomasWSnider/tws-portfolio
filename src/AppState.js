import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  skills: [
    {
      name: "HTML",
      logo: "mdi-language-html5",
      color: "#e34c26"
    },
    {
      name: "CSS",
      logo: "mdi-language-css3",
      color: "#264de4"
    },
    {
      name: "JavaScript",
      logo: "mdi-language-javascript",
      color: "#f7df1e"
    },
    {
      name: "C#",
      logo: "mdi-language-csharp",
      color: "#876ce1"
    },
    {
      name: "SQL",
      logo: "mdi-database",
      color: "#00618a"
    },
    {
      name: "Vue.js",
      logo: "mdi-vuejs",
      color: "#42b883"
    },
    {
      name: "Node.js",
      logo: "mdi-nodejs",
      color: "#44883e"
    },
    {
      name: "Bootstrap",
      logo: "mdi-bootstrap",
      color: "#563d7c"
    }
  ]
})

