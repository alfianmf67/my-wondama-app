

import About from '../components/about'
import Layanan from '../components/layanan.jsx'
import Tanya from '../components/pertanyaan.jsx'
import Footer from '../components/footer.jsx'
import Testimonials from '../components/testimonial.jsx'

import './index.css'
import Navbar from '../components/Navbar.jsx'



function LandingPage() {
 

  return (
    <>
       <header id='home' className=" bg-no-repeat mb-[60px]" style={{backgroundImage: 'url(/src/images/wondama-banner.png)'}}>
   <Navbar/>
  <div className="hero">
  <h1 className="w-[1229px] h-[242px] text-neutral-50 text-[60px] font-bold font-['Outfit'] capitalize leading-[70px] pt-[200px] pb-[400px]">
    Nikmati perjalananmu ke Teluk wondama dengan wondama tourism
    </h1>
  <div className="w-[1229px] h-[242px] text-neutral-50 text-[30px] text-4xl font-medium font-['Outfit'] mt-[300px] leading-[100px]">
  Temukan  destinasi wisata dan homestay di Wondama yang siap Anda kunjungi
    </div>
    
  <a href="#" className="bg-yellow-600 text-white font-semibold px-8 py-5 rounded-[30px] border-1 border-yellow-400 hover:bg-yellow-200 hover:text-white inline-block mt-[550px] mb-[40px]">
      Download app
    </a><br />
  </div>
  
  </header>
   
  <About />
  <Layanan/>
  <Tanya/>
  <Testimonials/>
  <Footer/>
  </>
  )
}


export default LandingPage;