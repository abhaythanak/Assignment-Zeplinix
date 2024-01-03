export default function ProductAds() {
    return(
        <>
        <div className=" flex items-center justify-center flex-col md:flex-row gap-5 m-20">
            <div className="relative">
                <img className="h-64 w-96" 
                src="https://images.unsplash.com/photo-1619708689475-06b9858721e8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="" />
                <div className="absolute flex flex-col -mt-52 ml-4 gap-28">
                    <h1 className="font-bold text-white">The New<br/> Skin Care</h1>
                    <p className="font-bold text-white">SHOP NOW <span className="p-1  bg-white rounded-full text-black font-extrabold">></span></p>
                </div>
            </div>
            <div className="">
                <img className="h-64 w-[600px]" 
                src="https://images.unsplash.com/photo-1619708669267-f23a35f5ddba?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="" />
                <div className="absolute flex flex-col -mt-52 ml-4 gap-8">
                    <div className="">
                    <h1 className="font-bold text-white">Natural<br/>Facial Oils</h1>
                    <button className="mt-2 bg-white px-3 rounded-lg">New</button>
                    <p className="text-white">A SUNCARE ESSENTIALS <br/>FOR BALANCE</p>
                    </div>
                    <p className="font-bold text-white">SHOP NOW <span className="p-1  bg-white rounded-full text-black font-extrabold">></span></p>
                </div>
            </div>
            <div className="">
                <img className="h-64 w-96" 
                src="https://images.unsplash.com/photo-1605614345503-713730aa37cc?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="" />
                <div className="absolute flex flex-col -mt-52 ml-4 gap-28">
                    <h1 className="font-bold text-white">Make-Up<br/>Brushes</h1>
                    <p className="font-bold text-white">SHOP NOW <span className="p-1  bg-white rounded-full text-black font-extrabold">></span></p>
                </div>
            </div>
        </div>
        </>
    )
}
