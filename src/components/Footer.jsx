import {
  FaBehance,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { HiMiniPaperAirplane } from "react-icons/hi2";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className="xl:flex xl:justify-around xl:gap-8 xl:mb-3">
      <div className="flex gap-2 m-3 justify-center items-center md:gap-5 md:justify-center xl:flex-col xl:items-start">
        <h2 className="font-qanelasSemibold text-2xl md:text-3xl lg:text-5xl text-white">
          Interested in <br /> working with me?
        </h2>
        <button className="btn bg-[#FAE824] text-black hover:text-white">
          Message Me <HiMiniPaperAirplane />
        </button>
      </div>
      <div>
        <p className="font-qanelasBold text-center my-3 text-white lg:text-2xl xl:text-left">
          Let's get social
        </p>
        <section className="flex gap-4 lg:gap-8 justify-center my-3">
          <FaFacebook className="h-8 w-8 text-white cursor-pointer" />
          <FaInstagram className="h-8 w-8 text-white cursor-pointer" />
          <FaLinkedinIn className="h-8 w-8 text-white cursor-pointer" />
          <FaTwitter className="h-8 w-8 text-white cursor-pointer" />
          <div className="h-8 w-8 bg-white"></div>
          <FaBehance className="h-8 w-8 text-white cursor-pointer" />
        </section>
        <section className="flex justify-center items-center xl:mt-10">
          <MdCopyright className="h-5 w-5 text-white" />
          <p className="roboto-regular text-white lg:text-xl xl:text-left">
            2021 Octet Design Studio
          </p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
