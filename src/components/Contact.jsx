import {motion} from 'framer-motion'
import { useSelector } from 'react-redux';
import Script from 'react-load-script'

const Contact = () => {

    const information = useSelector(state => state.information)

  return (
    <motion.section
      className="w-full h-screen relative overflow-x-hidden"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring" }}
    >

        <div className='w-full h-full flex flex-col justify-center items-center'>
            <span className='font-poppinsBold text-second-color'>{information.contactView.span}</span>
            <h1 className="text-5xl my-6 sm:my-14 text-slate-100 md:text-[60px] font-bold leading-5 tracking-normal capitalize font-poppinsBold">{information.contactView.title}</h1>
            <p className="font-poppins text-center text-slate-400 w-[500px]">{information.contactView.subtitle}</p>
            <a href={information.contactView.email} target="_blank" className="mt-10 border border-main-stroke-color rounded-md py-3 px-4 md:py-4 md:px-5 font-poppins text-sm font-bold text-main-stroke-color transition-all duration-300 ease-in-out hover:bg-transparent-stroke-color">{information.contactView.button}</a>
            <a href={`tel:${information.phone}`} className="hover:text-white transition-all ease-in duration-200 mt-2 font-poppins text-sm text-center text-slate-500 w-[500px]">{information.phone}</a>
            <div className="badge-base LI-profile-badge" data-locale="es_ES" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="victor-raul-huaycho-quispe-8b009b221" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/victor-raul-huaycho-quispe-8b009b221?trk=profile-badge">Victor Raul Huaycho Quispe</a></div>
              
        </div>
      
    </motion.section>
  );
};

export default Contact;
