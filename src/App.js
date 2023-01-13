import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Contact, About, NoMath } from './pages';
import { BuySubscription, SubscriptionSection } from './challenges';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/buy-subscription' element={<BuySubscription />} />
        <Route path='/subscription-section' element={<SubscriptionSection />} />
        <Route path='*' element={<NoMath />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
