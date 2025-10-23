import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contact from './components/contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='relative w-screen  bg-move'>
      <div className="absolute w-full h-full bg-[url('anim-bg.gif')]  bg-size-[200px_200px] bg-repeat opacity-[0.30]"></div>
      <div className='relative w-full h-full flex flex-col justify-start pt-10 items-center '>
        <App />
        <Contact/>
      </div>
      <div className='flex justify-end'>
        <img src="design-background.svg" alt='design-background ' className='w-[1000px]'/>
        <div className=' absolute pr-96 pt-16'>
            <img src="contact-info.svg" alt="contact-info" className=''></img>
        </div>
      </div>
    </div>
  </StrictMode>,
)
