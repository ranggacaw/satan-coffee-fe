import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('https://www.spectrumhealth.ie/wp-content/uploads/2017/11/steamingcupofcoffeewithspiltcoffeebeans.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full w-[50%] px-10">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-600 uppercase">
          Welcome to Satan Coffee !
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          We Are Open 4:00 PM To 9:00 PM.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-900 text-gray-300 font-semibold rounded hover:bg-yellow-950">
          Order Now!
        </button>
      </div>
    </section>
  );
};

export default Hero;
