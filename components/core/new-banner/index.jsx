import Image from "next/image";

const NewBanner = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-screen mx-auto px-10 md:px-15 py-14 md:py-0"
      style={{
        // backgroundImage: `url('/assets/banner/background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "90vh",
        background: "rgb(245,130,50)",
        background: "-moz-linear-gradient(180deg, rgba(245,130,50,1) 0%, rgba(245,130,50,1) 60%, rgba(241,241,241,0) 100%)",
        background: "-webkit-linear-gradient(180deg, rgba(245,130,50,1) 0%, rgba(245,130,50,1) 60%, rgba(241,241,241,0) 100%)",
        background: "linear-gradient(180deg, rgba(245,130,50,1) 0%, rgba(245,130,50,1) 60%, rgba(241,241,241,0) 100%)",
        filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#f58232',endColorstr='#f1f1f1',GradientType=1)",
      }}
    >
      <div className="flex flex-col md:flex-row max-w-screen-lg mx-auto">
        <div className="flex flex-col w-[80vw] sm:w-4/5 md:w-3/5 justify-center mx-auto">
          <p
            className="font-general font-semibold text-center md:text-left text-[2.5rem] sm:text-[3.25rem] md:text-[4rem] lg:text-[4.55rem] xl:text-[5rem] text-white leading-none"
            style={{
              WebkitTextStroke: "1.35px",
              WebkitTextFillColor: "transparent",
              WebkitFontSmoothing: "antialiased",
              textRendering: "optimizeLegibility",
            }}
          >
            SCREEN FOR
          </p>
          <p className="font-general font-semibold text-center md:text-left text-[3rem] sm:text-6xl md:text-[4.5rem] lg:text-[4.5rem] xl:text-8xl text-white leading-none">
            YOUR LIFE
          </p>
          <p className="hidden md:block font-general md:text-xl lg:text-2xl text-white text-left my-0 md:my-2">
            We believe prevention is better than cure. We bring bespoke screening packages based on who you are.
          </p>
          <p className="hidden md:block font-general md:text-xl lg:text-2xl text-white text-left my-0 md:my-1">
            Find out more about our packages today!
          </p>
          <p className="self-center block w-2/3 md:hidden text-center font-general text-md sm:text-lg text-white my-0 md:my-1">
            Find out more about our packages today!
          </p>
          <button 
            className="hidden md:block bg-blue-500 p-2 w-44 rounded-lg my-2 shadow-md font-title text-lg text-white cursor-pointer hover:shadow-2xl hover:bg-blue-600 hover:scale-110 transition-all duration-300"
            onClick={() => {window.location.href = "/health-screening";}}
          > 
            Book Now 
          </button>
        </div>
        <div className="flex flex-col w-3/5 md:w-2/5 justify-center items-center md:items-start mx-auto mt-4">
          <Image
            loading="lazy"
            src="/assets/banner/lady-doctor2.webp"
            width={546}
            height={828}
            quality={100}
            alt="doctor-on-phone"
          />
          <button 
            className="block md:hidden bg-blue-600 p-2 w-36 rounded-lg shadow-md font-title font-bold text-md text-white cursor-pointer hover:shadow-2xl hover:underline mt-4 hover:scale-110 transition-all duration-300"
            onClick={() => {window.location.href = "/health-screening";}}
          > 
            Book Now 
          </button>
        </div>
        </div>
    </div>
  );
};

export default NewBanner;
