
import './App.css'
import Home from './components/Home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Projects from './components/Projects/Projects'
import About from './components/AboutMe/AboutMe'
import { Link } from 'react-router-dom'
import Error from './components/Error/Error'
function App() {

  return (
    <div className="flex flex-col items-center  w-full h-full ">
      <BrowserRouter>
        <div className='w-[52%] border-[0.05vw] border-move1 rounded-[1vw] flex justify-between p-[.5%]'>
                <img className=" w-[4%] ml-[3%] mt-[0.2%]"  src="/logo.gif" alt="logo"></img>
                <Link to="/" className="font-inter  text-hlibi text-[0.8vw] mt-[0.8%] ml-[35%]">Home</Link>
                <Link to="/Projects" className="font-inter  text-hlibi text-[0.8vw] mt-[0.8%]">Projects</Link>
                <Link to="/About-me" className="font-inter  text-hlibi text-[0.8vw] mt-[0.8%] mr-[3%] ">about-me</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/home" element={<Home/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/About-me" element={<About/>}/>
          <Route path="*" element={<Error/>}/> */}
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
