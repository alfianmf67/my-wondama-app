import { Link } from 'react-router-dom'
import './index.css'


function Navbar() {
  return (
    <>
       <nav className=" px-6 py-8 pt-2 pb-2  flex items-center justify-between bg-[#3C80B2] fixed w-full z-20">
    <div className="flex items-center flex-shrink-0 text-white mr-2">
      <img src="/src/images/wondama-logo.png" alt="" className=" w-16 h-[59px]  "/>
      <span className="font-semibold text-xl">wondama</span>
    </div>
    <div className="block lg:flex  lg:items-stretch lg:justify-end lg:space-x-4 ">
      <a href="#home" className="text-white hover:text-slate-950">Beranda</a>
      <a href="#about" className="text-white hover:text-slate-950">Tentang Kami</a>
      <a href="#layanan" className="text-white hover:text-slate-950">Layanan</a>
      <a  className="text-white hover:text-slate-950"><Link to="/login">dashboard</Link></a>
      <a href="#testimonial" className="text-white hover:text-slate-950"> testimoni</a>
    </div>

    
  </nav>
    </>
  )
}

export default Navbar
