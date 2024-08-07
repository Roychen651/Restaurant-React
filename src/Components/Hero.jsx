import Video from "../assets/hero.mp4";
import heroImage from "../assets/hero.jpeg";
import { motion } from "framer-motion";
import Zenith from "../assets/Zenith.png";

const Hero = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src={Video}
          className="h-full w-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          poster={heroImage}
        ></video>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from70% to-black"></div>
      <div className="relative z-20 flex h-screen flex-col justify-end pb-2 items-center">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={Zenith}
          alt="logo-restaurant"
          className="w-full p-4"
        />
        <p className="mt-2 text-lg tracking-tighter text-white">Tel Aviv</p>
      </div>
    </section>
  );
};

export default Hero;
