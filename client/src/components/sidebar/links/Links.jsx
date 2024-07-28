import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
}

const itemsVariants = {
    open: {
        y: 0,
        opacity: 1
    },
    closed: {
        y: 50,
        opacity: 0
    }
}

const Links = () => {

    const items = [
        "Homepage",
        "About",
        "Portfolio",
        "Contact",
    ]

    return (
        <motion.div className='links' variants={variants}>
            {
                items.map(item => (
                    <Link to={item}>
                        <motion.a key={item} variants={itemsVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            {item}
                        </motion.a>
                    </Link>

                ))
            }
        </motion.div>
    )
}

export default Links