export default function Deals() {
    return(
        <div className="flex items-center justify-center gap-5 flex-col md:flex-row">
        <div className="border-4 border-solid border-gold p-1 flex ">
            <div className="relative ">
               <button className="absolute bg-amber-400 text-white font-bold p-[2px] rounded">New</button>
               <img className="h-64 object-cover rounded" 
               src="https://images.unsplash.com/photo-1619708662321-71b89443c3ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
               alt=""
               />
            </div>
            <div className="ml-28 ">
                <p>STUDIO DESIGN</p>
                <h1 className=" font-bold">Originals Kaval Windbreaker Winter...</h1>
                <h2>⭐⭐⭐⭐⭐</h2>
                <div className="m-3 flex">
                 <p className="line-through">$50.00</p>
                 <p className="text-red-600 font-semibold ml-1">$21.22</p>
                 <p className="bg-red-600 rounded-lg ml-2 p-1 text-white">10%</p>
              </div>
                <p>Avalibility:<span className="text-red-500 ml-1">200 in stocks</span></p>
                <p>Hurry up Offer<br/>Ends in <span className="mx-1">1176</span>: <span  className="mx-1">7</span>:<span  className="mx-1">40</span>:<span  className="mx-1">12</span> </p>
            </div>
               
        </div>
        <div className="border-4 border-solid border-gold p-1 flex ">
            <div className="relative ">
               <button className="absolute bg-amber-400 text-white font-bold p-[2px] rounded">New</button>
               <img className="h-64 object-cover rounded" 
               src="https://images.unsplash.com/photo-1571307659018-8ac7d9bdd49b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
               alt=""
               />
            </div>
            <div className="ml-28">
                <p>STUDIO DESIGN</p>
                <h1 className=" font-bold my-1">Originals Kaval Windbreaker Winter...</h1>
                <h2>⭐⭐⭐⭐⭐</h2>
                <div className="m-3 flex ">
                 <p className="line-through">$50.00</p>
                 <p className="text-red-600 font-semibold ml-1 ">$21.22</p>
                 <p className="bg-red-600 rounded-lg ml-2 p-1 text-white ">10%</p>
              </div>
                <p>Avalibility:<span className="text-red-500 ml-1 my-1">200 in stocks</span></p>
                <p>Hurry up Offer<br/>Ends in <span className="mx-1 my-1">1176</span>: <span  className="mx-1">7</span>:<span  className="mx-1">40</span>:<span  className="mx-1">12</span> </p>
            </div>
               
        </div>
        </div>
    )
}
