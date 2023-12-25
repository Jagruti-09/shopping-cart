import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import CartPage from './components/Cart';
import Details from './components/Details';
import Checkout from './components/Checkout';


function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <div className='App'>
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<CartPage />}/>
        <Route path="/product/:id" element={<Details/>} />
        <Route path='/checkout' element={<Checkout />}/>
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
