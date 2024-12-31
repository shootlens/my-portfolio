import { motion } from "framer-motion";



const HeroSection = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0.1, y: 28 }} // Starts 100px below its final position
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    delay: 0.1
                }}>
                <div className="md:flex items-center justify-between pt-[3%]">
                    <div className="md:w-1/2 h-[500px] flex items-center md:justify-center">
                        <div className="flex items-start justify-start flex-col space-y-5">
                            <div className="md:text-5xl text-xl text-white font-medium">Hi There</div>
                            <div className="md:text-7xl text-3xl text-green-500 font-semibold">I'm Raghavendra</div>
                            <div className="text-xl text-green font-medium px-2 rounded-md bg-white">UI DEVELOPER</div>
                            <div className="flex items-center space-x-5 pt-5">
                                <div className="px-5 py-2 border border-gray-400 rounded-md text-lg font-medium text-white cursor-pointer">Resume</div>
                                <div className="px-5 py-2 border border-gray-400 rounded-md text-lg font-medium text-white cursor-pointer">Contact Me</div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 h-[500px] flex items-center justify-center">
                    <div className="h-[30rem] w-[30rem] shadow-2xl shadow-cyan-300 bg-slate-800  rounded-3xl" ></div>
                    
                    </div>
                </div>
            </motion.div>
        </>
    )
}
export default HeroSection