import {useSelector} from 'react-redux'

const Skills = () => {

    const information = useSelector(state => state.information)

    return (
        <div className="h-full flex flex-col md:p-2 md:overflow-y-scroll">
            <h1 className="text-red-700 font-poppinsBold text-3xl">Habilidades</h1>
            <p className="text-slate-400 font-poppins mt-2">{information.skills.description}</p>
            <h4 className="text-white font-poppinsBold text-xl mt-10">Hard Skills</h4>
            <div className="flex flex-wrap mt-5">
                {
                    information.skills.hardSkills.map((skill, index) => (
                        <div className="flex flex-col items-center px-2 group" key={index}>
                            <img src={skill.image} alt={skill.name} className="w-14 h-14" loading='lazy' />
                            <p className="text-white select-none font-poppins mb-2 transition-all duration-200 ease-linear invisible opacity-0 -translate-y-5 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">{skill.name}</p>
                        </div>
                    ))
                }
            </div>

            <h4 className="text-white font-poppinsBold text-xl mt-5">Soft Skills</h4>
            <div className="">
                <ul>
                    {
                        information.skills.softSkills.map((skill, index) => (
                            <>
                                <li className="text-second-color font-poppins mt-4 list-disc" key={index}>{skill.name}</li>
                                <p className="text-slate-400 font-poppins text-sm">{skill.description}</p>
                            </>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Skills