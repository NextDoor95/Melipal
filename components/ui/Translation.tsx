"use client"
import Image from 'next/image';

import World from '../../public/world.png';

import { useTranslation } from 'react-i18next';

function Translation() {

    const { i18n } = useTranslation();
    
    const toggleLanguage = () => {
      i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
    };

  return (
    <button
      onClick={toggleLanguage}
      className="translation"
    >
      <Image
        src={World}
        alt='book'
        className='image'
      />
      {i18n.language === 'es' ? 'ES' : 'EN'}
    </button>
  )
}

export default Translation