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
    projects: []
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