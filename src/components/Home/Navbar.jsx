import { useState } from 'react'
import Logo from '../../assets/logo.svg'
import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import {Link} from "react-router-dom"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex justify-around items-center border-b-2 px-6 py-4 md:p-4 text-orange-400 text-lg font-semibold '>

      <div className='flex justify-between items-center'>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      <div className='order-3 md:order-1 w-full md:w-auto flex flex-col items-center md:flex-row'>
      <nav className={`fixed top-0 right-0 h-full w-3/4 bg-white z-10 flex flex-col items-center justify-center gap-6 font-sans ${isOpen ? 'block' : 'hidden'} md:relative md:bg-transparent md:flex-row md:justify-around md:gap-6 md:block`}>
          <button className={`absolute top-10 right-10 ${isOpen ? 'block' : 'hidden'}`} onClick={() => setIsOpen(false)}>
            <FaTimes color='#FF9A62' size='30px' />
          </button>
          <ul className={`md:flex justify-around gap-6 font-sans ${isOpen ? 'block' : 'hidden'} md:block`}>
            <li className='md:mb-0 mb-8'><Link to="/tienda">Tienda</Link></li> 
            <li className='md:mb-0 mb-8'><Link to="/Outlet">Outlet</Link></li>
            <li className='md:mb-0 mb-8'><Link to="/Nosotros">Nosotros</Link></li>
          </ul>
        </nav>

        <div className='order-2 md:order-none'>
          <input type="text" placeholder='Buscar' className='block md:hidden border-2 border-orange-400 rounded-md px-2 w-40 py-1 mx-auto' />
        </div>
      </div>


      <div className='order-4 md:order-2 flex justify-center gap-4 '>
        <FaSearch className='hidden md:block' color='#FF9A62' size='20px' />
        <FaUser className='hidden md:block' color='#FF9A62' size='20px'/>
        <MdOutlineFavorite className='hidden md:block' color='#FF9A62' size='20px'/>
        <FaCartShopping color='#FF9A62' size='20px'/>
      </div>

      <button className='md:hidden order-5 ml-12' onClick={() => setIsOpen(!isOpen)}>
        <FaBars color='#FF9A62' size='20px' />
      </button>
    </div>
  )
}

export default Navbar