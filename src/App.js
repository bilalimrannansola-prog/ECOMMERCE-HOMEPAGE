import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Products from "./components/Products";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/footer"
      element={<Footer />} />
      <Route path="/Testimonials"
      element={<Testimonials />} />
      <Route path="/Products"
      element={<Products />} />
      </Routes>
      </BrowserRouter>
  )
}
export default App;