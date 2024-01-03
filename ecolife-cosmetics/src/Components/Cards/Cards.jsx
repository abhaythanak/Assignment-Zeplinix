export default function Cards({Title, heading}) {
    return(
        <>
        <div className=" ml-16 mt-10">
          <h1 className="font-bold text-3xl ">{Title}</h1>
          <p>{heading}</p>
        </div>
        <div className=" w-full min-h-screen gap-4 flex-wrap flex justify-center items-center md:-my-48">
            <div className="relative w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                <button className="absolute bg-amber-400 text-white font-bold p-[2px] rounded">New</button>
               <img className="h-60 object-cover rounded-xl" 
               src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
               alt=""
               />
               <div className="p-2">
                   <p className="text-sm text-gray-600">Cosmetic Corner</p>
                   <h2 className="font-bold text-lg mb-2 ">Cusines Strip..</h2> 
                   <h2>⭐⭐⭐⭐⭐</h2>
              </div>
              <div className="m-2">
                 <p>$9.00</p>
              </div>
            </div>
            <div className="relative w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                <button className="absolute bg-amber-400 text-white font-bold p-[2px] rounded">New</button>
               <img className="h-60 object-cover rounded-xl " 
               src="https://www.shutterstock.com/image-photo/natural-cosmetics-skin-care-product-260nw-1514211788.jpg" 
               alt=""
               />
               <div className="p-2">
                   <p className="text-sm text-gray-600">Studio Design</p>
                   <h2 className="font-bold text-lg mb-2 ">Water/Wind Repalant..</h2> 
                   <h2>⭐⭐⭐⭐⭐</h2>
              </div>
              <div className="m-2">
                 <p>$25.00</p>
              </div>
            </div>
            <div className="relative w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                <button className="absolute bg-amber-400 text-white font-bold p-[2px] rounded">New</button>
               <img className="h-60 object-cover rounded-xl " 
               src="https://images.unsplash.com/photo-1619708669267-f23a35f5ddba?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
               alt=""
               />
               <div className="p-2">
                   <p className="text-sm text-gray-600">Graphic Corner</p>
                   <h2 className="font-bold text-lg mb-2 ">New Sport V1</h2> 
                   <h2>⭐⭐⭐⭐⭐</h2>
              </div>
              <div className="m-2">
                 <p>$19.00</p>
              </div>
            </div>
            <div className="relative w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                <button className="absolute bg-amber-400 text-white font-bold p-[2px] rounded">New</button>
               <img className="h-60 object-cover rounded-xl " 
               src="https://images.unsplash.com/photo-1612817288765-6d2b644c762e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
               alt=""
               />
               <div className="p-2">
                   <p className="text-sm text-gray-600">Ceramic Corner</p>
                   <h2 className="font-bold text-lg mb-2 ">Erixton Patrol A1</h2> 
                   <h2>⭐⭐⭐⭐⭐</h2>
              </div>
              <div className="m-2">
                 <p>$50.00</p>
              </div>
            </div>
            <div className="relative w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                <button className="absolute bg-amber-400 text-white font-bold p-[2px] rounded">New</button>
               <img className="h-60 object-cover rounded-xl" 
               src="https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
               alt=""
               />
               <div className="p-2">
                   <p className="text-sm text-gray-600">Studio Design</p>
                   <h2 className="font-bold text-lg mb-2 ">Fresh Foam Key....</h2> 
                   <h2>⭐⭐⭐⭐⭐</h2>
              </div>
              <div className="m-2 flex">
                 <p className="line-through">$90.00</p>
                 <p className="text-red-600 font-semibold ml-1">$15.22</p>
                 <p className="bg-red-600 rounded-lg ml-2 p-1">20%</p>
              </div>
            </div>
        </div>
        </>
    )
}
