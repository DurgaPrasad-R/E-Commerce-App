import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
// flex-1 flex-col justify-center items-center gap-5 pl-44 mt-20
// text-slate-950 font-semibold text-4xl
// flex gap-5 items-center
// text-5xl font-bold
// leading-[1.1] text-5xl font-bold
// flex justify-center items-center gap-4 w-72 h-12 rounded-[75px] mt-7 bg-red-500 text-white font-medium
const Hero = () => {
  return (
    <div className="flex h-screen bg-gradient-to-b from-cyan-200 to-blue-200 font-pops">
      <div className="flex flex-1 flex-col justify-center items-center gap-5 leading-[1.1]">
        <h2 className="text-slate-950 font-semibold text-2xl">
          NEW ARRIVALS ONLY
        </h2>
        <div>
          <div className="flex gap-5 items-center">
            <p className="leading-[1.1] text-3xl font-bold">new</p>
            <img src={hand_icon} alt="icon" className="w-20" />
          </div>
          <p className="leading-[1.1]  text-3xl font-bold">collections</p>
          <p className="leading-[1.1]  text-3xl font-bold">for everyone</p>
        </div>
        <div className="flex justify-center items-center gap-4 w-72 h-12 rounded-[75px] mt-7 bg-red-500 text-white font-medium">
          <div className="">Latest Collections</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>

      <div className="flex flex-1 justify-center">
        <img src={hero_image} alt="welcome_img" />
      </div>
    </div>
  );
};
export default Hero;
