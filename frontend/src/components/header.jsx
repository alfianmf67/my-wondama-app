import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homestay from '../pages/registrasi-homestay'
import './index.css'

function Header() {
    return(
        <>
        <header id='home' className=" bg-no-repeat mb-[60px]" style={{backgroundImage: 'url(/src/images/wondama-banner.png)'}}>
    <nav className="bg-transparent px-6 py-8 pt-2 pb-2  flex items-center justify-between bg-slate-200 fixed w-full z-20">
    <div className="flex items-center flex-shrink-0 text-white mr-2">
      <img src="/src/images/wondama-logo.png" alt="" className=" w-16 h-[59px]  "/>
      <span className="font-semibold text-xl">wondama</span>
    </div>
    <div className="block lg:flex  lg:items-stretch lg:justify-end lg:space-x-4 ">
      <a href="#home" className="text-white hover:text-gray-200">Beranda</a>
      <a href="#about" className="text-white hover:text-gray-200">Tentang Kami</a>
      <a className="text-white hover:text-gray-200"><link to="/homestay">registrasi</link></a>
      <a href="#layanan" className="text-white hover:text-gray-200">Layanan</a>
      <a href="#testimonial" className="text-white hover:text-gray-200"> testimoni</a>
    </div>

    
  </nav>
  <div className="hero">
  <h1 className="w-[1229px] h-[242px] text-neutral-50 text-[60px] font-bold font-['Outfit'] capitalize leading-[70px] pt-[200px] pb-[400px]">
    Nikmati perjalananmu ke Teluk wondama dengan wondama tourism
    </h1>
  <div className="w-[1229px] h-[242px] text-neutral-50 text-[30px] text-4xl font-medium font-['Outfit'] mt-[300px] leading-[100px]">
  Temukan  destinasi wisata dan homestay di Wondama yang siap Anda kunjungi
    </div>
    
  <a href="#" className="bg-yellow-600 text-white font-semibold px-8 py-5 rounded-[30px] border-1 border-yellow-400 hover:bg-yellow-200 hover:text-white inline-block mt-[550px] mb-[40px]">
      Download app
    </a>
  </div>
  </header>
        <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Homestay />} />
         
        </Routes>
      </BrowserRouter>
        </>
    )
}

export default Header