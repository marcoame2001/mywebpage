import GearPic from '../assets/images/gear.png';
import AndroidPic from '../assets/images/android2.png';
import MapPic from '../assets/images/map.png'

export const jobInfo = {
  title: "Software Engineer",
  company: "Weill Cornell Medicine"
}

export const skillsList = [
  'Javascript/Typescript, HTML & CSS  ',
  'Python',
  'SQL',
  'Android Studio, Java',
  'NodeJs, React, Django',
  'C, C++',
  'Git',
  'Machine Learning',
]

export const projects = [
  {
    title: 'AI assisting road usage e-scooters',
    description: 'Efficient use of sensors to register vibration data on scooter rides to create AI models to prevent accidents. Some of the models created include KNN, ANN and Random Forest, reaching up to 90% of correct predictions',
    image:
      'https://www.nrel.gov/computational-science/assets/images/ai-istock-1273484747-tn.jpg',
    link: '',
  },
  {
    title: 'Responsive Tourism Web Application',
    description:
      'Built a responsive search application over destinations in Venezuela using Django, Javascript, Node, HTML and CSS. Several functionalities such as searching for experiences, exporting data in diverse formats were included',
    image: MapPic,
    link: '',
  },
  {
    title: 'Android Studio - Mobile App',
    description:
      'This is a game app that allows multiple users playing a match at the same time using firebase, Java for Android Studio and LibGDX',
    image:
      AndroidPic,
    link: '',
  },
  {
    title: 'Parameterized Gear Generator',
    description:
      'CAD generated gears using Siemens NX motions with Python, web ontologies and Jena Fuseki',
    image:
      GearPic,
    link: '',
  }
]



export const galeria = [
  {
    title: 'Charles III University of Madrid',
    description: 'Computer Engineering, Minor in Computer Science, 2019-2023',
    image:
      'https://s1.eestatic.com/2023/05/03/sociedad/educacion/mejores-universidades/mejores-universidades-2023/760934112_232857863_1706x960.jpg',
    link: 'https://www.uc3m.es/Home',
  },
  {
    title: 'Norwegian University of Science and Technology',
    description:
      'Erasmus Scholarship, 2022-2023',
    image: 'https://d1bvpoagx8hqbg.cloudfront.net/originals/ntnu-manana-920aa3874376dbf6d5919c9aa0bd5bc2.jpg',
    link: 'https://www.ntnu.edu/',
  },
]


export const LanguagesList2 = [
  'Spanish: Native',
  'English: Professional',
  'Italian: Professional',

]

export const contact = [
  'marcomerola2001@gmail.com',
  '+584125740730',

]