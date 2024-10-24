"use client"

import { useTranslation } from 'react-i18next';

function Translation() {

    const { t, i18n } = useTranslation();
    
    const toggleLanguage = () => {
      i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
    };

  return (
    <button
      onClick={toggleLanguage}
      className="translation"
    >
      {t('navbar.language')}: {i18n.language === 'es' ? 'ES' : 'EN'}
    </button>
  )
}

export default Translation