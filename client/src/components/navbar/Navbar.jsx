import GithubIcon from '../icons/GithubIcon'
import LinkedinIcon from '../icons/LinkedinIcon'
import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from 'framer-motion'

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Nour Al Khansa
                </motion.span>
                <div className="social">
                    <a href="https://github.com/nourkhansa20" target='_blank'><GithubIcon style={{ width: '20px', fill: 'white' }} /></a>
                    <a href="https://www.linkedin.com/in/nour-khansa-986787256/" target='_blank'><LinkedinIcon style={{ width: '20px', fill: 'white' }}  /></a>

                </div>
            </div>
        </div>
    )
}

export default Navbar