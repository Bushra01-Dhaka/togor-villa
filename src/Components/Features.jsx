
import video from "../assets/images/features.mp4";

const Features = () => {
    return (
        <div className="max-h-screen flex flex-col lg:flex-row justify-center items-center text-white">
            <div className="flex-1 p-12 p-l-0">
               <h1 className="text-6xl uppercase font-semibold border-l-8 border-yellow-600 p-2 text-white">Our Services</h1>
               <div className="space-y-4 pt-8">
               <div>
               <h2 className="text-2xl">24/7 Security Guard Service </h2>
                <small className="text-yellow-500">our safety is our priority. Always protected, always secure</small>
               </div>
               <div>
               <h2 className="text-2xl">CCTV Camera Service </h2>
                <small className="text-yellow-500">Keeping watch, ensuring peace of mind. Every corner, every moment, under our vigilant eye</small>
               </div>
               <div>
               <h2 className="text-2xl">Lift Service </h2>
                <small className="text-yellow-500">Ascend to comfort. Effortless mobility, every floor a doorstep</small>
               </div>
               <div>
               <h2 className="text-2xl">Beautiful Rooftop </h2>
                <small className="text-yellow-500">Reach for the sky, find serenity above. Breathtaking views, endless possibilities</small>
               </div>
                
               </div>
            </div>
            
            <div className="flex-1">
            <video controls autoPlay loop muted>
                <source src={video} className="rounded-md" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>

        </div>
    );
};

export default Features;
