import { Link } from 'react-router-dom'
import './index.css'

export default function Register() {
  return (
    <>
      <div className="flex flex-wrap w-full">
            <div className="w-1/2 shadow-2xl">
                <img className="hidden object-cover w-full h-screen md:block" src="src/images/component 3.png"/>
            </div>
    <div className="flex flex-col w-full md:w-1/2 bg-slate-200">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
            <a href="#" className="p-4 text-xl font-bold text-white bg-black">
               Wondama Tourism
            </a>
        </div>
        <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <p className="text-3xl text-center">
                Welcome.
            </p>
            <form className="flex flex-col pt-3 md:pt-8">
                
    <div className=" relative ">
        <label htmlFor="name-with-label" className="text-gray-700">
            Email
        </label>
        <input type="text" id="name-with-label" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Your name"/>
        </div>

                    
    <div className=" relative ">
        <label htmlFor="name-with-label" className="text-gray-700">
            Username
        </label>
        <input type="text" id="name-with-label" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Your name"/>
        </div>

        <div className=" relative ">
        <label htmlFor="with-indications" className="text-gray-700">
            Password
            <span className="text-red-500 required-dot">
                *
            </span>
        </label>
        <input type="text" id="with-indications" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="passwor" placeholder="Password"/>
        </div><br />

                        <button type="submit" className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-yellow-400 shadow-md hover:text-black hover:bg-yellow-200 focus:outline-none focus:ring-2">
                            <span className="w-full">
                                <Link to="/">submit</Link>
                            </span>
                        </button>
                    </form>
                   
                </div>
            </div>
        </div>
    </>
  )
}
