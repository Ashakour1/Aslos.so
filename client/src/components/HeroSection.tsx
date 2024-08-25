import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col  z-0 w-full h-screen overflow-hidden">
      {/* Desktop Image */}
      <img
        src="/landing.png"
        alt="desktop view"
        className="hidden md:block absolute inset-0 w-full h-full object-cover md:object-center lg:object-fill"
      />
      {/* Mobile Image */}
      <img
        src="/landing-mobile.png"
        alt="mobile view"
        className="block md:hidden absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-10 flex items-center justify-center w-full h-full bg-gradient-to-t  to-transparent">
        <div className="text-center text-white max-w-lg mx-auto px-4 py-8 md:px-8 md:py-12">
          <div className="mt-36 md:mt-0">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              FALL '24 COLLECTION
            </h1>
            <p className=" text-base md:text-xl mb-2 ">
              PUSH THE BODY, FREE THE MIND
            </p>
            <Link to="/shop">
              <button className="bg-white text-black px-8 py-2 font-medium hover:bg-gray-200 transition duration-300">
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
