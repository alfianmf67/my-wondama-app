
import './index.css'


function About() {
    return(
      
     
      <>

        <h1 id='about' className="judul text-5xl text-center font-bold ">Tentang Kami</h1>
        <div className="hero justify-start">
  <div className="hero-content flex-start md:flex-row-reverse">
    <img src="/src/images/wondama-about-1.png" className="max-w-lg mr-[20px] rounded-md mt-20 z-0" />

    <div className='ml-[150px]'>
      <h1 className="text-5xl font-bold mb-2">Wisata Alam</h1>
      <p className="w-[500px]">Kabupaten Teluk Wondama sangat potensial menjadi tujuan wisata. Banyak kegiatan yang dapat dilakukan di kawasan ini, mulai dari menikmati keindahan pulau-pulau dengan pantainya, menikmati keindahan alam bawah laut yang menakjubkan, mengamati satwa (seperti: ikan paus, lumba-lumba, burung, dan lain-lain), berselancar, memancing, dan menikmati sumber air panas. </p>
      <button className="btn mt-7 bg-yellow-600 text-white font-semibold  border-yellow-400 hover:bg-yellow-200 hover:text-black inline-block">Selengkapnya</button>
    </div>
  </div>
</div>
    <img src="/src/images/wondama-about-2.png" className="max-w-lg mb-[70px] rounded-md float-left ml-[160px]" />

        <span className="hero justify-start">
  <span className="hero-content flex-start md:flex-row">
    <img src="/src/images/wisata-religi-1.png" className="max-w-lg ml-[150px] rounded-2xl mt-20 z-0" />

    <span className=' ml-9'>
      <h1 className="text-5xl font-bold mb-2 justify-start ">Wisata Religi</h1>
      <p className="w-[500px] ">Objek wisata yang menjadi destinasi wisata religi di kapung yende pulau roon.
Kampung yende pulau roon dapat ditempuh dengan menggunakan speeadboat selama 1 jam. kapung ini adalah ibu kota distrik roon. sejak tahun 1884 Zendeling mulai melaksanakan misi penginjilan di yende.</p>
      <button className="btn mt-7 bg-yellow-600 text-white font-semibold  border-yellow-400 hover:bg-yellow-200 hover:text-black inline-block">Selengkapnya</button>
    </span>
  </span>
</span>
    <img src="/src/images/wisata-religi-2.png" className="max-w-lg mb-[70px] rounded-md float-right mr-[160px]" />

    <div className="hero justify-start">
  <div className="hero-content flex-start md:flex-row-reverse">
    <img src="/src/images/wisata-budaya-1.png" className="max-w-md ml-[30px] rounded-md mt-20 z-0" />

    <div className='ml-[150px]'>
      <h1 className="text-5xl font-bold mb-2">Wisata Budaya</h1>
      <p className="w-[500px]">Kabupaten Teluk Wondama sangat potensial menjadi tujuan wisata. Banyak kegiatan yang dapat dilakukan di kawasan ini, mulai dari menikmati keindahan pulau-pulau dengan pantainya, menikmati keindahan alam bawah laut yang menakjubkan, mengamati satwa (seperti: ikan paus, lumba-lumba, burung, dan lain-lain), berselancar, memancing, dan menikmati sumber air panas. </p>
      <button className="btn mt-7 bg-yellow-600 text-white font-semibold  border-yellow-400 hover:bg-yellow-200 hover:text-black inline-block">Selengkapnya</button>
    <img src="/src/images/wisata-budaya-2.png" className="max-w-lg rounded-md  " />
    </div>
  </div>
</div>
        </>
        
    )
}
export default About