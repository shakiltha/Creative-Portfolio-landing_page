const MyApproach = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-4xl lg:text-5xl text-white text-center font-qanelasSemibold my-3">
        My Approach
      </h2>
      <div className="md:grid md:grid-cols-2 md:grid-rows-1 lg:grid-cols-3 gap-1">
        <div className="my-approach-box md:h-[20rem] flex flex-col justify-center items-left p-4">
          <p className="roboto-regular text-lg text-white">One</p>
          <h3 className="font-qanelasBold text-3xl text-white">Research</h3>
          <p className="roboto-regular text-sm md:text-lg text-white">
            Research is the cornerstone of my creative process. I believe deeply
            in understanding your target audience, their needs, and their pain
            points before crafting any design solutions. This might involve user
            interviews, surveys, competitor analysis, or even diving into
            industry trends.
          </p>
        </div>
        <div className="my-approach-box md:h-[28rem] flex flex-col justify-center items-left p-4">
          <p className="roboto-regular text-lg text-white">Two</p>
          <h3 className="font-qanelasBold text-3xl text-white">Concept</h3>
          <p className="roboto-regular text-sm md:text-lg text-white">
            Following a deep dive into research, I move into the exciting phase
            of concept development. Here, I leverage the insights gathered to
            brainstorm innovative and creative solutions. This might involve
            sketching initial ideas, creating mood boards, or even rapid
            prototyping to explore different directions. I believe in fostering
            a collaborative environment where open communication and iteration
            are key.
          </p>
        </div>
        <div className="my-approach-box md:h-[25rem] flex flex-col justify-center items-left p-4">
          <p className="roboto-regular text-lg text-white ">Three</p>
          <h3 className="font-qanelasBold text-3xl text-white">Development</h3>
          <p className="roboto-regular text-sm md:text-lg text-white">
            With a solid concept in hand, it's time to bring it to life! This
            phase involves meticulously crafting the user interface (UI) and
            user experience (UX) for digital products, or meticulously designing
            and prototyping packaging solutions. For branding projects, this
            might involve developing a brand style guide that outlines visual
            elements, voice and tone, and messaging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyApproach;
