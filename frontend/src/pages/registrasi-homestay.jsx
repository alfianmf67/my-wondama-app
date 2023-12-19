import './index.css'

function Homestay() {

  return (
    <>
      <div className=" bg-no-repeat" style={{backgroundImage: 'url(/src/images/regis-bg.png)'}}>
        <nav className="bg-transparent px-6 py-8 pt-9 pb-8  flex items-center justify-between">
          <div className="flex items-center flex-shrink-0 text-white mr-2">
            <img src="/src/images/wondama_logo.png" alt="" className=" w-16 h-[59px]  "/>
            <span className="font-semibold text-xl">wondama</span>
          </div>
          <div className="block lg:flex lg:items-stretch lg:justify-end lg:space-x-4">
            <a href="#" className="text-white hover:text-gray-200">trasportasi</a>
            <a href="#" className="text-white hover:text-gray-200">homestay</a>
            <a href="#" className="text-white hover:text-gray-200">wisata</a>
          </div>
        </nav>
      
        <div className="hero text-center">
          <h1 className=" text-neutral-50 text-[64px] font-bold font-sans m-12">
            Registrasi Mitra Homestay
          </h1>
        </div>
      
        <div className="rounded-t-[100px] overflow-hidden shadow-lg bg-white pb-[10px]">
          <div className="text-[44px] text-center font-bold m-6">Lengkapi Formulir Berikut :</div>
            <form className="m-16">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-nama-lengkap-pendaftar">
                    Nama Lengkap Pendaftar
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-nama-lengkap-pendaftar" type="text" placeholder=""/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-nama-homestay">
                    Nama Homestay
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-nama-homestay" type="text" placeholder=""/>
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
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-no-imb">
                    No. IMB (izin mendirikan bangunan)
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-no-imb" type="text" placeholder=""/>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                    Email
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder=""/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-npwp-homestay">
                    No. NPWP Homestay
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-npwp-homestay" type="number" placeholder=""/>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-no-hp-homestay">
                    No. HP
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-no-hp-homestay" type="tel" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}" placeholder=""/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email-homestay">
                    Email Homestay
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email-homestay" type="email" placeholder=""/>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-ttl-homestay">
                    Tanggal Lahir
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-ttl-homestay" type="date" placeholder=""/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-kode-pos-homestay">
                    Kode Pos
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-kode-pos-homestay" type="number" placeholder=""/>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-nama-bank-homestay">
                    Nama Bank
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-nama-bank-homestay" type="text" placeholder=""/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-alamat-homestay">
                    Alamat Homestay
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-alamat-homestay" type="text" placeholder=""/>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-no-rekening-homestay">
                    No. Rekening
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-no-rekening-hometstay" type="number" placeholder=""/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-tarif-pajak-homestay">
                    Tarif Pajak
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-tarif-pajak-homestay" type="text" placeholder="Rp"/>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-60">
                  <input className="appearance-none block w-full text-white bg-[#FFB23F] rounded-lg py-3 font-bold hover:bg-[#F6DBB2]" id="grid-registrasi-homestay" type="submit" value="Registrasi"/>
                </div> 
              </div>
              
            </form>
        </div>
      </div>
    </>
  )
}

export default Homestay
