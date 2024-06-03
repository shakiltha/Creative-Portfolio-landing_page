import img1 from "../assets/images/Layer4.png";
import img2 from "../assets/images/Layer2.png";
import img3 from "../assets/images/Layer2(2).png";
import img4 from "../assets/images/Layer3.png";
import { HiMiniPaperAirplane } from "react-icons/hi2";

const LatestWorks = () => {
  return (
    <div className="flex flex-col gap-7 mb-4">
      <div className="text-center">
        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl my-2 font-qanelasSemibold">
          Latest works
        </h2>
        <p className="my-2 roboto-regular text-lg text-white xl:w-[40rem] xl:mx-auto">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore
        </p>
        <div className="text-center">
          <button className="btn bg-[#FAE824] text-black hover:text-white roboto-medium">
            Message Me <HiMiniPaperAirplane />
          </button>
        </div>
      </div>
      <div className="md:grid md:grid-cols-4 md:grid-rows-1">
        <section className="m-2 bg-[#262837]">
          <div className="border-b-2 pb-1 border-white">
            <h3 className="font-qanelasSemibold text-2xl text-white md:text-3xl mx-2 my-2">
              Digart - NFT
            </h3>
            <p className="mx-2 roboto-regular text-white">Web Design</p>
          </div>
          <img src={img1} alt="" />
        </section>
        <section className="m-2 bg-[#262837]">
          <div className="border-b-2 pb-1 border-white">
            <h3 className="font-qanelasSemibold text-2xl text-white md:text-3xl mx-2 my-2">
              Jiwa Raga
            </h3>
            <p className="mx-2 roboto-regular text-white">Web Design</p>
          </div>
          <img src={img2} alt="" />
        </section>
        <section className="m-2 bg-[#262837]">
          <div className="border-b-2 pb-1 border-white">
            <h3 className="font-qanelasSemibold text-2xl text-white md:text-3xl mx-2 my-2">
              Tekfin
            </h3>
            <p className="mx-2 roboto-regular text-white">Dashboard Design</p>
          </div>
          <img src={img3} alt="" />
        </section>
        <section className="m-2 bg-[#262837]">
          <div className="border-b-2 pb-1 border-white">
            <h3 className="font-qanelasSemibold text-2xl text-white md:text-3xl mx-2 my-2">
              Investment App
            </h3>
            <p className="mx-2 roboto-regular text-white">App Design</p>
          </div>
          <img src={img4} alt="" />
        </section>
      </div>
    </div>
  );
};

export default LatestWorks;
