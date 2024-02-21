import React from 'react'


const Navbar = () => {
  
  return (
    <div className='navbar'>
       <img src="/Images/niki.png" alt="Logo" className='logo'/>
       <ul>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Location</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
       </ul>
       <button>Login</button>
     
    </div>
  )
}

export default Navbar
