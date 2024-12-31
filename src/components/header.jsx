import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
const Header = () => {
    return (

        <>
            <motion.div
                initial={{ opacity: 0.1 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 2,
                    delay: 0.3
                }}
            >
                
                <div className="flex items-center justify-between max-w-[94rem] mx-auto py-9 flex-wrap">
                    <div>
                        <div className="text-xl text-white font-bold cursor-pointer">{'<Raghavendra />'}</div>

                        <TypeAnimation
                            sequence={[
                                'UI Developer',
                                3500,
                                'Swing Trader',
                                1000,
                                'Wildlife Photographer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '16px', fontWeight: "600", color: "green", display: 'inline-block', background: "white", padding: "0px 9px", borderRadius: "9px" }}
                            repeat={Infinity}
                        />
                    </div>
                    <div className="flex items-center space-x-20">
                        <div className="text-xl text-white font-medium cursor-pointer">Home</div>
                        <div className="text-xl text-white font-medium cursor-pointer">About</div>
                        <div className="text-xl text-white font-medium cursor-pointer">Projects</div>
                        <div className="text-xl text-white font-medium cursor-pointer">Contact</div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
export default Header;