import { HiMiniPaperAirplane } from "react-icons/hi2";
import coverImage from "../assets/images/CoverImage.png";
import DesignElements from "../assets/images/DesignElements.png";
const Header = () => {
  return (
    <div className="my-7">
      <div className="flex justify-between mx-4 font-quickSand">
        <h2 className="text-2xl pb-1 font-quickSand text-white">Ethan Henry</h2>
        <h3 className="text-sm cursor-pointer text-white">
          Start a{" "}
          <span className="font-qanelasMedium border-b-[#FAE824] pb-1 border-b-2 rounded-md text-white">
            project
          </span>
        </h3>
      </div>
      {/* hero container */}
      <div className="flex flex-col md:flex-row mx-4 justify-center items-center">
        <div className="flex-1">
          <h2 className="font-qanelasBold text-2xl mt-4 md:text-4xl lg:text-6xl text-white">
            Hello, I am Ethan. A Product Designer
          </h2>
          <p className="text-lg my-4 lg:my-6 roboto-regular text-center md:text-left text-white">
            Hello, I am Ethan, a product designer. I'm passionate about creating
            user-friendly and visually appealing experiences that solve problems
            and make a positive impact. With a keen eye for detail and a focus
            on user research, I strive to bridge the gap between usability and
            functionality. Whether it's designing intuitive interfaces, crafting
            compelling user flows, or collaborating with cross-functional teams,
            I'm excited to bring innovative products to life.
          </p>
          <div className="text-center">
            <button className="btn bg-[#FAE824] hover:text-white text-black roboto-medium">
              Message Me <HiMiniPaperAirplane />
            </button>
          </div>
        </div>
        <div className="flex-1 md:pl-14 relative">
          <img src={coverImage} alt="" className="z-10 relative" />
          <img
            src={DesignElements}
            alt=""
            className="absolute -bottom-12 right-8"
          />
        </div>
        <div className="flex-1 mt-14 text-center mr-3">
          <section className="mb-10">
            <h2 className="font-qanelasBold text-4xl text-white" text-white>
              120
            </h2>
            <p className="roboto-regular text-white">Satisfied Clients</p>
          </section>
          <section className="mb-10">
            <h2 className="font-qanelasBold text-4xl text-white">285</h2>
            <p className="roboto-regular text-white">Projects Completed</p>
          </section>
          <section className="mb-10">
            <h2 className="font-qanelasBold text-4xl text-white">10</h2>
            <p className="roboto-regular text-white">Years of Experienced</p>
          </section>
          <section>
            <h2 className="font-qanelasBold text-4xl text-white">4300+</h2>
            <p className="roboto-regular text-white">Hours of Work</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Header;
