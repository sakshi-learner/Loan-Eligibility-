import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
const Navbar = () => {

    const[showMsj , setShowMsj] = useState(false); 

    let onMsj = (e)=>{
       e.preventDefault();
        
        if(showMsj == true){
            setShowMsj(false);
        }else{
            setShowMsj(true);
        }
    };

  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo"><AssuredWorkloadIcon/> PreQualify+</div>

      <ul className="navbar-links">
        <li><a href="/" onClick={onMsj}>Home</a></li>
        <li><a href="#form">Check Eligibility</a></li>
      </ul>
    </nav>

    <br></br>
    <br></br>
   
    {showMsj && (  <p style={{ 
    color: '#2e8b57', 
    fontSize: '20px', 
    fontWeight: 'bold', 
    backgroundColor: '#f0f8ff', 
    padding: '10px', 
    borderRadius: '8px',
    marginTop: '10px',
    textAlign: 'center'
  }}>
    Welcome! to <span style={{ color: '#1e90ff' }}>PreQualify+</span>, Know before you go
  </p>
  )}

    </>
  );
};

export default Navbar;
