
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import View from "./Components/View"
import Update from "./Components/Update"
import Adduser from "./Components/Adduser"
function App() {
 

  return (
<div>
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/adduser" element={<Adduser/>} />
    <Route path="/view/:id" element={<View/>} />
    <Route path="/update/:id" element={<Update/>} />
   </Routes>
  </BrowserRouter>
</div>
      
     
    
  )
}

export default App
