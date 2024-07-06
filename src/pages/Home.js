import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
  return  <div className="home"> 
  <div className="headerContainer"> 
    <h1> Romanian Steam </h1>
    <p> Our games are a steal </p>
    <Link to="/menu">
    <button> Comanda Acuma</button>
    </Link>
      </div>
    
    </div>;
}

export default Home
