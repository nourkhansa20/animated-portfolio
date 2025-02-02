import { motion } from 'framer-motion'
import './contact.scss'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

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
    const formRef = useRef()
    const emailRef = useRef()
    const messgRef = useRef()
    const nameRef = useRef()
    const [isSending, setIsSending] = useState(false)

    const [error, setError] = useState(null)

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true)
        emailjs
            .sendForm('service_iuzer9e', 'template_5fdf42k', formRef.current, {
                publicKey: 'r2b1zgCXyNrt_lW45',
            })
            .then(
                () => {
                    emailRef.current.value = ''
                    nameRef.current.value = ''
                    messgRef.current.value = ''
                    setError(false)
                },
                (error) => {
                    console.log(error)
                    setError(true)
                },
            );
        setIsSending(false)

    };

    return (
        <motion.div className='contact' variants={variants} initial="initial" whileInView='animate'>
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div variants={variants} className='contactInfoContainer'>
                    <motion.div className="item" variants={variants}>
                        <h2>Mail</h2>
                        <span>nourkhansa7@gmail.com</span>
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

            </motion.div>
            <div className="formContainer">
                <form ref={formRef} onSubmit={sendEmail}>
                    <input type='text' required placeholder='Name' name='name' ref={nameRef} />
                    <input type='email' required placeholder='Email' name='email' ref={emailRef} />
                    <textarea rows={8} placeholder='Message' name='message' ref={messgRef}></textarea>
                    <button>
                        {
                            isSending ? 'Sending ...' : 'Submit'
                        }
                    </button>
                </form>
            </div>
        </motion.div>
    )
}

export default Contact