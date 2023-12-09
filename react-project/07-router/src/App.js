import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import NotFoundPage from "./pages/NotFoundPage";
import PhotosPage from "./pages/PhotosPage";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* BrowserRouter가 Routes, Route를 감싸야 함 */}
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/products" element={<ProductsPage />}></Route>
            <Route path="/products/:id" element={<ProductDetail />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
            <Route path="/photos/:id" element={<PhotosPage />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
