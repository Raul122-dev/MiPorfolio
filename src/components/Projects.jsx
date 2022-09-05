import { motion } from "framer-motion";
import CardProject from "./CardProject";
import { createRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Projects = ({ setIndex }) => {

  const project = createRef()

  const information = useSelector(state => state.information)

  useEffect(() =>{
    project.current.addEventListener('scroll', () => {
      //console.log(project.current.clientHeight, project.current.scrollHeight, project.current.scrollTop)
      if(project.current.scrollTop === 0){
          setIndex(1) //to top
      }
      if (project.current.scrollTop === project.current.scrollHeight - project.current.clientHeight){
          setIndex(3) //to bottom
      }
    })
  }, [])

  return (
    <motion.section
      className="w-full h-screen relative overflow-x-hidden"
      ref={project}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring" }}
    >
      <div className="max-w-7xl m-auto z-[2] text-white flex justify-between items-center">
        <div className="w-full flex flex-col gap-4 relative mb-28 mx-6 md:mx-0">

          <div className="w-full flex mb-6 mt-8 md:px-[60px] md:mt-16">
            <svg className={`stroke-white group-hover:stroke-[#093A3E] sm:group-hover:-translate-x-1 transition-all duration-200 ease-in`} xmlns="http://www.w3.org/2000/svg" width="40" height="40" focusable="false" viewBox="0 0 12 12">
              <path fill="none" stroke-linejoin="round" d="M5.84.9L1.68 3.13c-.11.06-.18.18-.18.31v5.12c0 .13.07.24.18.3l4.15 2.24c.1.06.23.06.33 0l4.15-2.24a.35.35 0 00.18-.3V3.44c0-.13-.07-.24-.18-.3L6.16.9a.307.307 0 00-.32 0zM1.5 3.23L6 5.65l4.5-2.42M6 5.65v5.2"/>
            </svg>
            <h2 className="text-2xl md:text-4xl font-bold font-poppinsBold leading-5 tracking-normal capitalize grid place-content-center ml-1">
              {information.views.at(1)}
            </h2>
            <span className="w-full h-[1px] ml-3 bg-white right-0 block top-0 bottom-0 m-auto"/>
          </div>
          
          <div className="w-full flex gap-12 md:gap-8 flex-col md:px-[80px]">
            <CardProject index={1}/>
          
            <CardProject index={2}/>

            <CardProject index={3}/>

            <CardProject index={4}/>

            <CardProject index={5}/>
          </div>
          
          
          
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
