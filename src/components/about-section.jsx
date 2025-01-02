import { motion } from "framer-motion";
import SectionTitle from "./common/section-title";

const AboutSection = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0.1, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    delay: 0.1
                }}
                className="max-w-[94rem] mx-auto py-[5%]"
            >
                <SectionTitle title="About" />

                <div className="md:flex justify-between">
                    {/* <div className="h-[500px] flex">
                        <div className="h-[20rem] md:w-[20rem] w-full shadow-2xl shadow-cyan-300 bg-slate-800  rounded-3xl" ></div>
                    </div> */}
                    <div className="text-xl font-normal text-white">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, laudantium cum eius labo
                        riosam odit ipsa, debitis placeat quasi accusantium eum esse iste in. Culpa consequuntur quasi,
                        iure laudantium dolor corporis?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, laudantium cum eius labo
                        riosam odit ipsa, debitis placeat quasi accusantium eum esse iste in. Culpa consequuntur quasi,
                        iure laudantium dolor corporis?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, laudantium cum eius labo
                        riosam odit ipsa, debitis placeat quasi accusantium eum esse iste in. Culpa consequuntur quasi,
                        iure laudantium dolor corporis?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, laudantium cum eius labo
                        riosam odit ipsa, debitis placeat quasi accusantium eum esse iste in. Culpa consequuntur quasi,
                        iure laudantium dolor corporis?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, laudantium cum eius labo
                        riosam odit ipsa, debitis placeat quasi accusantium eum esse iste in. Culpa consequuntur quasi,
                        iure laudantium dolor corporis?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, laudantium cum eius labo
                        riosam odit ipsa, debitis placeat quasi accusantium eum esse iste in. Culpa consequuntur quasi,
                        iure laudantium dolor corporis?
                    </div>
                </div>
            </motion.div>
        </>
    )
}
export default AboutSection