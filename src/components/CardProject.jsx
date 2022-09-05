import room from "../images/room.jpg";
import { useState } from "react";
import { motion } from "framer-motion";

// function to return random color from array
const randomColor = () => {
    const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
    return colors[Math.floor(Math.random() * colors.length)];
};

const ItemTec = ({children}) => {
    return (
        <li className={`md:bg-[#18191d] md:p-2 md:rounded-md md:text-[${randomColor()}]`}>{children}</li>
    )
}

const CardProject = ({index}) => {

    const [open, setOpen] = useState(false)

    const isOdd = index % 2 === 0 ? true : false

    return (
        <div className={`w-full flex flex-col ${isOdd ? 'md:flex-row-reverse' : 'md:flex-row' } rounded-md group`}>

            <img className={`rounded-t-md h-[200px] md:h-[250px] md:w-1/2 md:rounded-md md:self-center ${isOdd ? 'md:hover:translate-x-8' : 'md:hover:-translate-x-8' } duration-200 w-full object-cover`} src={room}/>

            <div className="bg-[#18191d] md:bg-transparent md:flex md:flex-col md:shadow-none w-full md:relative px-4 pb-4 font-poppins rounded-b-md shadow-lg shadow-[#0000008c] md:w-1/2">

                <div className={`px-4 py-5 text-center flex font-poppins ${isOdd ? 'md:justify-start': 'md:justify-end'}`}>
                    <ul className="flex gap-5 text-xs text-second-color ">
                        <ItemTec>React</ItemTec>
                        <ItemTec>Redux</ItemTec>
                        <ItemTec>Framer Motion</ItemTec>
                        <ItemTec>React Router</ItemTec>
                    </ul>
                </div>

                <div className={`flex flex-col sm:w-[120%] ${open ? 'sm:h-auto' : 'sm:h-2/3'} md:p-6 md:bg-[#18191d] md:shadow-lg md:rounded-md md:shadow-[#0000008c] ${isOdd ? '': 'md:-translate-x-[15%]'} md:right-0 md:top-0 md:bottom-0 md:m-auto`}>
                    <h4 className="font-bold text-[20px] mb-3">Titulo del proyecto</h4>
                    <motion.p className="font-medium text-[16px] leading-6 text-slate-300 overflow-hidden"
                        animate={open ? { height: 'auto' } : { height: 100 } }
                        initial={{ height: 100}}
                        exit={{ height: 100 }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptas illo quibusdam ipsam atque molestiae deleniti eligendi doloremque architecto aperiam rerum enim, odio soluta! Distinctio, ut? Eaque maiores molestias illum?
                    </motion.p>
                    <span className="text-red-600 text-sm tracking-wide font-thin self-end cursor-pointer"
                        onClick={() => setOpen(!open)}>
                        { open ? 'Ver menos' : 'Ver más'}
                    <span></span>
                    </span>

                </div>

                <ul className={`flex gap-4 mt-6 ${isOdd ? 'self-start' : 'self-end'} `}>
                    
                    <li><a>git</a></li>
                    <li><a>enlace</a></li>
                    
                </ul>
                
                
            </div>

        </div>
    )
}

export default CardProject