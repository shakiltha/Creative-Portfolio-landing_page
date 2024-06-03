import airBnb from "../assets/images/Airbnb.png";
import amazon from "../assets/images/Amazon.png";
import stripe from "../assets/images/Stripe.png";
import microsoft from "../assets/images/Microsoft.png";
const WorkedWith = () => {
  return (
    <div>
      <h2 className="font-qanelasRegular text-2xl text-white text-center xl:mt-20">
        Over 120+ Business growing me.
      </h2>
      <div className="flex flex-col md:flex-row items-center xl:justify-center">
        <div>
          <img src={airBnb} alt="airbnb logo" />
        </div>
        <div>
          <img src={amazon} alt="amazon logo" />
        </div>
        <div>
          <img src={stripe} alt="stripe logo" />
        </div>
        <div>
          <img src={microsoft} alt="microsoft logo" />
        </div>
      </div>
    </div>
  );
};

export default WorkedWith;
