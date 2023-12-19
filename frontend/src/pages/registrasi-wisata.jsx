import './index.css'

function WisataO() {

  return (
    <>
      <div className=" bg-no-repeat" style={{backgroundImage: 'url(/src/images/regis-bg.png)'}}>
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
            <a href="#" className="text-white hover:text-gray-200">Bantuan</a>
          </div>
        </nav>
      
        <div className="hero text-center">
          <h1 className=" text-neutral-50 text-[64px] font-bold font-sans m-12">
            Registrasi Mitra Wisata
          </h1>
        </div>
      
        <div className="rounded-t-[100px] overflow-hidden shadow-lg bg-white pb-[10px]">
          <div className="text-[44px] text-center font-bold m-6">Lengkapi Formulir Berikut :</div>
            <form className="m-16">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-nama-lengkap-wisata">
                    Nama Lengkap
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-nama-lengkap-wisata" type="text" placeholder=""/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-nama-wisata">
                    Nama Tempat Wisata
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-nama-wisata" type="text" placeholder=""/>
                </div>
              </div> 

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-no-ktp-wisata">
                    No. KTP
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-no-ktp-wisata" type="number" placeholder=""/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-no-izin-wisata">
                    No. Izin Tempat Wisata
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-no-izin-wisata" type="number" placeholder=""/>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email-wisata">
                    Email
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email-wisata" type="email" placeholder=""/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-npwp-wisata">
                    No. NPWP Tempat Wisata
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-npwp-wisata" type="number" placeholder=""/>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-no-hp-wisata">
                    No. HP
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-no-hp-wisata" type="tel" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}" placeholder=""/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email-wisata">
                    Email Tempat Wisata
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email-wisata" type="email" placeholder=""/>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-ttl-wisata">
                    Tanggal Lahir
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-ttl-wisata" type="date" placeholder=""/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-kode-pos-wisata">
                    Kode Pos
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-kode-pos-wisata" type="number" placeholder=""/>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-nama-bank-wisata">
                    Nama Bank
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-nama-bank-wisata" type="text" placeholder=""/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-alamat-wisata">
                    Alamat Tempat Wisata
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-alamat-wisata" type="text" placeholder=""/>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-no-rekening-wisata">
                    No. Rekening
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-no-rekening-wisata" type="number" placeholder=""/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-tarif-pajak-wisata">
                    Tarif Pajak
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-tarif-pajak-wisata" type="text" placeholder="Rp"/>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-60">
                  <input className="appearance-none block w-full text-white bg-[#FFB23F] rounded-lg py-3 font-bold hover:bg-[#F6DBB2]" id="grid-registrasi-wisata" type="submit" value="Registrasi"/>
                </div> 
              </div>
              
            </form>
        </div>
      </div>
    </>
  )
}

export default WisataO
