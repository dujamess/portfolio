import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contact from './components/contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='relative w-screen  bg-move'>
      <div className="absolute w-full h-full bg-[url('anim-bg.gif')] bg-[length:250px_200px] bg-repeat opacity-[0.30]"></div>
      <div className='relative w-full h-full flex flex-col justify-start pt-10 items-center '>
        <App />
        <Contact/>
      </div>
      <div className='flex justify-end'>
        <div  className=' w-[1000px]'>
                <div className=' absolute flex justify-center space-x-2  w-[1000px] mt-10 '>
                    <a href='https://mail.google.com/mail/u/0/#inbox?compose=new' target='_blank'>
                      <img src="Email-icon.svg" alt="Email" className='w-[15px] h-[15px] ml-[150px]'></img>
                    </a>
                    <a href='https://www.linkedin.com/in/khadija-messah-09a171152/' target='_blank'>
                       <img src="linkedin-icon.svg" alt="linkedin" className='w-[15px] h-[15px]'></img>
                    </a>
                    <a href='https://github.com/dujamess' target='_blank'>
                      <img src="Github-icon.svg" alt="Github" className='w-[15px] h-[15px]'></img>
                    </a>
                </div>
            <img src="design-background.svg" alt='design-background '/>
        </div>
      </div>
    </div>
  </StrictMode>,
)
