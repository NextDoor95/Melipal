import { motion } from "framer-motion"
import { useState } from "react"

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
    }

    function NavbarMobile() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        >
        <button onClick={() => setIsOpen(isOpen => !isOpen)} />
        <p>textdfg</p>
        <p>textdfg</p>
        <p>textdfg</p>
        <p>textdfg</p>
        </motion.nav>
    )
}

export default NavbarMobile