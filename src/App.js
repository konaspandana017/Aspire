import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CareerList from './components/CareerList';
import CareerDetail from './components/CareerDetail';
import SessionCart from './components/SessionCart';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<CareerList />} />
              <Route path="/career/:id" element={<CareerDetail />} />
              <Route path="/sessions" element={<SessionCart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
