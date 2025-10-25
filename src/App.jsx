
import './App.css'
import Home from './components/Home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Projects from './components/Projects/Projects'
import About from './components/AboutMe/AboutMe'
import { Link } from 'react-router-dom'
import Error from './components/Error/Error'
function App() {

  return (
    <div className="flex flex-col items-center">
      <BrowserRouter>
        <div className='h-[46px] w-[747px] border-[0.5px] border-move1 rounded-[10px] justify-end  items-center flex space-x-24 pr-8'>
                <img className=" w-10 mr-80"  src="logo.gif" alt="logo"></img>
                <Link to="/" className="font-inter  text-hlibi text-[12px]">Home</Link>
                <Link to="/Projects" className="font-inter  text-hlibi text-[12px]">Projects</Link>
                <Link to="/About-me" className="font-inter  text-hlibi text-[12px]">about-me</Link>
        </div>
        <div className="">
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/About-me" element={<About/>}/>
          <Route path="*" element={<div>404</div>}/>
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
