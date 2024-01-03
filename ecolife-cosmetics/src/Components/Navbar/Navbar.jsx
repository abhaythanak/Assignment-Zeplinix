import { useState } from "react"

export default function Navbar() {
    const [toggle, setToggle] = useState(false)

    return(
        <>
        <div className="md:w-3/4 p-[10px] md:p-1 flex justify-between items-center shadow-lg  bg-white text-black font-semibold ">
            <h1 className="text-3xl ml-3 font-serif h1-with-line cursor-pointer hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">Ecolife</h1>
            <div className="nav-items hidden md:flex  lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow ">
                <ul className="flex justify-center py-10  lg:flex lg:items-stretch lg:justify-end ml-auto gap-3  ">
                    <li className="px-2 menuItem cursor-pointer hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out h1-with-line"><h3>Home</h3></li>
                    <li className="px-2 menuItem cursor-pointer hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out h1-with-line"><h3>Beauty & Heak</h3></li>
                    <li  className="px-2 menuItem cursor-pointer hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out h1-with-line"><h3>Health Care</h3></li>
                    <li  className="px-2 menuItem cursor-pointer hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out h1-with-line"><h3>Prices Drop</h3></li>
                    <li  className="px-2 menuItem cursor-pointer hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out h1-with-line"><h3>Contact US</h3></li>
                </ul>
            </div>
            <div className="flex justify-end py-10  lg:flex lg:items-stretch lg:justify-end ml-auto gap-5 mx-20 ">
                   <button className="px-2 menuItem cursor-pointer hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out ml-20">🔍</button> 
                   <span className="px-2 menuItem cursor-pointer hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out h1-with-line">🛒 $0.00</span>
            </div>

        <div className="flex flex-col  items-end">
      {!toggle?  <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={()=>setToggle(!toggle)}
        viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
         className="w-6 h-6 cursor-pointer md:hidden">
         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
         </svg>:<svg onClick={()=>setToggle(!toggle)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 cursor-pointer md:hidden h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
       </svg>
      }

      {toggle?
            <ul className="md:hidden absolute flex mt-8 flex-col  bg-gray-900 text-white p-2 rounded-sm">
          <li className="menuItem p-3 hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
          <h3 to="/">Home</h3>
          </li>
          <li className="menuItem  p-3 hover:scale-110">
          <h3 to="/about">About</h3>
          </li>
          <li className="menuItem p-3 hover:scale-110">
          <h3 to="/contact">ContactUs</h3>
          </li>
          <li className="menuItem p-3 hover:scale-110">
          </li>
        </ul>:null}
        </div>
        </div>
        </>
    )
}
