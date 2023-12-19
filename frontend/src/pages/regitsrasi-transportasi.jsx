import './index.css'

function Transportasi() {

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
            Registrasi Mitra Transportasi
          </h1>
        </div>
      
        <div className="rounded-t-[100px] overflow-hidden shadow-lg bg-white pb-[10px]">
          <div className="text-[44px] text-center font-bold m-6">Lengkapi Formulir Berikut :</div>
            <form className="m-16">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-nama-lengkap-transportasi">
                    Nama Lengkap Pendaftar
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-nama-lengkap-transportasi" type="text" placeholder=""/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-jenis-kendaraan">
                    Jenis Kendaraan
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-jenis-kendaraan" type="text" placeholder=""/>
                </div>
              </div> 

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-no-ktp-homestay">
                    No. KTP
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-no-ktp-homestay" type="number" placeholder=""/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-surat-izin">
                    Surat Izin Angkutan Penyebrangan
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-surat-izin" type="file"/>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email-transportasi">
                    Email
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email-transportasi" type="email" placeholder=""/>
                </div>
                <div className="w-60 ml-44 mt-6">
                  <input className="appearance-none block w-full text-white bg-[#FFB23F] rounded-lg py-3 font-bold hover:bg-[#F6DBB2]" id="grid-registrasi-transportasi" type="submit" value="Registrasi"/>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-no-hp-transportasi">
                    No. HP
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-no-hp-transportasi" type="tel" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}" placeholder=""/>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-ttl-transportasi">
                    Tanggal Lahir
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-ttl-transportasi" type="date" placeholder=""/>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-nama-bank-transportasi">
                    Nama Bank
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-nama-bank-transportasi" type="text" placeholder=""/>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-no-rekening-transportasi">
                    No. Rekening
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-no-rekening-transportasi" type="number" placeholder=""/>
                </div>
              </div>
              
            </form>
        </div>
      </div>
    </>
  )
}

export default Transportasi
