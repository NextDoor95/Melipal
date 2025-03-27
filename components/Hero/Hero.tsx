"use client"

import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

import { motion } from "framer-motion";
{/* import Image from 'next/image';

import Estevez from "../../public/Hero/Estevez.png";
import Jones from "../../public/Hero/Jones.png";
*/}

const images = [
    "/Hero/Estevez.png",
    "/Hero/Jones.png",
];
function Hero() {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const { t } = useTranslation()

    return (
        <section className="about">
            <div className="soldiers-images">
                <motion.img
                    key={index}
                    src={images[index]}
                    alt="Imagen del Hero"
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 0.9, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    height={400}
                    className="img"
                />
            </div>
            {/* 
            <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 100  }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <Image src={Estevez} alt="Estevez" height={400} />
            </motion.div>
            */}
            
            <div
                className="wrap"
            >
                <div className="content">
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.8  }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className='title'>{t('hero.heroTitle')}</motion.h2>

                    <motion.h3 
                        initial={{ opacity: 0  }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className='subtitle'>{t('hero.heroDescription')}</motion.h3>
                    <motion.p
                        initial={{ opacity: 0  }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                    >{t('hero.heroText')}</motion.p>
                </div>
                <motion.div 
                    initial={{ opacity: 0  }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                className='buttons'>
                    <button
                        className='CTA'
                    >
                        {t('hero.GoTo')}
                    </button>
                    <button
                        className='CTA'
                    >
                        {t('hero.CallToAction')}
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero

