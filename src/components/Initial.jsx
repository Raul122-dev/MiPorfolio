import room from "../images/room.png";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import React, {useState, useEffect} from 'react'

//function to return index between 0 and number of technologies
const randomIndex = (number) => {
    return Math.floor(Math.random() * number)
}

const Initial = ({setOpenInfo}) => {

  const information = useSelector(state => state.information)
  const [afterIndex, setAfterIndex] = useState(0)
  const [technologyUrl, setTechnologyUrl] = useState(information.skills.hardSkills[afterIndex].image)

  //function to change to imgUrl catch pass 2 seconds
  const changeImg = () => {
    const newIndex = randomIndex(randomIndex(information.skills.hardSkills.length))
    if (newIndex === afterIndex){
      changeImg()
    } else {
      setTimeout(() => {
        setTechnologyUrl(information.skills.hardSkills[newIndex].image)
        setAfterIndex(newIndex)
      }, 3000);    
    }

  };

  useEffect(() => {
    changeImg();
    return () => {
      clearTimeout(changeImg);
    };
  }, [technologyUrl]);

  return (
    <motion.section
      className="w-full h-screen relative overflow-x-hidden"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      
    >
      <div className="max-w-7xl px-10 md:px-0 m-auto h-full flex justify-between items-center">
        <div className="md:relative w-full">
          <h1 className="text-5xl py-6 sm:py-14 text-slate-100 md:text-[90px] font-bold leading-5 tracking-normal capitalize font-poppinsBold relative">
            {information.name}
            <AnimatePresence>
              <motion.img 
                className="h-[100px] w-[100px] absolute -top-full" 
                src={technologyUrl} 
                alt='technologies' 
                loading="lazy"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring" }}
                key={technologyUrl}
                />
            </AnimatePresence>
          </h1>
          <p className="font-poppins text-slate-400">{information.phrase}</p>
          <button className="mt-10 border border-white rounded-md py-3 px-4 md:py-4 md:px-5 font-poppins text-sm font-bold text-white transition-all duration-300 ease-in-out active:border-red-700 active:text-red-700 hover:bg-transparent-stroke-color"
            onClick={setOpenInfo}>
            {information.buttonMe}
          </button>

          <motion.img 
            className='mt-10 sm:w-2/6 sm:absolute sm:right-[100px] sm:-bottom-[150px]' 
            src={room} 
            alt='sala-juegos-diseno-plano - Freepik'
            animate={{ y: [0,10,0] }}
            transition={{ duration: 2, repeat: Infinity }}
            />
          
        </div>
      </div>
    </motion.section>
  );
};

export default React.memo(Initial);
