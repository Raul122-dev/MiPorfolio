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
    // console.log(engine);
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

                    <img src='https://cdn.discordapp.com/attachments/701464055235215471/914324772677095434/Polish_20211127_202002501.png' alt='profile' className='w-40 h-40 rounded-full' />
                    <h3 className="font-poppinsBold text-lg">{information.nameComplete}</h3>
                    <div className="w-full px-5">
                      <h4 className="font-poppinsBold text-xl">Educación</h4>
                      <p className="font-poppins text-sm text-slate-400 font-extralight">{information.education}</p>
                    </div>

                    <div className="w-full px-5 my-5">
                      <h4 className="font-poppinsBold text-xl">Idiomas</h4>
                      <div className="flex gap-8 mt-3">
                        <div className="font-poppins flex flex-col items-center text-sm text-center">
                          <img className="w-6 h-4" src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Peru_%281884%E2%80%931950%29.svg/220px-Flag_of_Peru_%281884%E2%80%931950%29.svg.png' alt="bandera" />
                          <p className="font-poppins">{information.languagesSpeak.at(0).name}</p>
                          <span className="text-second-color text-xs">{information.languagesSpeak.at(0).level}</span>
                        </div>
                        <div className="font-poppins flex flex-col items-center text-sm text-center">
                          <img className="w-6 h-4" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png' alt="bandera" />
                          <p className="font-poppins">{information.languagesSpeak.at(1).name}</p>
                          <span className="text-second-color text-xs">{information.languagesSpeak.at(1).level}</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full px-5">
                      <h4 className="font-poppinsBold text-xl">Estado</h4>
                      <p className="font-poppins text-sm text-slate-400 font-extralight">{information.state}</p>
                    </div>

                    <div className="w-full px-5 mt-10">
                        <ul className='grid grid-cols-3'>
                          <li className="place-self-center">
                            <a href={information.contactUrls.at(1)} target="_blank">
                              <svg xmlns="http://www.w3.org/2000/svg" height={30} viewBox="0 0 128 128">
                                <g fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/></g>
                              </svg>
                            </a>
                          </li>
                          <li className="place-self-center">
                            <a href={information.contactUrls.at(0)} target="_blank">
                              <svg xmlns="http://www.w3.org/2000/svg" height={30} viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"/><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"/></svg>
                            </a>
                          </li>
                          <li className="place-self-center">
                            <a href={information.contactUrls.at(2)} target="_blank">
                              Email
                            </a>
                          </li>
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
