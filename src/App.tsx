import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header.tsx";
import HomePage from "./views/HomePage.tsx";
import CartPage from "./views/CartPage.tsx";
import ProductListPage from "./views/ProductListPage.tsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
