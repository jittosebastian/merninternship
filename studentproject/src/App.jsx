import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import View from './components/View'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>welcome to React  Project</h1>
   <Navbar/>
   <Routes>

   <Route path='/'element={<View/>}></Route>
   <Route path='/add'element={<Add/>}></Route>
   </Routes>
    </>
  )
}

export default App
