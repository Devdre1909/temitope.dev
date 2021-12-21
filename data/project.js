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
    description: '',
    image: CampusDashImage,
    link: 'https://campusdash.com.ng',
    stack: ['Nextjs', 'React', 'Tailwindcss', 'Firebase', 'Netlify', 'Github'],
    imageAlt: 'CampusDash developed by Adegoke Temitope',
  },
  {
    name: "Penalogue Waiting",
    description: "",
    image: PenalougeWaiting,
    link: "https://penalouge.com",
    stack: ['HTML', 'CSS', 'JavaScript', 'Github', 'Tailwind'],
    imageAlt: "Penalouge Waiting developed by Adegoke Temitope",
  },
  {
    name: 'Legal Naija',
    description: '',
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
    description: '',
    image: SnappyExchangeUserDashboard,
    link: 'https://app.snappyexchange.com',
    stack: ['Vue', 'Vuetify', 'Axios', 'Digital Ocean', 'REST API'],
    imageAlt: 'Adegoke Temitope, Snappy Exchange User Dashboard',
  },
  {
    name: 'Snappy Exchange',
    description: '',
    image: SnappyExchange,
    link: 'https://snappyexchange.com/',
    stack: ['Nuxt', 'TailwindCSS', 'Digital Ocean', 'REST API', 'Axios'],
    imageAlt: 'Snappy Exchange, Adegoke Temitope',
  },
  {
    name: 'Millionaire Exchange',
    description: '',
    image: MillionaireExchange,
    link: "https://millionairaexchange.org",
    stack: ['Vue', 'Tailwindcss'],
    imageAlt: 'Millionaire Exchange, Adegoke Temitope',
  },
  {
    name: 'Chuuse',
    description: '',
    image: ChuuseImage,
    link: 'https://chuuse.org',
    stack: ['Vue', 'Tailewind'],
    imageAlt: 'Chuuse, Adegoke Temitope',
  },
  {
    name: 'LearnPower',
    description: '',
    image: LearnPower,
    link: 'https://learnpower.ng',
    stack: ['React', 'Chakra UI', 'AWS', 'Tailewind', 'Redux', 'Github'],
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
    stack: ['Vue', 'Tailewind'],
    imageAlt: 'MyExtraSheet, Adegoke Temitope',
  },
]

export const personalProjects = [
  {
    name: 'Dotenv Intellisense',
    description:
      'A Visual Studio Code extension that provides auto-completions from contents found in your .env files within your Workspace.',
    stack: ['vscode', 'vscode-extension', 'typescript'],
    links: {
      github: 'https://github.com/Devdre1909/dotenv-intellisence',
      url: 'https://marketplace.visualstudio.com/items?itemName=temitope1909.dotenv-intellisense',
    },
  },
]
