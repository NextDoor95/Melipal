"use client"

import { useTranslation } from 'react-i18next';
function Hero() {

    const { t } = useTranslation()

    return (
        <section className="about">
            <div className="wrap">
                <div className="content">
                    <h2 className='title'>{t('hero.heroTitle')}</h2>
                    <h3 className='subtitle'>{t('hero.heroDescription')}</h3>
                    <p>{t('hero.heroText')}</p>
                </div>
                <div className='buttons'>
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
                </div>
            </div>
        </section>
    )
}

export default Hero

