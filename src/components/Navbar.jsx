import React from 'react'
import Logo from '../Assests/bardo.png'
function Navbar() {
  return (
    <nav className=' flex justify-between text-white font-sans font-semibold'>
      <a href="/"><img src={Logo} alt="Bardo-Logo" /></a>
      <ul className='sm:flex space-x-5 hidden'>
        <li>About</li>
        <li>Blog</li>
        <li>Service</li>
      </ul>
    </nav>
  )
}

export default Navbar
