import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home'
import Navbar from './components/Navbar'
import SingleBlog from './components/SingleBlog'
import CreateBlog from './components/CreateBlog'
import About from './components/About'
import Contact from './components/Contact'
import UpdateBlog from './components/UpdateBlog'

function App() {
    return (
    <>
      <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/read/:id' element={<SingleBlog/>}/>
        <Route path='/create' element={<CreateBlog/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/update/:id' element={<UpdateBlog/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
