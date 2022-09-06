import room from "../images/room.jpg";
import { useState } from "react";
import { motion } from "framer-motion";

// function to return random color from array
const randomColor = () => {
    const colors = ["text-red-700", "text-green-700", "text-blue-700", "text-alpha-700", "text-yellow-700", "text-pink-700", "text-gray-700"];
    return colors[Math.floor(Math.random() * colors.length)];
};

const ItemTec = ({children}) => {
    return (
        <li className={`md:bg-[#18191d] flex justify-center items-center md:p-2 md:rounded-md ${randomColor()} `}>{children}</li>
    )
}

const CardProject = ({index, project}) => {

    const [open, setOpen] = useState(false)

    const isOdd = index % 2 === 0 ? true : false

    return (
        <div className={`w-full flex flex-col ${isOdd ? 'md:flex-row-reverse' : 'md:flex-row' } rounded-md group`}>

            <img className={`rounded-t-md h-[200px] md:h-[250px] md:w-1/2 md:rounded-md md:self-center ${isOdd ? 'md:hover:translate-x-8' : 'md:hover:-translate-x-8' } duration-200 w-full object-cover`} src={project.image}/>

            <div className="bg-[#18191d] md:bg-transparent md:flex md:flex-col md:shadow-none w-full md:relative px-4 pb-4 font-poppins rounded-b-md shadow-lg shadow-[#0000008c] md:w-1/2">

                <div className={`px-4 py-5 text-center flex font-poppins ${isOdd ? 'md:justify-start': 'md:justify-end'}`}>
                    <ul className="flex flex-wrap md:flex-nowrap gap-5 text-xs ">
                        {
                            project.technologies.map((tec, index) => (
                                <ItemTec key={index}>{tec}</ItemTec>
                            ))
                        }
                    </ul>
                </div>

                <div className={`flex flex-col sm:w-[120%] ${open ? 'sm:h-auto' : 'sm:h-2/3'} md:p-6 md:bg-[#18191d] md:shadow-lg md:rounded-md md:shadow-[#0000008c] ${isOdd ? '': 'md:-translate-x-[15%]'} md:right-0 md:top-0 md:bottom-0 md:m-auto`}>
                    <h4 className="font-bold text-[20px] mb-3">{project.title}</h4>
                    <motion.p className="font-medium text-[16px] md:h-auto leading-6 text-slate-300 overflow-hidden"
                        animate={open ? { height: 'auto' } : { height: 100 } }
                        initial={{ height: 100}}
                        exit={{ height: 100 }}>
                        {project.description}
                    </motion.p>
                    <span className="text-red-600 text-sm tracking-wide block md:hidden font-thin self-end cursor-pointer"
                        onClick={() => setOpen(!open)}>
                        { open ? 'Ver menos' : 'Ver más'}
                    </span>

                </div>

                <ul className={`flex gap-4 mt-6 ${isOdd ? 'self-start' : 'self-end'} `}>
                    
                    <li><a href={project.url} target="_blank">git</a></li>
                    <li><a href={project.repository} target="_blank">enlace</a></li>
                    
                </ul>
                
                
            </div>

        </div>
    )
}

export default CardProject