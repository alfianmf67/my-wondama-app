import { Link } from 'react-router-dom'
import './index.css'

function Mitra() {

  return (
    <>
    <header className=" bg-no-repeat mb-[60px]" style={{backgroundImage: 'url(/src/images/regis-bg.png)'}}>
    <nav className="bg-transparent px-6 py-8 pt-9 pb-8  flex items-center justify-between">
    <div className="flex items-center flex-shrink-0 text-white mr-2">
      <img src="/src/images/wondama_logo.png" alt="" className=" w-16 h-[59px]  "/>
      <span className="font-semibold text-xl">wondama</span>
    </div>
    <div className="block lg:flex lg:items-stretch lg:justify-end lg:space-x-4">
      <a href="#" className="text-white hover:text-gray-200">Beranda</a>
      <a href="#" className="text-white hover:text-gray-200">Tentang Kami</a>
      <a href="#" className="text-white hover:text-gray-200">Registrasi</a>
      <a href="#" className="text-white hover:text-gray-200">Layanan</a>
      <a href="#" className="text-white hover:text-gray-200"> bantuan</a>
    </div>
  </nav>
  <div className="hero">
  <h1 className="w-[1229px] h-[242px] text-neutral-50 text-[50px] text-center font-bold font-sans leading-[70px] pt-[120px] pb-[250px]">
    Tertarik Untuk Gabung Jadi Mitra Kami?
    </h1>
  </div>

{/* regis mitra */}
<div className="rounded-t-[100px] overflow-hidden shadow-lg bg-white pb-[10px] flex">
  <div className="flex-1 max-w-sm pl-[100px] pt-[50px] ">
  <h5 className="text-center font-bold bg-[#3C79B1] text-white text-[30px] p-3 rounded-[30px]">Mitra Wisata</h5>
      <a href="#">
        <div className="bg-[#3C79B1] bg-opacity-30 p-10 mb-4 rounded-[50px]">
        <img  className="" src="/src/images/mitra_wisata.png" alt="" />
        </div>
      </a>
      <div className="p-5">
          <a href="#" className="m-[50px] p-4 text-[20px] font-medium text-center text-white bg-[#FFB23F] rounded-lg hover:bg-[#F6DBB2] ">
             <Link to="/wisata">registrasi</Link>
          </a>
      </div>
  </div>

  <div className="flex-1 max-w-sm pl-[100px] pt-[50px] ">
  <h5 className="text-center font-bold bg-[#3C79B1] text-white text-[30px] p-3 rounded-[30px]">Mitra Transportasi</h5>
      <a href="#">
        <div className="bg-[#3C79B1] bg-opacity-30 p-10 mb-4 rounded-[50px]">
        <img className="" src="/src/images/mitra_transport.png" alt="" />
        </div>
      </a>
      <div className="p-5">
          <a href="#" className="m-[50px] p-4 text-[20px] font-medium text-center text-white bg-[#FFB23F] rounded-lg hover:bg-[#F6DBB2] ">
             <Link to="/transportasi">registrasi</Link>
          </a>
      </div>
  </div>

  <div className="flex-1 max-w-sm pl-[100px] pt-[50px] ">
  <h5 className="text-center font-bold bg-[#3C79B1] text-white text-[30px] p-3 rounded-[30px]">Mitra Penginapan</h5>
      <a href="#">
        <div className="bg-[#3C79B1] bg-opacity-30 p-10 mb-4 rounded-[50px]">
        <img className="w-[180px]" src="/src/images/mitra_penginapan.png" alt="" />
        </div>
      </a>
      <div className="p-5">
          <a href="#" className="m-[60px] p-4 text-[20px] font-medium text-center text-white bg-[#FFB23F] rounded-lg hover:bg-[#F6DBB2] ">
              <Link to="/homest">registrasi</Link>
          </a>
      </div>
  </div>
</div>
  </header>
    </>
  )
}

export default Mitra
