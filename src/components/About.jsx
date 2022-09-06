import { useSelector } from "react-redux"

const About = () => {

    const information = useSelector(state => state.information)

    return (
        <div>
            <h1 className="text-red-700 font-poppinsBold text-3xl">Sobre mí</h1>
            <p className="text-slate-400 font-poppins mt-2">{information.description}</p>
            <h1 className="text-red-700 font-poppinsBold text-3xl mt-10">Perfil</h1>
            <p className="text-slate-400 font-poppins mt-2">{information.profile}</p>
        </div>
    )
}

export default About