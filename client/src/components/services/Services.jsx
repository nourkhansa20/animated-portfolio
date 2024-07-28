import { useRef } from 'react'
import './services.scss'
import { animate, motion, useInView } from 'framer-motion'

const variants = {
    initial: {
        x: -500,
        // y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const Services = () => {

    const ref = useRef()
    const isInView = useInView(ref, { margin: '-100px' })

    return (
        <motion.div className='services' variants={variants} initial='initial' ref={ref} animate={'animate'}>
            {/* <motion.div className="textContainer">
                <p>
                    I focus on helping your brand grow
                    <br />
                    and move forward
                </p>
                <hr />
            </motion.div> */}
            <motion.div className="titleContainer" variants={variants} >
                <div className="title">
                    {/* <img src="/people.webp" alt="" /> */}
                    <h1><motion.b whileHover={{ color: 'orange' }}>About </motion.b> Me</h1>
                </div>
            </motion.div>
            <motion.div className="parContainer" variants={variants} >
                With over one year of professional experience in Software Engineering, I excel in delivering scalable code collaboratively
                and independently. My expertise spans a broad spectrum of frontend and backend technologies, enabling me to achieve
                outstanding results in diverse projects, including web development, backend infrastructure, and mobile applications. My
                goal is to leverage my comprehensive skill set to drive innovative projects and deliver exceptional results. I am eager to
                continue learning new skills to further enhance my expertise in a dynamic and challenging environment and plan on
                pursuing a Master’s Degree in Artificial Intelligence.
            </motion.div>
        </motion.div>
    )
}

export default Services