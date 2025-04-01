import Image from "next/image"

import Guillermo from "../../public/Guillermo.png"

function Author() {
    return (
        <section className='Author' id="author">
            <h1>Autor del Libro - Guillermo Huircapan </h1>
            <div className="wrapper-bio">
                
                <div className="biography">
                    <p>
                    Soy Guillermo Huircapán, un patagónico de ascendencia autóctona y criolla, nacido en Río Pico, provincia de Chubut. Mi infancia transcurrió entre los paisajes de la cordillera y el mar en distintos pueblos del interior. Crecí rodeado de naturaleza, aprendiendo a amar mi tierra junto a mis padres y mis 7 hermanos. Mi infancia estuvo marcada por carencias materiales, aventuras, momentos de amor, también felicidad y otros no tanto.
<br /><br />
La adolescencia me encontró explorando nuevos horizontes, viviendo en distintos puntos de la provincia. Estudié, trabajé de niño vendiendo diarios y en las pesqueras, jugué al fútbol y me involucré en diferentes actividades mientras crecía. Pero fue el llamado del servicio militar el que marcaría un antes y un después en mi vida. De pronto, me vi enfundado en un uniforme, preparándome para defender mi Patria en un conflicto que cambiaría mi destino.
<br /><br />
La Guerra de Malvinas fue una prueba de fuego, un desafío que me puso al límite de mis fuerzas. Allí, en medio del horror y la incertidumbre, descubrí el valor del coraje, la importancia de la camaradería y la fragilidad de la vida. Regresé a casa transformado, sumado a una post-guerra dura para “los locos de Malvinas”, la cual se llevó más hermanos por suicidios que por caídos en combate. Dediqué el resto de mi vida a mantener viva la memoria de quienes quedaron, fui presidente del Centro de Veteranos de Guerra de Puerto Madryn y también Coordinador Provincial de Chubut por muchos años. Participé en marchas a la Capital Federal por reclamar derechos de los Veteranos y fuí reprimido por las Fuerzas de Seguridad Federales en el Congreso de la Nación y en las calles de Buenos Aires. Brindé charlas a escuelas de mi ciudad como en pueblos remotos y parajes de mi provincia, brindé testimonios en distintos libros, canales de televisión, radios y demás.
<br /><br />
Hoy escribo mi autobiografía para rendir homenaje a mis compañeros caídos y dejar un legado a nuestra nación. Mantener viva la memoria de mis hermanos de Malvinas es un compromiso que tomé como brújula en mi vida, en este contenido van a encontrar lo que vivimos los soldados de la sección BOTE del Regimiento de Infantería 25.

                    </p>
                    
                </div>

                <div>
                    <Image src={Guillermo} alt="Guillermo Huircapan" height={500} />
                </div>
            </div>
            
        </section>
    )
}

export default Author