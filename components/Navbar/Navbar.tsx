"use client"

import { Size } from '../types'
import { Slant as Hamburger } from 'hamburger-react'

import Link from 'next/link'
import { motion } from "framer-motion";
import { useState, useEffect } from 'react'

import { useTranslation } from 'react-i18next';
import Translation from '../ui/Translation';

function Navbar() {

  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);  // Almacena el índice del elemento activo

  const navItems = [
    { text: t('navbar.myStory'), href: "/" },
    { text: t('navbar.fragments'), href: "/" },
    { text: t('navbar.notes'), href: "/" },
    { text: t('navbar.videos'), href: "/" }
  ]

  const size: Size = useWindowSize()
  const [isMobileNavbarVisible, setIsMobileNavbarVisible] = useState(false)

  function useWindowSize(): Size {
		// Initialize state with undefined width/height so server and client renders match
		// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
		const [windowSize, setWindowSize] = useState<Size>({
			width: undefined,
			height: undefined,
		})
		useEffect(() => {
			// Handler to call on window resize
			function handleResize() {
				// Set window width/height to state
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				})
			}
			// Add event listener
			window.addEventListener('resize', handleResize)
			// Call handler right away so state gets updated with initial window size
			handleResize()
			// Remove event listener on cleanup
			return () => window.removeEventListener('resize', handleResize)
		}, []) // Empty array ensures that effect is only run on mount
		return windowSize
	}

    return (
    <nav className="navbar">
      {size.width! <= 900 ? (
						<Hamburger
							toggled={isMobileNavbarVisible}
							toggle={setIsMobileNavbarVisible}
						/>
			) : (
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
        <Translation />
      </ol>
      )}
      {isMobileNavbarVisible && (

        <div className="navbar--mobile">
            <Link href="/">
            historia
            </Link>
            <Link href="/">
            fragmentos
            </Link>
            <Link href="/">
            videos
            </Link>
            <div>
              <Translation />
            </div>
        </div>
      )}
      
    </nav>
  )
}

export default Navbar