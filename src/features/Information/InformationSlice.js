import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: 'Raul Dev',
    email: 'victor.huaycho@tecsup.edu.pe',
    phone: '+51 962 990 383',
    phrase: 'Diseñando y Desarrollando experiencias',
    description: 'Soy un desarrollador web fullstack, me gusta aprender y compartir conocimiento',
    buttonMe : 'Sobre mí',
    views: ['Inicio', 'Proyectos', 'Contacto', 'Configuracion'],
    contactView: {
        title: 'Contactame',
        subtitle: 'Te gusto el recorrido?, Si quiere comunicarte commigo puede hacerlo enviandome un correo.',
        email: 'Email',
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
    projects: []
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