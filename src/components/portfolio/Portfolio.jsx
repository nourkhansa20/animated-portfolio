import { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
const items = [
    {
        id: 1,
        title: "React porject",
        img: 'https://images.pexels.com/photos/27143629/pexels-photo-27143629/free-photo-of-seagull.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatibus aut assumenda, sed laborum architecto illo nemo, ut molestias reiciendis numquam, porro ullam eos voluptates hic aspernatur et tempore praesentium.'
    },
    {
        id: 2,
        title: "React Re porject",
        img: 'https://images.pexels.com/photos/27143629/pexels-photo-27143629/free-photo-of-seagull.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatibus aut assumenda, sed laborum architecto illo nemo, ut molestias reiciendis numquam, porro ullam eos voluptates hic aspernatur et tempore praesentium.'
    },
    {
        id: 3,
        title: "Next porject",
        img: 'https://images.pexels.com/photos/27143629/pexels-photo-27143629/free-photo-of-seagull.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatibus aut assumenda, sed laborum architecto illo nemo, ut molestias reiciendis numquam, porro ullam eos voluptates hic aspernatur et tempore praesentium.'
    },
    {
        id: 4,
        title: "JS porject",
        img: 'https://images.pexels.com/photos/27143629/pexels-photo-27143629/free-photo-of-seagull.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatibus aut assumenda, sed laborum architecto illo nemo, ut molestias reiciendis numquam, porro ullam eos voluptates hic aspernatur et tempore praesentium.'
    },
    {
        id: 5,
        title: "Healthy app",
        img: 'https://images.pexels.com/photos/27143629/pexels-photo-27143629/free-photo-of-seagull.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatibus aut assumenda, sed laborum architecto illo nemo, ut molestias reiciendis numquam, porro ullam eos voluptates hic aspernatur et tempore praesentium.'
    }
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
                        <button>See Demo</button>
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
                    <h1>Feature Workd</h1>
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