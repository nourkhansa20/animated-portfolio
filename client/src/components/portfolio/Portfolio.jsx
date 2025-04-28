import { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
const items = [
    {
        id: 1,
        title: "E-commerce",
        img: '/e-commerce.png',
        to: "http://16.171.232.54/ecommerce/home",
        desc: `It's an e- commerce 
                site for selling a variety of products, featuring a wishlist, shopping cart, and checkout process.The website also includes product
                reviews, user ratings, order tracking, inventory management, and detailed product descriptions with high - quality images.The entire website is built from scratch, with no 
                templates used. `
    },
    {
        id: 2,
        title: "OBN",
        img: '/obn.png',
        to: 'https://obneasysort.com/',
        desc: `This website is designed for an AI module that allows users to upload one or multiple photos, sending them to the AI for object 
                detection and separation. Users can select objects to separate using points or boxes, enabling multiple selections simultaneously. 
                All selection tools were developed from scratch. A key challenge in this project was transmitting the coordinates of the selected 
                objects to the AI and managing multiple selections effectively.`
    },
    {
        id: 3,
        title: "Garage internal system",
        to: 'https://youtu.be/14xIZh3kdKI',
        img: '/garage.png',
        desc: `This project aimed to manage cars entering the garage, tracking each vehicle along with client details and all repair items changed. 
                The system provided estimates, including discounts and taxes, with an option to print. Additionally, there was a comprehensive 
                check-up form for the garage's service, covering all car components `
    },
]

const Single = ({ item }) => {

    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    })
    const y = useTransform(scrollYProgress, [0, 1], ['-300px', '300px'])

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2 >{item.title}</h2>
                        <p>{item.desc}</p>
                        <button><a href={item.to} target='_blank'>See Demo</a> </button>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] })
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <>
            <div className='portfolio' ref={ref}>
                <div className="progress">
                    <h1>Feature Work</h1>
                    <motion.div style={{ scaleX }} className="progressBar"></motion.div>
                </div>
                {items.map((item) => (
                    <Single item={item} key={item.id} />
                ))}
            </div>
        </>
    )
}

export default Portfolio