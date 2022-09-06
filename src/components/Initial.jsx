import reactLogo from "../assets/react.svg";
import room from "../images/room.png";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { changeInfo } from "../features/Information/InformationSlice";

const Initial = ({setOpenInfo}) => {

  const information = useSelector(state => state.information)
  const dispatch = useDispatch()

  return (
    <motion.section
      className="w-full h-screen relative overflow-x-hidden"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring" }}
    >
      <div className="max-w-7xl px-10 md:px-0 m-auto h-full flex justify-between items-center">
        <div className="md:relative w-full">
          <h1 className="text-5xl my-6 sm:my-14 text-slate-100 md:text-[90px] font-bold leading-5 tracking-normal capitalize font-poppinsBold">
            {information.name}
          </h1>
          <p className="font-poppins text-slate-400">{information.phrase}</p>
          <button className="mt-10 border border-white rounded-md py-3 px-4 md:py-4 md:px-5 font-poppins text-sm font-bold text-white transition-all duration-300 ease-in-out active:border-red-700 active:text-red-700 hover:bg-transparent-stroke-color"
            onClick={setOpenInfo}>
            {information.buttonMe}
          </button>

          <img className='mt-10 sm:w-2/6 sm:absolute sm:right-[100px] sm:-bottom-[150px]' src={room} alt='sala-juegos-diseno-plano - Freepik' />
        </div>
      </div>
    </motion.section>
  );
};

export default Initial;
