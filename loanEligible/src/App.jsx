import React from 'react';
import LoanForm from './LoanForm.jsx';
import './App.css';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <LoanForm />
      <Footer/>
    </div>
  );
}

export default App;
