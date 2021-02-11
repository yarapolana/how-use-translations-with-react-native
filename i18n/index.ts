import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// It is best to keep one language as base or for your unique key 
// in this case we will use english as base
// So all our Trans componnents identify like this
// <Trans>This is the base text</Trans>
// And our resources searches for 
// 
const i18nInstance = i18n.use(initReactI18next)

i18nInstance.init({
  resources: {
    en: {
      translations: {
        "Good Morning": "Good Morning",
        "Click to Translate": "Click to Translate"
      }
    },
    is: {
      translations: {
        "Good Morning": "Góðan daginn",
        "Click to Translate": "Smelltu hér til að þýða",
      }
    }
  },
  // Default language
  lng: 'is',
  fallbackLng: 'is',
  debug: false,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // use content as keys
  interpolation: {
    escapeValue: false,
  },
})

i18nInstance.languages = ['en', 'is']

export default i18nInstance