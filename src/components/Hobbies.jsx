import { useSelector } from "react-redux"

const Hobbies = () => {

    const information = useSelector(state => state.information)

    return (
        <div className="overflow-y-hidden md:overflow-y-scroll h-full">
            <h1 className="text-red-700 font-poppinsBold text-3xl">Hobbies</h1>
            <p className="text-slate-400 font-poppins mt-2">{information.hobbies.description}</p>
            <div className="grid grid-cols-2 gap-4 mt-8">

                {
                    information.hobbies.hobbiesList.map((hobby, index) => (
                        <div className='w-full text-center' key={index}>
                            <img src={hobby.image} alt={hobby.name} loading='lazy' className="w-28 h-20 mx-auto mt-4"/>
                            <h1 className="text-second-color font-poppinsBold text-xl mt-10">{hobby.name}</h1>
                            <p className="text-slate-400 text-sm font-poppins mt-2">{hobby.description}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Hobbies