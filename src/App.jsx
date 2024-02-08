import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Adduser from './pages/adduser'
import Updateuser from './pages/updateuser'
function App() {
  

  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/adduser' element={<Adduser/>} ></Route>
          <Route path='/updateuser' element={<Updateuser/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>

    </>
  )
}

export default App
