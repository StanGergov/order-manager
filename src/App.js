import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Clients from './Components/Clients/Clients';
import Orders from './Components/Orders/Orders';
import NewOrder from './Components/NewOrder/NewOrder';
import NewClient from './Components/NewClient/NewClient';
import NewProduct from './Components/NewProduct/NewProduct';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/clients" element={<Clients />}/>
        <Route path="/orders" element={<Orders />}/>
        <Route path="/new-order" element={<NewOrder />}/>
        <Route path="/new-client" element={<NewClient />}/>
        <Route path="/new-product" element={<NewProduct />}/>     
      </Routes>
    </div>
  );
}

export default App;
