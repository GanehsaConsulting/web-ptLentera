import { FiArrowDown } from "react-icons/fi";

export const Banner = () => {
    return (
        <>
        <div id="home"/>
            <section className="relative">
                <img
                    className="h-screen w-full object-cover"
                    src="https://images.unsplash.com/photo-1559510981-10719ce4266a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" />
                <div className="w-full from-black to-[#ffffff00] bg-gradient-to-b absolute z-10 h-[80%] top-0"></div>
                <div className="absolute top-0 left-0 z-20 w-full space-x-5 text-white flex flex-col items-center gap-5 h-full justify-center">
                    <h1 className="text-2xl md:text-5xl tracking-widest uppercase font-semibold text-center">
                        Your <span className="text-violet-300">Trusted</span> Partner <br /> for <span className="text-red-300">Pipeline Needs</span>
                    </h1>
                    <h2 className="text-center md:w-[50%] text-opacity-80 text-white">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non inventore libero sed eligendi excepturi, recusandae odit tempore itaque dolores eos accusantium nemo molestiae perferendis iusto aliquam porro odio. Quod, dicta.
                    </h2>
                    <a
                        className="-mt-2 px-4 py-1 backdrop-blur-lg rounded-full bg-white bg-opacity-25 font-bold duration-300 hover:bg-red-200 hover:text-gray-800"
                        href="#about-us"
                    >
                        Explore
                    </a>
                    <FiArrowDown className="-mt-3 text-xl animate-bounce text-opacity-80 text-white"/>
                </div>
            </section>

        </>
    )
} 