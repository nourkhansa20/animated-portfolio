import { motion } from 'framer-motion'
import './contact.scss'

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        }
    }
}

const Contact = () => {
    return (
        <motion.div className='contact' variants={variants} initial="initial" whileInView='animate'>
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>hello@mail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>Lebanon</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>+961 81 861 592</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <form action="">
                    <input type='text' required placeholder='Name' />
                    <input type='email' required placeholder='Email' />
                    <textarea rows={8} placeholder='Message'></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </motion.div>
    )
}

export default Contact