import { createSlice } from '@reduxjs/toolkit'

const stateSpanish = {
    name: 'Raul Dev',
    nameComplete: 'Raul Huaycho Quispe',
    email: 'victor.huaycho@tecsup.edu.pe',
    phone: '+51 962 990 383',
    phrase: 'Diseñando y Desarrollando experiencias',
    education: 'Diseño y Desarrollo de Software - Instituto Superior Tecnológico TECSUP. Actualmente soy autodidacta en el aprendizaje del desarrollo de aplicaciones web, viendo que es una de las áreas que más me gusta y me motiva.',
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
    state: 'Estoy disponible para trabajar en proyectos remotos o en la ciudad de Arequipa, Perú.',
    contactUrls: [
        'https://www.linkedin.com/in/victorhuaycho/',
        'https://github.com/Raul122-dev',
        'mailto:victor.huaycho@tecsup.edu.pe'
    ],
    description: 'Soy un chico de 19 años, apasionado por la tecnologia y con mucho interes en el mundo del desarrollo web, siendo esta mi principal motivacion para aprender cada dia mas sobre las tecnologias y metologias que se usan en la web, y a su vez poder ser parte de esta.',
    profile: 'Soy un desarrollador web centrado en el desarrollo Frontend, pero con algunos conocimientos en el desarrollo BackEnd, teniendo como objetivo futuro llegar a ser un desarrollador FullStack y poder trabajar en proyectos de gran envergadura.',
    experience: [
        {
            title: 'Comer al toque - Desarrollador Web - FrontEnd',
            company: 'Innars',
            date: '2021 - Presente',
            description: 'Desarrollo de un aplicativo web "Comer al toque", orientado a brindar informacion sobre los restaurantes cercanos a los usuarios, asi como tambien la posibilidad de realizar pedidos de comida a domicilio.'
        },
        {
            title: 'Comer a toque - Desarrollador Mobile',
            company: 'Innars',
            date: '2021 - Presente',
            description: 'Desarrollo de un aplicativo movil "Comer al toque", orientado a brindar informacion sobre los restaurantes cercanos a los usuarios, añadiendo la funcinalida de mostrar una recomendacion en tiempo real de restaurantes cercanos a los usuarios, asi como poder gestinar el acceso de la recomendacion de los restaurantes favoritos de los usuarios.'
        },
        {
            title: 'lA Paisajista Picanteria - Desarrollador FullStack',
            company: 'Innars',
            date: '2022 - 2022',
            description: 'Desarrollo de una Landing Page para un restaurante local muy conocido "La Paisajista Picanteria", con el objetivo de mostrar los servicios que ofrece el restauarante, asi como tambien la posibilidad de ver toda la carta del restaurante.'
        },
        {
            title: 'Walsh Perú - Desarrollador FullStack',
            company: 'Walsh',
            date: '2022 - 2022',
            description: 'Desarrollo de un Sistema de Adquisición de Datos de Campo en Tiempo Real, teniend este la posibilida de gestionar los datos que se ingresen en el sistema, brindo al cliente las funcionalidades de insercion, edicion y eliminacion de los datos.'
        },
    ],
    skills: {
        description: 'Estas son algunas de las tecnologías que he utilizado en mis proyectos.',
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
        description: 'Pienso que es importante brindar un poco de nuestro tiempo a lo que nos gusta hacer fuera del ambito profesional. Estos son algunos de mis hobbies:',
        hobbiesList:[
            {
                name: 'Videojuegos',
                description: 'Me gusta jugar videojuegos, es una forma de distraerme y charlar con mis amigos sobre distion temas que nos interesan.',
                image: 'https://img.freepik.com/vector-gratis/controles-videojuegos-estilo-neon-pared-ladrillo_24908-58916.jpg?w=2000'
            },
            {
                name: 'Música',
                description: 'Me gusta escuchar música, es algo disfruto y me encanta mucho porque puedo motivarme con la musica que me gusta.',
                image: 'https://sentidoradio.com/wp-content/uploads/2020/07/historia-de-la-musica-electronica.jpg'
            },
            {
                name: 'Deportes',
                description: 'Me gusta practicar algunos deportes como trotar o nadar, y disfruto mucho de estos ya que me ayudan a mantenerme en forma, pero no es algo a lo que le dedique mucho tiempo.',
                image: 'https://occidente.co/wp-content/uploads/2018/06/trotar-deporte-hombre-trotando-corriendo.jpg'
            },
            {
                name: 'Leer',
                description: 'Me gusta leer en mis tiempos libres, ya que me permite aprender cosas nuevas y me ayuda a mejorar mi habilidad de enterder ciertos temas',
                image: 'https://aptus.com.ar/wp-content/uploads/2020/02/Edu-7.jpg'
            },
            {
                name: 'Ver series',
                description: 'Me gusta ver series o peliculas es una forma mas de distraerme y relajarme, ya que me permite desconectarme de la rutina diaria.',
                image: 'https://cdn.vox-cdn.com/thumbor/6tk53aPhe6H8iodxUG-2tWdkjws=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18327841/acastro_190719_3527_plex_piracy_0002.jpg'
            },
            {
                name: 'Modelado 3D',
                description: 'Me gusta aprender e informarmer sobre el modeldo 3D, ya que es un campo que siempre me ha interesado y es algo que en un futuro quiero desarrollar a profundidad.',
                image: 'https://i.pinimg.com/originals/48/c6/d6/48c6d69164db2f0620e8754e4aa51acb.jpg'
            },
        ]
    },
    buttonMe : 'Sobre mí',
    views: ['Inicio', 'Proyectos', 'Contacto', 'Idioma(EN/ES)'],
    contactView: {
        title: 'Contactame',
        subtitle: 'Si quieres contactarte commigo puedes hacerlo enviandome un correo.',
        email: 'mailto:victor.huaycho@tecsup.edu.pe',
        button: 'Enviar un Correo',
        span: '¿Ahora qué?'
    },
    projects: [
        {
            title: 'Comer al toque',
            description: 'Comer al toque es una aplicacion web que permite a los usuarios encontrar restaurantes cercanos a su ubicacion, ademas de poder ver la carta de los restaurantes y realizar pedidos.',
            image: 'https://media.discordapp.net/attachments/806157754896875580/979925907705823252/unknown.png?width=917&height=516',
            url: 'https://comeraltoque.com/',
            technologies: ['React', 'Redux', 'Socket.io', 'Google API', 'Django', 'Rest Framework',],
            repository: 'https://github.com/INNARSSAC/Comeraltoque-react'
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
            url: 'https://comeraltoque.com/',
            technologies: ['Kotlin', 'Live Data', 'Google API', 'Materia UI' ],
            repository: ''
        },
        {
            title: 'Mi portafolio',
            description: 'Mi portafolio es una web estatica que permite ver mis proyectos y contactarme.',
            image: 'https://media.discordapp.net/attachments/756756648407597070/1016548359110135868/unknown.png?width=917&height=454',
            url: 'https://raul-dev.netlify.app/',
            technologies: ['React', 'Redux', 'Tailwind', 'Framer'],
            repository: 'https://github.com/Raul122-dev/MiPorfolio'
        },
        {
            title: 'Ininity Pokemon',
            description: 'Infinity Pokemon es una aplicacion web que permite ver los pokemones disponibles en la pokedex implementando un scroll infinito, ademas de poder ver la informacion de cada pokemon.',
            image: 'https://cdn.discordapp.com/attachments/756756648407597070/1022903215412490360/unknown.png',
            url: 'https://poke-dex-infinity-v8kx.vercel.app/',
            technologies: ['React', 'ContextApi' , 'NextJS' , 'Tailwind', 'PokeApi'],
            repository: 'https://github.com/Raul122-dev/PokeDexInfinity'
        },
        {
            title: 'Task App',
            description: 'Task App es una aplicacion web que permite crear tareas, ademas de poder editarlas y eliminarlas.',
            image: 'https://cdn.discordapp.com/attachments/756756648407597070/1022905189247746118/unknown.png',
            url: 'https://tasks-redux.vercel.app/',
            technologies: ['React', 'Redux', 'Tailwind'],
            repository: 'https://github.com/Raul122-dev/Tasks-Redux'
        }
    ]
}

const stateEnglish = {
    name: 'Raul Dev',
    nameComplete: 'Raul Huaycho Quispe',
    email: 'victor.huaycho@tecsup.edu.pe',
    phone: '+51 962 990 383',
    phrase: 'Designing and developing experiences',
    education: 'Diseño y Desarrollo de Software - Instituto Superior Tecnológico TECSUP. Actualmente soy autodidacta en el aprendizaje del desarrollo de aplicaciones web, viendo que es una de las áreas que más me gusta y me motiva.',
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
    state: 'Estoy disponible para trabajar en proyectos remotos o en la ciudad de Arequipa, Perú.',
    contactUrls: [
        'https://www.linkedin.com/in/victorhuaycho/',
        'https://github.com/Raul122-dev',
        'mailto:victor.huaycho@tecsup.edu.pe'
    ],
    description: 'Soy un chico de 19 años, apasionado por la tecnologia y con mucho interes en el mundo del desarrollo web, siendo esta mi principal motivacion para aprender cada dia mas sobre las tecnologias y metologias que se usan en la web, y a su vez poder ser parte de esta.',
    profile: 'Soy un desarrollador web centrado en el desarrollo Frontend, pero con algunos conocimientos en el desarrollo BackEnd, teniendo como objetivo futuro llegar a ser un desarrollador FullStack y poder trabajar en proyectos de gran envergadura.',
    experience: [
        {
            title: 'Comer al toque - Desarrollador Web - FrontEnd',
            company: 'Innars',
            date: '2021 - Presente',
            description: 'Desarrollo de un aplicativo web "Comer al toque", orientado a brindar informacion sobre los restaurantes cercanos a los usuarios, asi como tambien la posibilidad de realizar pedidos de comida a domicilio.'
        },
        {
            title: 'Comer a toque - Desarrollador Mobile',
            company: 'Innars',
            date: '2021 - Presente',
            description: 'Desarrollo de un aplicativo movil "Comer al toque", orientado a brindar informacion sobre los restaurantes cercanos a los usuarios, añadiendo la funcinalida de mostrar una recomendacion en tiempo real de restaurantes cercanos a los usuarios, asi como poder gestinar el acceso de la recomendacion de los restaurantes favoritos de los usuarios.'
        },
        {
            title: 'lA Paisajista Picanteria - Desarrollador FullStack',
            company: 'Innars',
            date: '2022 - 2022',
            description: 'Desarrollo de una Landing Page para un restaurante local muy conocido "La Paisajista Picanteria", con el objetivo de mostrar los servicios que ofrece el restauarante, asi como tambien la posibilidad de ver toda la carta del restaurante.'
        },
        {
            title: 'Walsh Perú - Desarrollador FullStack',
            company: 'Walsh',
            date: '2022 - 2022',
            description: 'Desarrollo de un Sistema de Adquisición de Datos de Campo en Tiempo Real, teniend este la posibilida de gestionar los datos que se ingresen en el sistema, brindo al cliente las funcionalidades de insercion, edicion y eliminacion de los datos.'
        },
    ],
    skills: {
        description: 'Estas son algunas de las tecnologías que he utilizado en mis proyectos.',
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
        description: 'Pienso que es importante brindar un poco de nuestro tiempo a lo que nos gusta hacer fuera del ambito profesional. Estos son algunos de mis hobbies:',
        hobbiesList:[
            {
                name: 'Videojuegos',
                description: 'Me gusta jugar videojuegos, es una forma de distraerme y charlar con mis amigos sobre distion temas que nos interesan.',
                image: 'https://img.freepik.com/vector-gratis/controles-videojuegos-estilo-neon-pared-ladrillo_24908-58916.jpg?w=2000'
            },
            {
                name: 'Música',
                description: 'Me gusta escuchar música, es algo disfruto y me encanta mucho porque puedo motivarme con la musica que me gusta.',
                image: 'https://sentidoradio.com/wp-content/uploads/2020/07/historia-de-la-musica-electronica.jpg'
            },
            {
                name: 'Deportes',
                description: 'Me gusta practicar algunos deportes como trotar o nadar, y disfruto mucho de estos ya que me ayudan a mantenerme en forma, pero no es algo a lo que le dedique mucho tiempo.',
                image: 'https://occidente.co/wp-content/uploads/2018/06/trotar-deporte-hombre-trotando-corriendo.jpg'
            },
            {
                name: 'Leer',
                description: 'Me gusta leer en mis tiempos libres, ya que me permite aprender cosas nuevas y me ayuda a mejorar mi habilidad de enterder ciertos temas',
                image: 'https://aptus.com.ar/wp-content/uploads/2020/02/Edu-7.jpg'
            },
            {
                name: 'Ver series',
                description: 'Me gusta ver series o peliculas es una forma mas de distraerme y relajarme, ya que me permite desconectarme de la rutina diaria.',
                image: 'https://cdn.vox-cdn.com/thumbor/6tk53aPhe6H8iodxUG-2tWdkjws=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18327841/acastro_190719_3527_plex_piracy_0002.jpg'
            },
            {
                name: 'Modelado 3D',
                description: 'Me gusta aprender e informarmer sobre el modeldo 3D, ya que es un campo que siempre me ha interesado y es algo que en un futuro quiero desarrollar a profundidad.',
                image: 'https://i.pinimg.com/originals/48/c6/d6/48c6d69164db2f0620e8754e4aa51acb.jpg'
            },
        ]
    },
    buttonMe : 'Sobre mí',
    views: ['Inicio', 'Proyectos', 'Contacto', 'Idioma(EN/ES)'],
    contactView: {
        title: 'Contactame',
        subtitle: 'Si quieres contactarte commigo puedes hacerlo enviandome un correo.',
        email: 'mailto:victor.huaycho@tecsup.edu.pe',
        button: 'Enviar un Correo',
        span: '¿Ahora qué?'
    },
    projects: [
        {
            title: 'Comer al toque',
            description: 'Comer al toque es una aplicacion web que permite a los usuarios encontrar restaurantes cercanos a su ubicacion, ademas de poder ver la carta de los restaurantes y realizar pedidos.',
            image: 'https://media.discordapp.net/attachments/806157754896875580/979925907705823252/unknown.png?width=917&height=516',
            url: 'https://comeraltoque.com/',
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
            url: 'https://comeraltoque.com/',
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

export const informationSlice = createSlice({
    name: 'information',
    initialState: localStorage.getItem('language') === 'en' ? stateEnglish : stateSpanish,
    //initialState,
    reducers: {
        changeInfo: (state, action) => {
            //console.log(state, action)

            if(action.payload === 'es'){
                localStorage.setItem('language', 'es')
                return stateSpanish
            }else{
                localStorage.setItem('language', 'en')
                return stateEnglish
            }

        }
    }
})

export const { changeInfo } = informationSlice.actions

export default informationSlice.reducer