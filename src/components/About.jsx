import sectionImg from "../assets/images/SectionImage.png";
const About = () => {
  return (
    <div className="xl:flex xl:justify-center xl:items-center xl:gap-3">
      <div className="xl:w-[380px] xl:h-[550px]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-qanelasSemibold text-white text-center xl:text-left my-3">
          About me
        </h2>
        <img src={sectionImg} className="p-2 mx-auto md:mx-auto" alt="" />
      </div>
      <div className="xl:w-[721px] xl:h-auto xl:mx-3">
        <div>
          <p className="roboto-regular text-sm m-2 md:text-xl text-white xl:text-left">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <h4 className="font-qanelasBold text-white md:text-2xl text-center my-3 xl:text-left">
            Other Skills
          </h4>
          <div className="flex flex-col md:flex-row xl:flex-col xl:items-start xl:gap-10 items-center justify-center text-xl">
            <section className="flex lg:gap-3">
              <section className="flex items-center gap-3 lg:gap-4">
                <div className="w-4 h-4 xl:w-6 xl:h-6 bg-white rounded-md"></div>
                <p className="roboto-regular text-white">Development</p>
              </section>
              <section className="flex items-center mx-2 gap-3 lg:gap-4">
                <div className="w-4 h-4 xl:w-6 xl:h-6 bg-white rounded-md"></div>
                <p className="roboto-regular text-white">Photography</p>
              </section>
            </section>
            <section className="flex lg:gap-3">
              <section className="flex items-center gap-3 lg:gap-4">
                <div className="w-4 h-4 xl:w-6 xl:h-6 bg-white rounded-md"></div>
                <p className="roboto-regular text-white">Illustrating</p>
              </section>
              <section className="flex items-center mx-2 gap-3 lg:gap-4">
                <div className="w-4 h-4 xl:w-6 xl:h-6 bg-white rounded-md"></div>
                <p className="roboto-regular text-white">User Research</p>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
