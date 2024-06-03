const MyApproach = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-4xl lg:text-5xl text-white text-center font-qanelasSemibold my-3">
        My Approach
      </h2>
      <div className="md:grid md:grid-cols-2 md:grid-rows-1 lg:grid-cols-3 gap-1">
        <div className="my-approach-box flex flex-col justify-center items-left p-4">
          <p className="roboto-regular text-lg text-white">One</p>
          <h3 className="font-qanelasBold text-3xl text-white">Research</h3>
          <p className="roboto-regular text-sm md:text-lg text-white">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et
          </p>
        </div>
        <div className="my-approach-box flex flex-col justify-center items-left p-4">
          <p className="roboto-regular text-lg text-white">Two</p>
          <h3 className="font-qanelasBold text-3xl text-white">Concept</h3>
          <p className="roboto-regular text-sm md:text-lg text-white">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et
          </p>
        </div>
        <div className="my-approach-box flex flex-col justify-center items-left p-4">
          <p className="roboto-regular text-lg text-white ">Three</p>
          <h3 className="font-qanelasBold text-3xl text-white">Development</h3>
          <p className="roboto-regular text-sm md:text-lg text-white">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyApproach;
