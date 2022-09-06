import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: 'Raul Dev',
    nameComplete: 'Raul Huaycho Quispe',
    email: 'victor.huaycho@tecsup.edu.pe',
    phone: '+51 962 990 383',
    phrase: 'Diseñando y Desarrollando experiencias',
    education: 'Diseño y Desarrollo de Software - Instituto Tecnológico TeCSUP <br> Actualemente soy autodidacta en el desarrollo de aplicaciones web, viendo que es una de las áreas que más me gusta y me motiva.',
    languagesSpeak: [
        {
            name: 'Español',
            level: 'Nativo'
        },
        {
            name: 'Inglés',
            level: 'Intermedio'
        }
    ],
    state: 'Estoy disponible para trabajar en proyectos remotos o en la ciudad de Lima, Perú.',
    contactUrls: [
        'https://www.linkedin.com/in/victorhuaycho/',
        'https://github.com/Raul122-dev',
        'mailto:victor.huaycho@tecsup.edu.pe'
    ],
    description: 'Soy un desarrollador web fullstack, me gusta aprender y compartir conocimiento',
    profile: 'Soy un desarrollador web fullstack, me gusta aprender y compartir conocimiento',
    experience: [
        {
            title: 'Desarrollador Web - Movil',
            company: 'Innars',
            date: '2021 - Presente',
            description: 'Desarrollo de aplicaciones web y movile para la empresa Innars, utilizando tecnologías como React, Redux, NodeJS, Express, MongoDB, entre otras.'
        },
    ],
    skills: {
        description: 'Estas son algunas de las tecnologías que he utilizado en mis proyectos',
        hardSkills: [
            {
                name: 'HTML',
                image: 'https://github.com/devicons/devicon/raw/master/icons/html5/html5-plain.svg',
            },
            {
                name: 'CSS',
                image: 'https://github.com/devicons/devicon/raw/master/icons/css3/css3-plain.svg',
            },
            {
                name: 'TailwindCSS',
                image: 'https://github.com/devicons/devicon/raw/master/icons/tailwindcss/tailwindcss-plain.svg',
            },
            {
                name: 'JavaScript',
                image: 'https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-plain.svg',
            },
            {
                name: 'React',
                image: 'https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg'
            },
            {
                name: 'Redux',
                image: 'https://github.com/devicons/devicon/raw/master/icons/redux/redux-original.svg',
            },
            {
                name: 'NodeJS',
                image: 'https://github.com/devicons/devicon/raw/master/icons/nodejs/nodejs-plain.svg'
            },
            {
                name: 'Express',
                image: 'https://github.com/devicons/devicon/raw/master/icons/express/express-original.svg'
            },
            {
                name:'NextJS',
                image: 'https://github.com/devicons/devicon/raw/master/icons/nextjs/nextjs-original.svg'
            },
            {
                name: 'React Native',
                image: 'https://o.dlf.pt/dfpng/smallpng/524-5245166_react-logo-react-native-svg-logo-hd-png.png'
            },
            {
                name: 'Kotlin',
                image: 'https://github.com/devicons/devicon/raw/master/icons/kotlin/kotlin-original.svg'
            },
            {
                name: 'Java',
                image: 'https://github.com/devicons/devicon/raw/master/icons/java/java-plain.svg'
            },
            {
                name:'Android',
                image: 'https://github.com/devicons/devicon/raw/master/icons/androidstudio/androidstudio-original.svg'
            }
        ],
        softSkills: [
            {
                name: 'Trabajo en equipo',
                description: 'Me gusta trabajar en equipo, ya que me permite aprender de mis compañeros y compartir mis conocimientos con ellos.'
            },
            {
                name: 'Comunicación',
                description: 'Me gusta comunicarme con las personas, ya que me permite conocer sus necesidades y así poder ayudarles.'
            },
            {
                name: 'Trabajo bajo presión',
                description: 'Me gusta trabajar bajo presión, ya que me motiva a dar lo mejor de mí.'
            },
            {
                name: 'Resolución de problemas',
                description: 'Me gusta resolver problemas, ya que me permite aprender y mejorar mis habilidades.'
            },
            {
                name: 'Creatividad',
                description: 'Me gusta ser creativo, ya que me permite crear cosas nuevas y útiles.'
            },
            {
                name: 'Responsabilidad',
                description: 'Me gusta ser responsable, ya que me permite cumplir con mis tareas y así poder ayudar a las personas.'
            },
            {
                name: 'Puntualidad',
                description: 'Me gusta ser puntual, ya que me permite cumplir con mis tareas y así poder ayudar a las personas.'
            }
        ]
    },
    hobbies: {
        description: 'Estos son algunos de mis hobbies',
        hobbiesList:[
            {
                name: 'Videojuegos',
                description: 'Me gusta jugar videojuegos, ya que me permite relajarme y divertirme.',
                image: 'https://img.freepik.com/vector-gratis/controles-videojuegos-estilo-neon-pared-ladrillo_24908-58916.jpg?w=2000'
            },
            {
                name: 'Música',
                description: 'Me gusta escuchar música, ya que me permite relajarme y divertirme.',
                image: 'https://sentidoradio.com/wp-content/uploads/2020/07/historia-de-la-musica-electronica.jpg'
            },
            {
                name: 'Deportes',
                description: 'Me gusta practicar deportes, ya que me permite relajarme y divertirme.',
                image: 'https://occidente.co/wp-content/uploads/2018/06/trotar-deporte-hombre-trotando-corriendo.jpg'
            },
            {
                name: 'Leer',
                description: 'Me gusta leer, ya que me permite relajarme y divertirme.',
                image: 'https://aptus.com.ar/wp-content/uploads/2020/02/Edu-7.jpg'
            },
            {
                name: 'Ver series',
                description: 'Me gusta ver series, ya que me permite relajarme y divertirme.',
                image: 'https://cdn.vox-cdn.com/thumbor/6tk53aPhe6H8iodxUG-2tWdkjws=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18327841/acastro_190719_3527_plex_piracy_0002.jpg'
            },
            {
                name: 'Modelado 3D',
                description: 'Me gusta modelar en 3D, ya que me permite relajarme y divertirme.',
                image: 'https://i.pinimg.com/originals/48/c6/d6/48c6d69164db2f0620e8754e4aa51acb.jpg'
            },
        ]
    },
    buttonMe : 'Sobre mí',
    views: ['Inicio', 'Proyectos', 'Contacto', 'Configuracion'],
    contactView: {
        title: 'Contactame',
        subtitle: 'Te gusto el recorrido?, Si quiere comunicarte commigo puede hacerlo enviandome un correo.',
        email: 'mailto:victor.huaycho@tecsup.edu.pe',
        button: 'Enviar un Correo',
        span: '¿Ahora qué?'
    },
    projects: [
        {
            title: 'Comer al toque',
            description: 'Comer al toque es una aplicacion web que permite a los usuarios encontrar restaurantes cercanos a su ubicacion, ademas de poder ver la carta de los restaurantes y realizar pedidos.',
            image: 'https://media.discordapp.net/attachments/806157754896875580/979925907705823252/unknown.png?width=917&height=516',
            url: 'https://staging.comeraltoque.com/',
            technologies: ['React', 'Redux', 'Socket.io', 'Google API', 'Django', 'Rest Framework',],
            repository: ''
        },
        {
            title: 'La paisajista',
            description: 'La paisajista es una aplicacion web que permite a los usuarios ver los platos disponibles en el menu del restaurante, ademas de poder elegir el plato',
            image: 'https://media.discordapp.net/attachments/756756648407597070/1016546237480173568/unknown.png?width=917&height=453',
            url: 'https://paisajistapicanteria.com/',
            technologies: ['React', 'Nextjs', 'Tailwind', 'Google API', 'Express', 'Prisma', 'Node'],
            repository: ''
        },
        {
            title: 'Comer al toque App Movil',
            description: 'Comer al toque es una aplicacion movil que permite a los usuarios encontrar restaurantes cercanos a su ubicacion, ademas de poder ver la carta de los restaurantes y realizar pedidos.',
            image: 'https://cdn.discordapp.com/attachments/756756648407597070/1016547732023934996/unknown.png',
            url: 'https://staging.comeraltoque.com/',
            technologies: ['Kotlin', 'Live Data', 'Google API', 'Materia UI' ],
            repository: ''
        },
        {
            title: 'Mi portafolio',
            description: 'Mi portafolio es una aplicacion web que permite a los usuarios ver mis proyectos y contactarme.',
            image: 'https://media.discordapp.net/attachments/756756648407597070/1016548359110135868/unknown.png?width=917&height=454',
            url: 'https://raul-dev.netlify.app/',
            technologies: ['React', 'Redux', 'Tailwind', 'Framer'],
            repository: ''
        }
    ]
}

const stateEnglish = {
    name: 'Raul Dev',
    email: 'victor.huaycho@tecsup.edu.pe',
    phone: '+51 962 990 383',
    phrase: 'Designing and developing experiences',
    description: 'I am a Full Stack web developer, I like to learn and share knowledge',
    buttonMe : 'About Me',
    views: ['Home', 'Projects', 'Contact', 'Settings'],
    contactView: {
        title: 'Contact Me',
        subtitle: 'If you want to contact me, you can do it through the following means',
        email: 'Email',
        button: 'Send mail',
        span: 'Now what?'
    },
    projects: [],
    hobbies: [
        {
            name: 'Video Games',
            description: 'I like to play video games, because it allows me to relax and have fun.',
            image: 'https://www.rockpapershotgun.com/images/2020/10/2020-10-27-15-10-10-1024x576.jpg'
        },
        {
            name: 'Music',
            description: 'I like to listen to music, because it allows me to relax and have fun.',
            image: 'https://www.rockpapershotgun.com/images/2020/10/2020-10-27-15-10-10-1024x576.jpg'
        },
        {
            name: 'Sports',
            description: 'I like to do sports, because it allows me to relax and have fun.',
            image: 'https://occidente.co/wp-content/uploads/2018/06/trotar-deporte-hombre-trotando-corriendo.jpg'
        },
        {
            name: 'Read',
            description: 'I like to read, because it allows me to relax and have fun.',
            image: 'https://aptus.com.ar/wp-content/uploads/2020/02/Edu-7.jpg'
        },
        {
            name: 'Watch series',
            description: 'I like to watch series, because it allows me to relax and have fun.',
            image: 'https://cdn.vox-cdn.com/thumbor/6tk53aPhe6H8iodxUG-2tWdkjws=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18327841/acastro_190719_3527_plex_piracy_0002.jpg'
        },
        {
            name: '3D Modeling',
            description: 'I like to model in 3D, because it allows me to relax and have fun.',
            image: 'https://i.pinimg.com/originals/48/c6/d6/48c6d69164db2f0620e8754e4aa51acb.jpg'
        },
    ],
            
}

export const informationSlice = createSlice({
    name: 'information',
    initialState,
    reducers: {
        changeInfo: (state, action) => {
            console.log(state, action)
            if (action.payload === 'en') {
                state.name = stateEnglish.name
                state.email = stateEnglish.email
                state.phone = stateEnglish.phone
                state.phrase = stateEnglish.phrase
                state.description = stateEnglish.description
                state.buttonMe = stateEnglish.buttonMe
                state.views = stateEnglish.views
                state.contactView = stateEnglish.contactView
                
                //state = stateEnglish
            } else if (action.payload === 'es') {
                state.name = initialState.name
                state.email = initialState.email
                state.phone = initialState.phone
                state.phrase = initialState.phrase
                state.description = initialState.description
                state.buttonMe = initialState.buttonMe
                state.views = initialState.views
                state.contactView = initialState.contactView
                
            }
        }
    }
})

export const { changeInfo } = informationSlice.actions

export default informationSlice.reducer