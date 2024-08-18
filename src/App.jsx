import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import { ToastContainer } from "react-toastify"

const App = () => (
  <>
    <Routes>
      <Route index element={<Home />}/>
      <Route path="/products" element={<Product />}/>
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
    <ToastContainer/>
  </>
)


export default App
