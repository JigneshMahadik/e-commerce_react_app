// import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Orders } from './pages/orders';
import { Cart } from './pages/cart';
import { ProductDetail } from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product-detail" element={<ProductDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
