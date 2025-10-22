
import './App.css'
import Home from './components/Home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {

  return (
    <div className="flex flex-col items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
