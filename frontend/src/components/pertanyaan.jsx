import './index.css'

function Tanya() {
    return(
        <>

      <p id='pertanyaan' className='text-center font-bold pt-8 text-4xl'>Kirim kami pertanyaan</p>
    <main className="flex w-[70%] bg-[#3C80B2] mt-10 mb-10 rounded-[40px] ml-[200px]">
        <div className="flex-1 hidden lg:block ">
            <img src="/src/images/pertanyaan.png" className="w-full h-screen object-cover rounde-[60px]" />
        </div>
        <div className="py-2 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
            <div className="max-w-lg flex-1 mx-auto px-2 text-gray-600">
               
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="space-y-3 mt-3 lg:pb-3 "
                >
                    <div className='text-white'>
                        <label className="font-medium">
                            Full name
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-white bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                        />
                    </div>
                    <div className='text-white'>
                        <label className="font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full mt-2 px-3 py-2 text-white bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                        />
                    </div>
                    <div className='text-white'> 
                        <label className="font-medium">
                            Phone number
                        </label>
                        <div className="relative mt-2">
                            
                            <input
                                type="number"
                                placeholder="+1 (555) 000-000"
                                required
                                className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                    </div>
                    <div className='text-white'>
                        <label className="font-medium">
                            Pertanyaan
                        </label>
                        <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
                    </div>
                    <button
                        className="w-full px-4 py-2  bg-yellow-600 text-white font-semibold  border-yellow-400 hover:bg-yellow-200 hover:text-black inline-block rounded-lg duration-150"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </main>
      </>
    )
}

export default Tanya