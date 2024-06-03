import { CiMonitor, CiTrophy } from "react-icons/ci";
import triangularIcon from "../assets/icons/Icon-1.png";
import { GoDeviceCameraVideo } from "react-icons/go";

const MyServices = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center xl:justify-center gap-7 mb-4 bg-[#232323]">
      <div className="text-center xl:w-60 xl:text-left">
        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl my-2 font-qanelasSemibold">
          My Services
        </h2>
        <p className="text-lg roboto-regular text-white">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore
        </p>
        <h3 className="font-qanelasBold text-3xl md:text-4xl text-white my-2">
          120
        </h3>
        <p className="roboto-regular text-sm md:text-lg text-white">
          Satisfied Clients
        </p>
        <h3 className="font-qanelasBold text-3xl md:text-4xl text-white my-2">
          285
        </h3>
        <p className="roboto-regular text-sm md:text-lg text-white">
          Projects Completed
        </p>
      </div>

      <div className="text-center xl:w-[50rem] xl:p-5">
        <section className="xl:flex items-center">
          {" "}
          <CiTrophy className="h-11 w-11 mx-auto text-white" />
          <h3 className="text-white mb-2 text-lg font-qanelasBold uppercase xl:text-left xl:ml-10">
            brand consultant
          </h3>
          <p className="mb-2 roboto-regular text-sm md:text-lg mx-2 text-white xl:text-left xl:ml-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut
          </p>
        </section>
        <section className="xl:flex xl:items-center">
          {" "}
          <CiMonitor className="h-11 w-11 mx-auto text-white" />
          <h3 className="text-white mb-2 text-lg font-qanelasBold uppercase xl:text-left xl:ml-10">
            ui/ux solutions
          </h3>
          <p className="mb-2 text-sm md:text-lg roboto-regular mx-2 text-white xl:text-left xl:ml-14">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut
          </p>
        </section>
        <section className="xl:flex xl:items-center">
          {" "}
          <img src={triangularIcon} className="h-7 w-7 mx-auto" alt="" />
          <h3 className="text-white mb-2 text-lg font-qanelasBold xl:text-left xl:ml-10">
            packaging design
          </h3>
          <p className="mb-2 text-sm md:text-lg roboto-regular mx-2 text-white xl:text-left xl:ml-14">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut
          </p>
        </section>
        <section className="xl:flex xl:items-center">
          {" "}
          <GoDeviceCameraVideo className="h-11 w-11 mx-auto text-white" />
          <h3 className="text-white mb-2 font-qanelasBold text-lg uppercase xl:text-left xl:ml-10">
            motion video & tvc
          </h3>
          <p className="text-sm md:text-lg roboto-regular mx-2 mb-2 text-white xl:text-left xl:ml-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut
          </p>
        </section>
      </div>
    </div>
  );
};

export default MyServices;
