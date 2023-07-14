import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./components/pages/inicio/Inicio"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/category" element={<h1>Categoria</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
