"use client"

import Link from 'next/link'
import { motion } from "framer-motion";
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Translation from '../ui/Translation';

function Navbar() {

  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);  // Almacena el índice del elemento activo

  const navItems = [
    { text: t('navbar.myStory'), href: "/" },
    { text: t('navbar.fragments'), href: "/" },
    { text: t('navbar.notes'), href: "/" },
    { text: t('navbar.videos'), href: "/" },
  ]

    return (
    <nav className="navbar">
      <ol className="navList">
        {navItems.map((item, index) => (
          <li key={item.text} className="navItem">
            <motion.div
                    initial={{y: -10, opacity: 0 }}
                    animate={{y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                <Link
                  onClick={() => setActiveIndex(index)}
                  className="navButton"
                  href={item.href}
                >
                  {item.text}
                </Link>
            </motion.div>
            
            {/* Mostrar la barra debajo del botón activo */}
            {activeIndex === index && (
              <motion.div
                initial={{y: -10, opacity: 0 }}
                animate={{y: 0, opacity: 1 }}
                layoutId="underline"  // Clave única para animación compartida
                className="underline"
                transition={{ type: "spring", stiffness: 800, damping: 40 }}
              />
            )}
            
          </li>
        ))}
        <div className="corner">
          <Translation />
        </div>
      </ol>
    </nav>
  )
}

export default Navbar