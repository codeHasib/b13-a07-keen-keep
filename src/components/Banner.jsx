import { IoIosAdd } from "react-icons/io";

const Banner = () => {
  return (
    <div className="space-y-6 text-center container mx-auto pt-40 pb-20 px-5">
      <h1 className="text-3xl md:text-5xl lg:text-8xl font-bold">
        Friends to keep close in your life
      </h1>
      <p className="text-gray-400 font-light">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br /> relationships that matter most.
      </p>
      <div className="flex justify-center items-center">
        <button className="btn bg-green-900 text-white flex justify-center items-center gap-2">
          <span className="text-[22px]">
            <IoIosAdd />
          </span>
          Add a Friend
        </button>
      </div>
    </div>
  );
};

export default Banner;
