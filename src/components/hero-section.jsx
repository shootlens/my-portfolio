import { motion } from "framer-motion";
import WavingHand from "./common/ustom-styled/waving-hand";



const HeroSection = () => {
    return (
        <>
            <motion.div
                // initial={{ opacity: 0.1, y: 28 }} // Starts 100px below its final position
                // animate={{ opacity: 1, y: 0 }}
                // transition={{
                //     duration: 0.6,
                //     delay: 0.1
                // }}
                className="max-w-[94rem] mx-auto mt-[5%]"
            >
                <div className="md:flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0.1, x: -40, y: 10 }}
                        animate={{ opacity: 1, x: 0, y: -10 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1
                        }} className="flex items-start justify-start flex-col space-y-5">
                        <div className="flex items-center space-x-2">
                            <div className="md:text-6xl text-xl text-white font-medium">Hi</div>
                            <WavingHand />
                        </div>
                        <div className="md:text-7xl text-3xl text-white font-semibold">I'm <span className="text-green-500 ">Raghavendra</span> </div>
                        <div className="text-xxl text-green font-medium px-2 rounded-md bg-white">UI DEVELOPER</div>
                        <div className="flex items-center space-x-5 pt-5">
                            <div className="px-5 py-2 border border-gray-400 rounded-md text-lg font-medium text-white cursor-pointer">Resume</div>
                            <div className="px-5 py-2 border border-gray-400 rounded-md text-lg font-medium text-white cursor-pointer">Contact Me</div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0.9, x: 0, y: 10 }}
                        animate={{ opacity: 1, x: -40, y: -10 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1
                        }}
                        className="h-[500px] mt-[10%] md:mt-0">
                        <div className="md:h-[30rem] h-[20rem] md:w-[30rem] shadow-2xl shadow-cyan-300 bg-slate-800  rounded-3xl" ></div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}
export default HeroSection