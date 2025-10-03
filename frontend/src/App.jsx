import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home'
import Navbar from './components/Navbar'
import SingleBlog from './components/SingleBlog'

function App() {
    return (
    <>
      <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/read/:id' element={<SingleBlog/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
