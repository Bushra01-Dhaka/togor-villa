import img from "../assets/images/togor_bg.png";
import img1 from "../assets/images/building.jpg"

const Banner = () => {
  return (
    <div
      className="hero min-h-screen bg-fixed z-20"
      style={{
        backgroundImage:
          `url(${img1})`,
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content border-2 border-black p-12 rounded-md shadow-lg bg-white bg-opacity-40">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase text-red-600">টগর ভিলা</h1>
          <p className="mb-5 text-black font-semibold">
          ৭৪/১/এ  দীননাথ সেন রোড, টগর ভিলা, গেন্ডারিয়া, ঢাকা-১২০৪
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Banner;
