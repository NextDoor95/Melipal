import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa las traducciones desde los archivos JSON
import translationEN from './locales/en.json';
import translationES from './locales/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      es: {
        translation: translationES
      }
    },
    lng: 'es', // Idioma predeterminado
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false // React ya escapa por defecto
    }
  });

export default i18n;