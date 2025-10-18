import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='w-screen h-screen  flex justify-center items-start bg-move'>
      <div className="absolute w-full h-full bg-[url('anim-bg.gif')]  bg-[length:200px_200px] bg-repeat opacity-[0.30]"></div>
      <div className='relative w-full h-full flex flex-col justify-start pt-10 items-center '>
        <Header/>
        <App />
      </div>
    </div>
  </StrictMode>,
)
