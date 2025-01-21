import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
const imgIndexes =[0,1,2]

let index = 0

setInterval(() => {
  index = (index + 1) % imgIndexes.length
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <img src={`src/assets/${index+1}.jpg`} alt={`Image ${index+1}`} />
    </StrictMode>,
  )
}, 1000)


