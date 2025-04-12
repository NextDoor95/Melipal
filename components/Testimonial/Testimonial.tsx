"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

import Player from '@madzadev/audio-player'
import '@madzadev/audio-player/dist/index.css'

import Combate from "../../public/Nestor-Guille.jpeg"


function Testimonial() {
  const [isOpen, setIsOpen] = useState(false);

    // Efecto para añadir/quitar la clase "no-scroll" en el body
    useEffect(() => {
      if (isOpen) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
  
      // Limpieza al desmontar el componente
      return () => document.body.classList.remove("no-scroll");
    }, [isOpen]);

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const tracks = [
    {
      url: 'https://www.dropbox.com/scl/fi/p9x82bsnd496sofll574s/Guillermo-Fragmento-1.mp3?rlkey=p6epbk7fe5qssgomd7t68kd63&st=5fsme7qn&dl=1',
      title: 'Escucha el fragmento',
      tags: ['house']
    }
  ]

  return (

    <div style={{ padding: "2rem", textAlign: "center" }}>
      {/* Tarjeta clickeable */}
      <motion.div
        onClick={() => setIsOpen(true)}
        className='testimonial'
        whileHover={{ scale: 1.02 }}
      > 
        <Image src={Combate} alt="Combate" className='combat' height={300}/>
        <p>Haga clic aquí</p>
      </motion.div>

            {/* Pop-up */}
            {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={popupVariants}
          transition={{ duration: 0.2 }}
          className='popup'
        >
          <motion.div
            className='popup-container'
          >
            <button
              onClick={() => setIsOpen(false)}
              className='exit'
            >
              X
            </button>
    
    <div className='testimonials'>

      
      <div className='left'>
        <h2>Inicio del combate - Goose Green</h2>
        <p>Pulse play para escuchar el fragmento del escrito</p>
      </div>
      <div className='right'>
        <div className='audioplayer'>
          <Player trackList={tracks}
            includeTags={false}
            includeSearch={false}
            showPlaylist={false}
            sortTracks={true}
            autoPlayNextTrack={false}
          />
        </div>
        <div className='textzone'>
          De pronto, el cielo tan cubierto y cerrado momentos antes, se puso naranja-rojo, se iluminó de tanto metal incandescente surcando el aire. Nos pegamos a la turba al mismo tiempo que respondemos con nuestras armas. <br /><br />
          Allí, fui vaciando los 2 primeros cargadores de mi FAL que los tenía encintados para una más rápida maniobrabilidad al intercambiarlos. Disparábamos a discreción hacia el lugar de donde salían las trazantes enemigas. <br /><br />
          “¡A LA DERECHA! ¡A LA DERECHA HAY TRINCHERAS! ¡CÚBRANSE SOLDADOS! ¡CÚBRANSE!” <br /><br /> Apenas alcanzamos a escuchar que nos gritó el Teniente Estévez, en medio de tantos estampidos, y desde el flanco izquierdo. Esa fue la última orden que, al menos yo, escuché de mi Jefe de Sección. <br /><br />
          Instantáneamente comenzamos a arrastrarnos por la turba mojada, fangosa y helada hacia el flanco Este con el objetivo de conseguir desesperadamente una cubierta que nos permita seguir con vida ante tanto fuego trazando el aire. <br />
          Continúo avanzando hacia el flanco derecho, pegado al terreno, arrastrando la cara contra la turba y siguiendo a mi Jefe de Grupo, el Cabo 1° Olmos. <br />
          Pero el fragor del combate y mi incómodo equipo hace que lo pierda de vista enseguida. <br /><br />“¡CÚBRANSE! ¡CÚBRANSE!”<br /><br />
          Cruzaba mis pertrechos hacia mi derecha y luego me arrastraba sobrepasándolos, entonces disparaba mi FAL hacia el enemigo. Una ráfaga o dos y hago nuevamente el mismo movimiento, tratando desesperadamente de alcanzar algún parapeto, algo que permitiera aferrarme a la vida…
        </div>
      </div>
      
    </div>
    </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default Testimonial