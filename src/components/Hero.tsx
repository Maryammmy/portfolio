// import { code } from "../assets";
import { styles } from "../styles";
// import Image from "./ui/Image";
import { ComputersCanvas } from "./canvas";
import ScrollIndicator from "./ui/ScrollIndicator";

function Hero() {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5 gap-5">
          <div className="w-5 h-5 rounded-full bg-purple" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I’m <span className="text-purple">Maryam</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build beautiful, modern & user-friendly websites.
          </p>
        </div>
      </div>
      {/* <div className="absolute w-1/2 h-96 top-[40%] left-1/4 rounded-2xl overflow-hidden">
        <Image
          imageUrl={code}
          alt="Javascript Code"
          className="w-full h-full"
        />
      </div> */}
      <ComputersCanvas />
      <ScrollIndicator />
    </section>
  );
}

export default Hero;
