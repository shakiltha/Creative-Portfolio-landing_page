import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LatestWorks from "./components/LatestWorks";
import MyApproach from "./components/MyApproach";
import MyServices from "./components/MyServices";
import Testimonials from "./components/Testimonials";
import WorkedWith from "./components/WorkedWith";
import img1 from "./assets/images/Mask Group 17.png";

function App() {
  return (
    <>
      <div className="relative">
        <img
          className="absolute top-36 right-0 hidden md:block"
          src={img1}
          alt=""
        />
      </div>

      <Header />
      <WorkedWith />
      <MyServices />
      <LatestWorks />
      <MyApproach />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
