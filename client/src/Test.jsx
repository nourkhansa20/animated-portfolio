import { motion } from "framer-motion"

const Test = () => {

    // const variant = {
    //     visible: { opacity: 1 },
    //     hidden: { opacity: 0 },
    // }

    const variants = {
        visible: {
            opacity: 1,
            x: 100,
            transition: { staggerChildren: 0.2 }
        },
        hidden: { opacity: 0 }
    }

    const items = ['item1', 'item2', 'item3', 'item4']

    return (
        <div className='course'>
            {/* <motion.div className="box"
                // initial={{ opacity: 1, scale: 0.5 }}
                // animate={{ opacity: 0.1, scale: 1, x: 300, y: 500 }}
                variants={variant}
                initial='hidden'
                animate='visible'
                transition={{ duration: 2 }}
                // whileHover={{opacity:1,scale:2}}
                drag
            ></motion.div> */}

            <motion.ul initial="hidden" animate="visible" variants={variants}>
                {items.map((item) => (
                    <motion.li key={item} variants={variants}>{item}</motion.li>
                ))}
            </motion.ul>
        </div >
    )
}

export default Test