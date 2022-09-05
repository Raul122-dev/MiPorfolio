import { useEffect, useState } from "react"

const Navbar = () => {

    const [down, setDown] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setDown(true)
        } else {
            setDown(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    } , [])

    return (
        <header className={`bg-white w-full min-h-[58px] p-4 transition-all duration-300 ease-linear ${ down && 'shadow-md p-1 fixed' }`}>
            
            <div className="flex justify-between max-w-7xl m-auto">

                <div className="w-7">

                </div>

                <ul>
                    <li>Logo</li>
                    <li>Features</li>
                    <li>Pricing</li>
                </ul>

            </div>

            
        </header>
    )
}

export default Navbar;