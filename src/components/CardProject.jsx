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
                    
                    <li>
                        <a href={project.repository} target="_blank">
                            <svg className="fill-white hover:fill-second-color hover:scale-110 transition-all duration-100 ease-in" xmlns="http://www.w3.org/2000/svg" width="20" height="20" focusable="false" viewBox="0 0 12 12">
                                <path d="M6 0a6 6 0 110 12A6 6 0 016 0zm0 .98C3.243.98 1 3.223 1 6a5.02 5.02 0 003.437 4.77.594.594 0 00.045.005c.203.01.279-.129.279-.25l-.007-.854c-1.39.303-1.684-.674-1.684-.674-.227-.58-.555-.734-.555-.734-.454-.312.034-.306.034-.306.365.026.604.288.708.43l.058.088c.446.767 1.17.546 1.455.418.046-.325.174-.546.317-.672-1.11-.127-2.277-.558-2.277-2.482 0-.548.195-.996.515-1.348l-.03-.085c-.064-.203-.152-.658.079-1.244l.04-.007c.124-.016.548-.013 1.335.522A4.77 4.77 0 016 3.408c.425.002.853.058 1.252.17.955-.65 1.374-.516 1.374-.516.272.692.1 1.202.05 1.33.32.35.513.799.513 1.347 0 1.93-1.169 2.354-2.283 2.478.18.155.34.462.34.93l-.006 1.378c0 .13.085.282.323.245A5.02 5.02 0 0011 6C11 3.223 8.757.98 6 .98z"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href={project.url} target="_blank">
                            <svg className="stroke-white hover:stroke-second-color hover:scale-110 transition-all duration-100 ease-in" xmlns="http://www.w3.org/2000/svg" width="20" height="20" focusable="false" viewBox="0 0 12 12">
                                <path fill="none" stroke-linecap="round" d="M7.5 4.5H10c.3 0 .5.2.5.5v6c0 .3-.2.5-.5.5H1c-.3 0-.5-.2-.5-.5V5c0-.3.2-.5.5-.5h2.5m2 3V1m-2 1.5L5.1.9c.2-.2.5-.2.7 0l1.6 1.6"/>
                            </svg>
                        </a>
                    </li>
                    
                </ul>
                
                
            </div>

        </div>
    )
}

export default CardProject