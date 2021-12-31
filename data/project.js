import CampusDashImage from '~/assets/images/projects/campusdash.webp'
import ChuuseImage from '~/assets/images/projects/chuuse.webp'
import LearnPower from '~/assets/images/projects/learnpower.webp'
import legalNaija from '~/assets/images/projects/legal-naija.webp'
import MillionaireExchange from '~/assets/images/projects/millionaire-exchange.webp'
import MyExtraSheet from '~/assets/images/projects/myextrasheet.webp'
import PrinceDeMartitime from '~/assets/images/projects/prince-de-maritime.webp'
import SnappyExchange from '~/assets/images/projects/snappy-exchange.webp'
import MataCare from '~/assets/images/projects/matacare.webp'
import SnappyExchangeUserDashboard from '~/assets/images/projects/snappyexchange-user-dashboard.webp'
import PenalougeWaiting from '~/assets/images/projects/penalogue.webp'

export const projects = [
  {
    name: 'CampusDash',
    description:
      'Landing page for a new service, the page is built with Nuxt to leverage on Nuxt SEO capabilities and Static Site Generation',
    image: CampusDashImage,
    link: 'https://campusdash.com.ng',
    stack: ['Nextjs', 'React', 'Tailwindcss', 'Firebase', 'Netlify', 'Github'],
    imageAlt: 'CampusDash developed by Adegoke Temitope',
  },
  {
    name: 'Penalogue Waiting',
    description:
      'The waiting platform uses Firebase on the backend. The frontend is built with HTML, CSS, Tailwind and JavaScript. No framework by choice ',
    image: PenalougeWaiting,
    link: 'https://penalouge.com',
    stack: ['HTML', 'CSS', 'JavaScript', 'Github', 'Tailwind'],
    imageAlt: 'Penalouge Waiting developed by Adegoke Temitope',
  },
   {
    name: 'Dotenv Intellisense',
    description:
      'When building Application in VSCode, in most cases there are sensitive data which are written in a .env file, I created a VS Code extension that scans .env files within a workspace and provide Autocomplete which reduces Copy and Paste between files. The project was built with Typescript',
     stack: ['vscode', 'vscode-extension', 'typescript'],
     image: 'https://via.placeholder.com/1000?text=DotenvIntellisense',
    link: 'https://marketplace.visualstudio.com/items?itemName=temitope1909.dotenv-intellisense',
    links: {
      github: 'https://github.com/Devdre1909/dotenv-intellisence',
      url: 'https://marketplace.visualstudio.com/items?itemName=temitope1909.dotenv-intellisense',
    },
  },
  {
    name: 'Legal Naija',
    description:
      'The platform runs a RESTFUL API backend built with NodeJS, using MongoDB for database. The Frontend was initially built with NuxtJS then migrated to vue still using Vuex for state management and Axios for API calls, the UI design is base on Ant UI Library.',
    image: legalNaija,
    link: 'https://app.legalnaija.com/',
    stack: ['Vue', 'Vue Ant UI', 'Digital Ocean', 'REST API', 'Axios'],
    imageAlt: 'Legal Naija developed by Adegoke Temitope',
  },
  {
    name: 'MataCare',
    description: '',
    image: MataCare,
    link: 'https://matacare.health/',
    stack: ['React', 'Tailwindcss', 'Axios'],
    imageAlt: 'Adegoke Temitope',
  },
  {
    name: 'Snappy Exchange User Dashboard',
    description: 'The web app runs a RESTFUL API backend built with NodeJS, the frontend has two dashboard, was built with VueJS and Vuetify, uses Vuex of State management',
    image: SnappyExchangeUserDashboard,
    link: 'https://app.snappyexchange.com',
    stack: ['Vue', 'Vuetify', 'Axios', 'Digital Ocean', 'REST API'],
    imageAlt: 'Adegoke Temitope, Snappy Exchange User Dashboard',
  },
  {
    name: 'Snappy Exchange',
    description: 'The website of the the web app before this, built with NuxtJS and TailwindCSS',
    image: SnappyExchange,
    link: 'https://snappyexchange.com/',
    stack: ['Nuxt', 'TailwindCSS', 'Digital Ocean', 'REST API', 'Axios'],
    imageAlt: 'Snappy Exchange, Adegoke Temitope',
  },
  {
    name: 'Millionaire Exchange',
    description: '',
    image: MillionaireExchange,
    link: 'https://millionairaexchange.org',
    stack: ['Vue', 'Tailwindcss'],
    imageAlt: 'Millionaire Exchange, Adegoke Temitope',
  },
  {
    name: 'Chuuse',
    description: '',
    image: ChuuseImage,
    link: 'https://chuuse.org',
    stack: ['Vue', 'Tailwind'],
    imageAlt: 'Chuuse, Adegoke Temitope',
  },
  {
    name: 'LearnPower',
    description: 'This educational platform runs on a PHP/Laravel backend providing RESTful API for the frontend which was built with React and Charka UI for a UI Library, it uses just Context API for State management',
    image: LearnPower,
    link: 'https://learnpower.ng',
    stack: ['React', 'Chakra UI', 'AWS', 'Tailwind', 'Redux', 'Github'],
    imageAlt: 'LearnPower, Adegoke Temitope',
  },
  {
    name: 'Prince De Maritime',
    description: '',
    image: PrinceDeMartitime,
    link: 'http://princedemaritime.com/',
    stack: ['HTML', 'CSS', 'JavaScript', 'tailwind'],
    imageAlt: 'Prince De Maritime, Adegoke Temitope',
  },
  {
    name: 'MyExtraSheet',
    description: '',
    image: MyExtraSheet,
    stack: ['Vue', 'Tailwind'],
    imageAlt: 'MyExtraSheet, Adegoke Temitope',
  },
]

export const personalProjects = [

]
