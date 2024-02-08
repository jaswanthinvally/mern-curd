import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Createuser from "./pages/Createuser"
import Updateuser from "./pages/Updateuser"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/createuser" element={<Createuser/>} ></Route>
        <Route path="/updateuser" element={<Updateuser/>} ></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
