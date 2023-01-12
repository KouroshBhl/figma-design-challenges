import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Contact, About, NoMath } from './pages';
import { BuySubscription } from './challenges';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/buy-subscription' element={<BuySubscription />} />
        <Route path='*' element={<NoMath />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
