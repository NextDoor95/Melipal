import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import ChevronDown from '../../../public/cards/ChevronDown.png'
import ChevronUp from '../../../public/cards/ChevronUp.png'
import Prueba from '../../../public/cards/History.jpg'



function Story() {

    const [expandedCard, setExpandedCard] = useState<boolean>(false)

    const toggleCard = () => {
        setExpandedCard(!expandedCard)
    }

    return (
        <section className="history">
            <div className="wrapper-story">
            <div className="image-container">
                <Image
                    src={Prueba}
                    alt='book'
                    className='image'
                />
            </div>
        <div className="grid">
            <motion.div
                className="card"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="card-content">
                    <div className="card-header">
                        <h3 className="card-title">Historia</h3>
                        <p>1982 - 2 de Abril</p>
                    </div>
                    <p className="card-description">La Guerra que enfrentó a Argentina y el Reino Unido por la soberanía de las islas en el Atlántico Sur. <br /> Argentina ocupó las islas en abril, buscando consolidar apoyo popular bajo la dictadura militar, mientras que el Reino Unido respondió con una fuerza militar liderada por Margaret Thatcher.</p>
                    <button
                        onClick={toggleCard}
                        className="button"
                    >
                    {expandedCard ? (
                        <>
                        <span className="button-icon">Ver menos ↑</span>
                        <Image
                            src={ChevronUp}
                            alt='book'
                            className='ChevronUp'
                        />
                        </>
                    ) : (
                        <>
                        <span className="button-icon">Ver más ↓</span>
                        <Image
                            src={ChevronDown}
                            alt='book'
                            className='ChevronDown'
                        />
                        </>
                    )}
                    </button>
                </div>
                <AnimatePresence>
                    {expandedCard  && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                            type: "tween",
                            stiffness: 200,   // La rigidez del resorte, mayor número = más rápido
                            damping: 20,
                            duration: 0.1,   // Haz que el cierre sea más lento
                            ease: "easeInOut"       // La resistencia del resorte, mayor número = menos rebote
                        }}
                        className="expanded-content"
                    >
                        <p className="expanded-text">El conflicto, que duró 74 días, atrajo la atención global, y aunque hubo intentos diplomáticos para resolverlo, terminó con la victoria británica, consolidando el poder de Thatcher y acelerando la caída del régimen militar en Argentina. El combate de Goose Green fue una batalla crucial. Allí, el Teniente Coronel británico H. Jones murió heroicamente liderando a sus hombres, lo que le valió la Cruz Victoria póstuma. <br/><br/> Sin embargo, en el lado argentino, el Teniente Néstor Estévez se destacó por su valentía en el frente, sacrificando su vida al liderar un contraataque bajo intenso fuego enemigo. Estévez es recordado como un héroe en Argentina, su coraje en Goose Green simboliza el espíritu de los soldados argentinos que lucharon con determinación en circunstancias adversas.</p>
                    </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
        </div>
        </section>
    )
}

export default Story