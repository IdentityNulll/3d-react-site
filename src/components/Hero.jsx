import "boxicons/css/boxicons.min.css";
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row item-center justify-between min-h-[calc(90vh-6rem)]">

        <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">

            <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
                <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1"> 
                    <i class='bx bx-diamond' ></i> INTORDUCING
                </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
                EMAIL FOR 
                <br />
                DEVELOPERS
            </h1>
            <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem] ">
                the best way to reach uumans instead of spam folders, dlever transactional and marketing and marketing emails at scale
            </p>
            <div className="flex gap-4 mt-12">
                <a href="#" className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]">
                    Documentation <i class='bx bx-link-external' ></i>
                </a>
                <a href="#" className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white">
                    Getstarted <i class='bx bx-link-external' ></i>
                </a>
            </div>

        </div>


        <Spline className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full" scene="https://prod.spline.design/gO9KeEMnl8mLyVmi/scene.splinecode" />

    </main>
  )
}

export default Hero
