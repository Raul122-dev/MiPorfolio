import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux';
import { changeInfo } from '../features/Information/InformationSlice';

const Indicator = ({ active = false, onClick, text, children }) => {

  return <motion.a href={`#${text}`} className={`w-10 h-10 p-2 sm:p-1 relative justify-self-center group grid place-content-center duration-200 ease-linear ${active && ''} `}
            onClick={onClick}
            initial={'inactive'}
            animate={ active ? 'active' : 'inactive' }
            variants={
                {
                    active: { scale: 1.1 },
                    inactive: { scale: 1 }
                }
            }
            exit={'inactive'}>
                {children}
                <div className='h-10 hidden sm:block absolute invisible opacity-0 sm:group-hover:visible sm:group-hover:opacity-100 sm:group-hover:translate-x-11 ease-in-out duration-300 top-0 bg-transparent-stroke-color rounded-sm p-2 font-poppinsBold text-white'>
                    {text}
                </div>
        </motion.a>
};

const Indicators = ({ index, setIndex }) => {

  const information = useSelector(state => state.information)

  const dispatch = useDispatch()

  const handleChangeLanguage = () => {
    const language = localStorage.getItem('language')
    if (language === 'en') {
      localStorage.setItem('language', 'es')
      dispatch(changeInfo('es'))
    } else {
      localStorage.setItem('language', 'en')
      dispatch(changeInfo('en'))
    }
  }

  return (
    <div className="fixed bottom-0 grid-cols-4 w-full p-3 border-t-[1px] rounded-md bg-[#001011] sm:bg-none sm:border-none sm:rounded-none sm:grid-cols-1 sm:w-auto sm:left-16 sm:top-0 sm:bottom-0 grid sm:gap-14 sm:place-content-center ">
      <Indicator active={index === 1 ? true : false} text={information.views.at(0)} onClick={() => setIndex(1) }>
        <svg className={`stroke-white group-hover:stroke-[#093A3E] sm:group-hover:-translate-x-1 transition-all duration-200 ease-in ${index === 1 && 'stroke-[#093A3E]' }`} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" focusable="false" viewBox="0 0 12 12">
            <path fill="none" d="M2 11.5h2a.5.5 0 00.5-.5V8a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v3a.5.5 0 00.5.5h2a.5.5 0 00.5-.5V6.5h.389a.496.496 0 00.413-.838L6.422.681a.59.59 0 00-.844 0L.698 5.662a.496.496 0 00.413.838H1.5V11a.5.5 0 00.5.5z"/>
        </svg>
      </Indicator>
      <Indicator active={index === 2 ? true : false} text={information.views.at(1)} onClick={() => setIndex(2) }>
        <svg className={`stroke-white group-hover:stroke-[#093A3E] sm:group-hover:-translate-x-1 transition-all duration-200 ease-in ${index === 2 && 'stroke-[#093A3E]' }`} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" focusable="false" viewBox="0 0 12 12">
            <path fill="none" stroke-linejoin="round" d="M5.84.9L1.68 3.13c-.11.06-.18.18-.18.31v5.12c0 .13.07.24.18.3l4.15 2.24c.1.06.23.06.33 0l4.15-2.24a.35.35 0 00.18-.3V3.44c0-.13-.07-.24-.18-.3L6.16.9a.307.307 0 00-.32 0zM1.5 3.23L6 5.65l4.5-2.42M6 5.65v5.2"/>
        </svg>
      </Indicator>
      <Indicator active={index === 3 ? true : false} text={information.views.at(2)} onClick={() => setIndex(3) }>
        <svg className={`stroke-white group-hover:stroke-[#093A3E] sm:group-hover:-translate-x-1 transition-all duration-200 ease-in ${index === 3 && 'stroke-[#093A3E]' }`} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" focusable="false" viewBox="0 0 12 12">
            <g fill="none" >
                <circle cx="3" cy="2" r="1.5"/>
                <circle cx="8" cy="4.5" r="2"/>
                <path stroke-linecap="round" d="M11.5 11.5c-.2-1.7-1.7-3-3.5-3s-3.3 1.3-3.5 3m-4-4c.2-1.1 1.3-2 2.5-2s2.3.9 2.5 2"/>
            </g>
        </svg>
      </Indicator>
      <a className={`w-10 h-10 p-2 sm:p-1 relative justify-self-center group grid place-content-center duration-200 ease-linear cursor-pointer select-none`}
            onClick={handleChangeLanguage}>
            <svg className={`stroke-white group-hover:stroke-[#093A3E] sm:group-hover:-translate-x-1 transition-all duration-200 ease-in `} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" focusable="false" viewBox="0 0 12 12">
              <g fill="none" >
                <circle cx="6" cy="6" r="5.5"/>
                <path d="M3.5 4.5v3m5-3v3m-7.8-3h10.6M.7 7.5h10.6M6 .5l-2.5 4M6 .5l2.5 4m-2.5 7l-2.5-4m2.5 4l2.5-4"/>
              </g>
            </svg>
            <div className='h-10 hidden sm:block absolute invisible opacity-0 sm:group-hover:visible sm:group-hover:opacity-100 sm:group-hover:translate-x-11 ease-in-out duration-300 top-0 bg-transparent-stroke-color rounded-sm p-2 font-poppinsBold text-white'>
                {information.views.at(3)}
            </div>
        </a>
    </div>
  );
};

export default Indicators;
