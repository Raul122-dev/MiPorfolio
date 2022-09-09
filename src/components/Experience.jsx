import { useSelector } from "react-redux"

const Experience = () => {

    const information = useSelector(state => state.information)

    return (
        <div className="h-full flex flex-col overflow-y-scroll">
            <h1 className="text-red-700 font-poppinsBold text-3xl">Experiencia</h1>
            {
                information.experience.map((exp, index) => (
                    <div className="mt-5" key={index}>
                        <h3 className="text-second-color font-poppins mt-4 list-disc">{exp.title}</h3>
                        <div className="flex">
                            <p className="text-slate-500 text-sm font-poppins mt-2">{exp.company}</p>
                            -
                            <p className="text-slate-500 text-sm font-poppins mt-2">{exp.date}</p>
                        </div>
                        
                        <p className="text-slate-400 text-sm font-poppins leading-6 mt-4">{exp.description}</p>
                    </div>
                ))
            }

        </div>
    ) 
}

export default Experience