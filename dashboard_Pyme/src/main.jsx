import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import { DateProvider } from './context/DataContext.jsx'; // <--- Importa 



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DateProvider>
      <App />
    </DateProvider>
  </StrictMode>,
)
