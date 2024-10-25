"use client"

import { useTranslation } from 'react-i18next';
function Hero() {

    const { t } = useTranslation()

    return (
        <section className="about">
            <div className="wrap">
                <div className="content">
                    <h2>{t('hero.heroTitle')}</h2>
                    <p>{t('hero.heroDescription')}</p>
                    <p>{t('hero.heroText')}</p>
                </div>
                <div className='CTA'>
                    <button
                        className='translation'
                    >
                        {t('hero.CallToAction')}
                    </button>
                </div>
                
            </div>
        </section>
    )
}

export default Hero

