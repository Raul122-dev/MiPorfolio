import { useEffect, useState, useCallback } from "react";
import ButtonUp from "./components/ButtomUp";
import Indicators from "./components/Indicators";
import Initial from "./components/Initial";
import Projects from "./components/Projects";
import { AnimatePresence } from "framer-motion";
import { useSelector } from 'react-redux'
import ErrorBoundary from "./components/ErrorBoundary";
import Contact from "./components/Contact";
import {motion} from 'framer-motion'
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";

import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import { configParticles } from './libs/particlesConfig'

function App() {
  const [index, setIndex] = useState(1);

  const [openInfo, setOpenInfo] = useState(false)
  const [pageInfo, setPageInfo] = useState(1)

  const information = useSelector(state => state.information)

  const verifyEvent = (e) => {
    if (e.deltaY > 0) {
      if (index === 2) {
        window.removeEventListener("wheel", verifyEvent);
      } else {
        setIndex((prev) => {
          if (prev === 3) return 3;
          return prev + 1;
        });
      }
    } else {
      if (index === 2) {
        window.removeEventListener("wheel", verifyEvent);
      } else {
        setIndex((next) => {
          if (next === 1) return 1;
          return next - 1;
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", verifyEvent);
    //add to url #index
    window.location.hash = information.views[index - 1];
    return () => {
      window.removeEventListener("wheel", verifyEvent);
    };
  }, [index]);

  // listener key events up and down events
  const keyListener = (e) => {
    if (e.key === "ArrowDown") {
      setIndex((prev) => {
        if (prev === 3) return 3;
        return prev + 1;
      });
    } else if (e.key === "ArrowUp") {
      setIndex((next) => {
        if (next === 1) return 1;
        return next - 1;
      });
    } else if (e.key === "Escape") {
      setIndex(1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyListener);
    return () => {
      window.removeEventListener("keydown", keyListener);
    };
  }, []);

  const openInfoHandler = () =>  setOpenInfo(true)
  const closeInfoHandler = () => setOpenInfo(false)
  
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className='w-full h-auto sm:pl-40 font-serif overflow-hidden bg-[#001011] bg-cover '  >

      <Particles 
        id="tsparticles"
        init={particlesInit}
        options={configParticles}
        loaded={particlesLoaded}
      />

      {
        !openInfo && (
          <>
            <AnimatePresence mode="wait" key={index}>
              {index === 1 && <Initial key="initial" setIndex={setIndex} setOpenInfo={openInfoHandler} />}
              {index === 2 && <ErrorBoundary><Projects key="second" setIndex={setIndex} /></ErrorBoundary> }
              {index === 3 && <Contact />}
            </AnimatePresence>
            <Indicators index={index} setIndex={setIndex} />
          </>
        )
      }

      { openInfo && (
        <div className='fixed flex z-10 bg-[#001011] w-full h-screen top-0 left-0 overflow-y-scroll overflow-x-hidden md:overflow-hidden'>
          <div className='w-full h-full flex items-center justify-center'>

            <div className='h-full md:h-[70%] w-full md:-mt-10'>

              <motion.div className="w-full md:max-w-7xl m-auto grid"
                initial={{ y:100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y:100, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 20
                }}>
                <ul className="bg-[#18191d] rounded-t-md border-b border-dashed border-second-color w-full md:w-3/5 grid grid-cols-4 justify-self-end text-center  gap-2 md:gap-10 font-poppins ">
                  <li className={`justify-self-center p-4 text-slate-400 hover:text-red-700 transition-all duration-300 cursor-pointer ${pageInfo === 1 ? 'text-red-700': ''}`}
                    onClick={() => setPageInfo(1)}>
                    About me
                  </li>
                  <li className={`justify-self-center p-4 text-slate-400 hover:text-red-700 transition-all duration-300 cursor-pointer ${pageInfo === 2 ? 'text-red-700': ''}`}
                    onClick={() => setPageInfo(2)}>
                    Experience
                  </li>
                  <li className={`justify-self-center p-4 text-slate-400 hover:text-red-700 transition-all duration-300 cursor-pointer ${pageInfo === 3 ? 'text-red-700': ''}`}
                    onClick={() => setPageInfo(3)}>
                    Skills
                  </li>
                  <li className={`justify-self-center p-4 text-slate-400 hover:text-red-700 transition-all duration-300 cursor-pointer ${pageInfo === 4 ? 'text-red-700': ''}`}
                    onClick={() => setPageInfo(4)}>
                    Hobbies
                  </li>
                </ul>
              </motion.div>

              <div className="flex flex-col md:flex-row h-full w-full md:max-w-7xl m-auto">
                <motion.div className="w-full md:w-2/5 bg-[#18191d] flex flex-col text-slate-300 items-center p-4 rounded-l-md"
                  initial={{ x:-200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  exit={{ x:-200, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 20
                  }}>
                    <span className="p-4 w-10 h-10 font-poppinsBold self-start text-red-400 cursor-pointer"
                      onClick={closeInfoHandler}>X</span>

                    <img src='https://images.unsplash.com/photo-1611068813580-b07ef920964b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VpdGFyJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='profile' className='w-40 h-40 rounded-full' />
                    <h3 className="font-poppinsBold text-xl">Name</h3>
                    <div className="w-full px-5">
                      <h4 className="font-poppinsBold text-xl">Educación</h4>
                      <p className="font-poppins text-slate-400 font-extralight">Autodidacta por naturaleza, todo lo que he aprendido ha sido a través mis metodos de aprendizaje.</p>
                    </div>

                    <div className="w-full px-5 my-5">
                      <h4 className="font-poppinsBold text-xl">Idiomas</h4>
                      <div className="flex gap-8 mt-3">
                        <div className="font-poppins flex flex-col items-center text-sm text-center">
                          <img className="w-6" src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Peru_%281884%E2%80%931950%29.svg/220px-Flag_of_Peru_%281884%E2%80%931950%29.svg.png' alt="bandera" />
                          <p className="font-poppins">Español</p>
                          <span className="text-second-color text-xs">Nativo</span>
                        </div>
                        <div className="font-poppins flex flex-col items-center text-sm text-center">
                          <img className="w-6" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png' alt="bandera" />
                          <p className="font-poppins">Ingles</p>
                          <span className="text-second-color text-xs">Intermedio B1 - B2</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full px-5">
                      <h4 className="font-poppinsBold text-xl">Estado</h4>
                      <p className="font-poppins text-slate-400 font-extralight">Estoy buscando nuevas oportunidades laborales.</p>
                    </div>

                    <div className="w-full px-5 mt-10">
                        <ul className='grid grid-cols-3'>
                          <li className="place-self-center">git</li>
                          <li className="place-self-center">link</li>
                          <li className="place-self-center">email</li>
                        </ul>
                    </div>

                </motion.div>
                <motion.div className="w-full md:w-3/5 bg-[#18191d] rounded-br-md p-10 md:p-16 md:border-l border-dashed border-second-color"
                  initial={{ x:200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  exit={{ x:200, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 20
                  }}>

                  <AnimatePresence mode="wait" >
                    {pageInfo === 1 && <About /> }
                    {pageInfo === 2 && <Experience /> }
                    {pageInfo === 3 && <Skills /> }
                    {pageInfo === 4 && <Hobbies /> }
                  </AnimatePresence>

                </motion.div>
              </div>

            </div>

          </div>
        </div>
      ) }

      

    </div>
  );
}

export default App;
