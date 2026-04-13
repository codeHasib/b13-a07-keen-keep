import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm flex-wrap justify-center items-center">
        <div className="flex-1 text-center lg:text-start md:text-start sm:text-start">
          <Link
            href={"/"}
            className="btn btn-ghost gap-0 text-xl text-green-800"
          >
            <span className="text-black">Kin</span>Keeper
          </Link>
        </div>
        <div className="flex-none flex justify-center items-center gap-5">
          <Link href={"/"}>
            <button className="btn flex justify-center items-center bg-green-900 text-white">
              {" "}
              <IoHomeOutline /> Home{" "}
            </button>
          </Link>
          <Link href={"/timeline"}>
            <button className="btn flex justify-center items-center ">
              {" "}
              <MdOutlineWatchLater /> Timeline{" "}
            </button>
          </Link>
          <Link href={"/stats"}>
            <button className="btn flex justify-center items-center ">
              {" "}
              <ImStatsDots /> Stats{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
