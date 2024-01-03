export default function Hero() {
    return (
        <div className='w-full h-screen'>
          <img
            className='top-0 left-0 w-full h-screen object-cover'
            src='https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5378.jpg?w=1380&t=st=1704299856~exp=1704300456~hmac=489c089f3666c70550f62b5f19f0884f2f427f70fd88450e9d9c1ae67201f483'
            alt='/'
          />
          <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
          <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4 flex items-center justify-center flex-col'>
              <p>ICONIC MAKEUP COLLECTIONS</p>
              <h1 className='font-bold text-4xl md:text-6xl drop-shadow-2xl'>
                Makeup Which Enhance Your Natural Beauty
              </h1>
              <button className='bg-white text-black mt-10 p-2 rounded-2xl font-semibold font-sans transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl'>SHOP NOW</button>
            </div>
          </div>
        </div>
      );
}
