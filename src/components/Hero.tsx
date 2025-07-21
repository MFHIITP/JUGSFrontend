import heroImg from './../assets/miles.png'
const Hero = () => {
  return (
    <div className="maxWidthForSections pb-4 min-h-screen">
      <div className="md:grid grid-cols-2 flex flex-wrap-reverse gap-5 h-full pt-[64px]">
        {/* hero text */}
        <div className="text-white  flex items-center justify-center ">
          <div className="flex flex-col sm:gap-4 gap-2">
            <p className='text-[#DE0438] font-bold'>Jadavpur University Gaming Society</p>

            <p className='sm:text-5xl text-3xl font-semibold'>JUGS Welcomes You to the Journey of 
              </p>
              <p className='text-[#DE0438] sm:text-5xl text-3xl font-bold'>
              The E-SPORTS
              </p> 
            <p className='sm:text-lg text-white/70'>JUGS (Jadavpur University Gaming Society) is the official gaming hub of Jadavpur University. We unite gamers across genres and platforms through tournaments, events, and community gaming. Whether you're a casual player or a hardcore competitor — JUGS is where you belong.</p>
          </div>
        </div>
        {/* Image */}
        <div className="  flex items-center justify-center sm:h-full p-4">
            <img src={heroImg} className='w-full h-auto' />
        </div>
      </div>
    </div>
  )
}

export default Hero
