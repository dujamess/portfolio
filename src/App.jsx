
import './App.css'
import Home from './components/Home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Projects from './components/Projects/Projects'
import About from './components/AboutMe/AboutMe'
function App() {

  return (
    <div className="flex flex-col items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/About-me" element={<About/>}/>
          <Route path="*" element={<div>404 not found</div>}/>
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
