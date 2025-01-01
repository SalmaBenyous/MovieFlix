// import React, { useState } from 'react'
import "./navbar.css"
import { Link } from "react-router-dom"
function Navbar({word,setQuery}) {
    // const [search,setSearch]=useState(query);
  return (
    <header>
        <nav>
            {/* <img className='logo'  src='./logo.png' alt="logo"/> */}
            <Link className="link" to={"/"} style={{color:"#fff"}}>MovieVault 🎥</Link>
            <input autocomplete="off" placeholder='Search...' type='search' value={word} onChange={(e)=>setQuery(e.target.value)} id='search'/>
        </nav>
    </header>
  )
}

export default Navbar