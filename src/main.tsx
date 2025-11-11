import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style.css"
import MyPortofolio from './portofolio'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyPortofolio />
  </StrictMode>,
)
