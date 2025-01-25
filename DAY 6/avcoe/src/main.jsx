import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Comp1 from './components/Comp1.jsx'
import Comp2 from './components/Comp2.jsx'
import Comp3 from './components/Comp3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Comp1 />
    <Comp2 />
    <Comp3 />
    <App />
  </StrictMode>,
)
