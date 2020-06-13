import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const LanguageContext = React.createContext({
  language: 'pt',
  switchLanguage: () => console.log("change language - context")
})

const LanguageProvider = ({ children }) => {
  const lang = new URLSearchParams(useLocation().search).get('lang') || 'pt'
  const [language, setLanguage] = useState(lang)

  const switchLanguage = lang => {
    console.log('change language - provider')
    setLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export { LanguageContext, LanguageProvider }
