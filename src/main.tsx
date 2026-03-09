import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MyThemeProvider from './components/Theme/ThemeProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyThemeProvider>
      <App />
    </MyThemeProvider>
  </StrictMode>,
)
