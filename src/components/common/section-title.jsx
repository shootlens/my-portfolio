import { motion } from "framer-motion";



const SectionTitle = ({ title }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.6,
                    delay: 0.1
                }}
            >{title &&
                <div className="relative ml-7">
                    <div className="w-40 h-12 rounded-tl-full rounded-br-full bg-green-400 opacity-30 absolute -top-1 -left-7"></div>
                    <div className="text-3xl text-white font-medium mb-5">#{title}</div>
                </div>
                }

            </motion.div>
        </>
    )
}
export default SectionTitle