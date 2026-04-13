import Image from "next/image";
import Link from "next/link";
import InstaIcon from "../../public/images/assets/instagram.png";
import FBIcon from "../../public/images/assets/facebook.png";
import TwitterIcon from "../../public/images/assets/twitter.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-[#244d3f] text-primary-content p-10">
        <aside>
          <h2 className="text-5xl font-bold">KeenKeeper</h2>
          <p className="font-lighter">
            Your personal Shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </aside>
        <nav>
          <p className="text-xl font-bold"> Social Links </p>
          <div className="grid grid-flow-col gap-4">
            <Link
              className="h-8 w-8 rounded-full bg-white flex justify-center items-center"
              href={"/instagram.com"}
            >
              <Image
                src={InstaIcon}
                alt="Insta Icon"
                width={60}
                height={60}
              ></Image>
            </Link>
            <Link
              className="h-8 w-8 rounded-full bg-white flex justify-center items-center"
              href={"/facebook.com"}
            >
              <Image src={FBIcon} alt="FB Icon" width={60} height={60}></Image>
            </Link>
            <Link
              className="h-8 w-8 rounded-full bg-white flex justify-center items-center"
              href={"/X.com"}
            >
              <Image
                src={TwitterIcon}
                alt="X Icon"
                width={60}
                height={60}
              ></Image>
            </Link>
          </div>
        </nav>
        <div className="border-t border-gray-400 w-full pt-8 flex justify-between items-center font-light text-[14px] text-gray-300">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          <div className="flex justify-center items-center gap-5">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
