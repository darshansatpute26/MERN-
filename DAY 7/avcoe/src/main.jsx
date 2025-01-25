import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Comp1 from './Components/Comp1'
import Comp4 from './Components/Comp4'
import Comp5 from './Components/Comp5'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Comp1></Comp1>
  <Comp4></Comp4>
  <Comp5></Comp5>
  
  
  </StrictMode>,
)
