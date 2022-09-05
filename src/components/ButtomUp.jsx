import { useState, useEffect } from "react";

const ButtonUp = () => {
  const [up, setUp] = useState(false)

  const handleScroll = () => {
    if (window.scrollY >= 500) {
        setUp(true)
    } else {
        setUp(false)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button className={`shadow-xl w-[50px] h-[50px] fixed text-white bg-black right-0 mb-8 mr-8 rounded-[3px] transition-all ease-linear duration-300 ${ up ? 'bottom-0' : '-bottom-[100px]' }`}
        onClick={scrollToTop}>
      <span className="text-xl">▲</span>
    </button>
  );
};

export default ButtonUp;
