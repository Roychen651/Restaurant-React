import Video from "../assets/hero.mp4";
import Logo from "../assets/logo.png";
import heroImage from "../assets/hero.jpeg";

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
      <div className="relative z-20 flex h-screen flex-col justify-end pb-2">
        <img src={Logo} alt="logo-restaurant" className="w-full p-4" />
        <p className="p-4 text-lg tracking-tighter text-white">Tel Aviv</p>

      </div>
    </section>
  );
};

export default Hero;
