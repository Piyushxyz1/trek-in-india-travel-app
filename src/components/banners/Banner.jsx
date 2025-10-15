const Banner = ({ title, image }) => {
  return (
    <div
      className=" h-[200px]    md:h-[75vh]  bg-cover bg-center relative flex items-center justify-center mt-0"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>
      <div className="text-xl sm:text-3xl md:text-4xl xl:text-5xl  mb-2 sm:mb-4 font-bold text-white absolute z-[2] tracking-tight px-4 text-center">
        {title}
      </div>
    </div>
  );
};

export default Banner;