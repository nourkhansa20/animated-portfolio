import { Link } from 'react-scroll'
import './hero.scss'
import { motion } from 'framer-motion'

const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0
    },
    animate: {
        x: "-220%",
        opacity: 1,
        transition: {
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror"
        }
    },
}
const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial='initial' animate='animate'>
                    <motion.h2 variants={textVariants}>NOUR ALKHANSA</motion.h2>
                    <motion.h1 variants={textVariants}>Full-stack developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>
                            <Link to='Portfolio'>See the lastest works</Link>
                        </motion.button>

                        <motion.button variants={textVariants}>
                            <Link to='Contact'>
                                Contact me
                            </Link>
                        </motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate='scrollButton' src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="sliddingTextContainer" variants={sliderVariants} initial='initial' animate="animate">
                Full-stack developer ....
            </motion.div>

            {/* <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div> */}
        </div>
    )
}

export default Hero