import { Link } from 'react-router-dom'
import './index.css'



function Layanan() {
  
 
    return (
        <>
        <section >
        <p  className="text-center font-bold text-4xl mt-10 mb-19" id='layanan'>Layanan Kami</p>
     <div  className="grid grid-cols-3 gap-3 m-[150px]">
  <div className="">
    <img src="/src/images/wondama-about-1.png" alt="" className='w-[96%] rounded-2xl' />
    <h2 className="font-bold text-center text-2xl mt-2">Paket Wisata</h2>
  </div>
  <div className=''>
        <img src="/src/images/layanan-kami-1.png" alt="" />
        <h2 className="font-bold text-center text-2xl mt-2">Transportasi</h2>
  </div>
  <div className=''>
  <img src="/src/images/layanan-kami-2.png" alt="" />
  <h2 className="font-bold text-center text-2xl mt-2">Home Stay</h2>
  </div>
</div>
<div className="flex flex-row place-content-center">
  <img src="/src/images/market-1.png" alt="" className='w-[30%] mr-20' />
  <div>
    <p className='ml-20 w-[300px] text-2xl font-bold'>jangan tunggu lama ayo bermitra dengan kami! </p>
   <button className="btn mt-7 bg-yellow-600 text-white font-semibold  border-yellow-400 hover:bg-yellow-200 hover:text-black inline-block ml-20"><Link to="/mitra">register</Link></button>
  </div>
</div>
</section>

        </>
    )
}

export default Layanan