import img from "../assets/images/togor_bg.png";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen fixed z-20"
      style={{
        backgroundImage:
          `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content border-2 border-white p-12 rounded-md shadow-lg">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase text-red-600">টগর ভিলা</h1>
          <p className="mb-5 text-white">
          ৭৪/১/এ  দীননাথ সেন রোড, টগর ভিলা, গেন্ডারিয়া, ঢাকা-১২০৪
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Banner;
