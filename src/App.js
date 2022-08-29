import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BiUpArrowCircle } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import manpower from "./assets/img/manpower.jpg";
import motor from "./assets/img/motor.jpeg";
import about from "./assets/img/about.jpg";
import { useEffect } from "react";
import Aos from "aos";
import Contact from "./Components/Contact";
import Group from "./Components/Group";
import Slider from "react-slick";
import trading1 from "./assets/img/trading1.png";
import mep from "./assets/img/mep.png";
import slider1 from "./assets/img/slider1.jpg";
import slider2 from "./assets/img/slider2.png";
import slider3 from "./assets/img/slider3.png";
import slider4 from "./assets/img/building.jpg";
import wires from "./assets/img/products/wires.jpg";
import isolator from "./assets/img/products/isolator.jpg";
import switches from "./assets/img/products/switches.jpg";
import gi from "./assets/img/products/gi.jpg";
import pvc from "./assets/img/products/pvc.png";
import flexible from "./assets/img/products/flexible.png";
import flexible2 from "./assets/img/products/flexible2.jpg";
import copper from "./assets/img/products/copper.jpg";
import AC from "./assets/img/products/AC.jpg";
import rubber from "./assets/img/products/rubber.jpg";
import fiver from "./assets/img/products/fiver.jpeg";
import ACGas from "./assets/img/products/AC_gas.jpg";
import UPVC from "./assets/img/products/upvc.jpg";
import ppr from "./assets/img/products/ppr.jpg";
import sanitary from "./assets/img/products/sanitary.jpg";
import copperpipe from "./assets/img/products/copperpipe.jpg";
import ss from "./assets/img/products/ss.jpg";
import heater from "./assets/img/products/heater.jpg";
import mixer from "./assets/img/products/mixer.jpg";
import gimi from "./assets/img/products/gimi.jpg";
import msssgi from "./assets/img/products/msssgi.jpg";
import gi2 from "./assets/img/products/gi2.jpg";
import wood from "./assets/img/products/wood.jpg";
import safety from "./assets/img/products/safety.jpg";
import profile from "./assets/files/profile.pdf";

function Buttons() {
  return (
    <>
      <a
        className="btn mr-4"
        href="#services"
        onClick={(e) => e.stopPropagation()}
      >
        Our Services
      </a>
      {/* <button
        className="btn-alt"
        type="button"
        // href={require("./assets/files/profile.pdf")}
        download
        onClick={() => window.open(require("./assets/files/profile.pdf"))}
      >
        Our Profile
      </button> */}
      <a
        className="btn-alt"
        // type="button"
        href={profile}
        download={"Aaro tech Profile.pdf"}
      >
        Our Profile
      </a>
    </>
  );
}

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  var settings = {
    // infinite: true,
    fade: true,
    dots: true,
    // autoplay: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  };

  return (
    <div className="App">
      <Navbar />

      <section id="hero-area" className="bg-blue-100 ">
        <div className="">
          <Slider {...settings}>
            {sliderContent.map((item, index) => (
              <div className="">
                <div
                  className="p-4 flex items-center justify-start"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    width: "100%",
                    height: "550px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="md:container  flex items-start justify-start flex-col text-left">
                    <h3 className="text-5xl primary">{item.heading}</h3>
                    <h2 className="text-2xl my-4 font-semibold">
                      {item.content}
                    </h2>

                    <div className="md:flex">
                      <a className="btn mr-4" href="#services">
                        Our Services
                      </a>

                      <a
                        className="btn-alt"
                        type="button"
                        href={profile}
                        download={"Aarotech_Profile.pdf"}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Our Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section id="services" className="bg-blue-100 py-24">
        <div className="container">
          <div className="text-center">
            <h2
              className="mb-12 section-heading wow fadeInDown"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Our <span className="primary">Services</span>
            </h2>
          </div>

          <div className="flex flex-wrap">
            {servicesContent.map((item, index) => (
              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4" key={index}>
                <div className="m-4 " data-aos="fade-up" data-aos-delay="200">
                  <div className="icon text-7xl rounded-lg shadow-lg p-4 min-h-[350px] bg-white">
                    <img
                      src={item.image}
                      alt="manpower image "
                      className="object-contain h-full w-full"
                    />
                  </div>
                  <div>
                    <h3 className="service-title">{item.heading}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="products" className="py-24">
        <div className="container">
          <div className="text-center">
            <h2
              className="mb-12 section-heading wow fadeInDown"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Our <span className="primary">Products</span>
            </h2>
          </div>
          <div className="flex flex-wrap">
            {productContent.map((item, index) => (
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6" key={index}>
                <div className="m-4 " data-aos="fade-up" data-aos-delay="200">
                  <div className="icon text-7xl rounded-lg shadow-lg p-4 min-h-[250px] bg-white cursor-pointer transform transition duration-500 hover:scale-105">
                    <img
                      src={item.image}
                      alt="manpower image "
                      className="object-cover h-full w-full"
                    />
                    <p className="text-base  text-gray-500">{item.heading}</p>
                  </div>
                  <div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div id="about" className="bg-blue-100 py-24">
        <div className="container">
          <div className="text-center">
            <h2
              className="mb-12 section-heading wow fadeInDown"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              About <span className="primary">AARO TECH</span>
            </h2>
          </div>
          <div className="flex  items-center flex-wrap">
            <div className="w-full lg:w-1/2 gap-12" data-aos="fade-right">
              <div className="mb-5 lg:mb-0">
                <h2
                  className="mb-12 section-heading wow fadeInDown"
                  data-wow-delay="0.3s"
                >
                  We Provide Quality Service <br />
                  <span className="primary"> In Qatar</span> With Proud!!
                </h2>

                <div className="flex flex-wrap">
                  <div className="w-full">
                    <div className="mr-3 pr-6 text-lg text-justify">
                      AARO TECH TRADING & CONT W.L.L. has been established by
                      the good team who has more then 14 years experience in
                      qatar in various fields of trading, building materials &
                      MEP maintenance / Civil Fit-outs works. <br /> <br />{" "}
                      During these 14 years, we earned better experience of up &
                      down market level & different kind of new ethics & latest
                      technologies in all the above fields. The aim of AARO TECH
                      TRADING & CONT. W.L.L is to give better quality services
                      and fulfill the client requirements with reasonable price.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <div
                className="mx-3 lg:mr-0 lg:ml-3 wow fadeInRight cursor-pointer hover:scale-105 transform transition duration-1000"
                data-wow-delay="0.3s"
              >
                <img src={about} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="group" className=" py-24">
        <Group />
      </div> */}
      {/* <section id="team" className="py-24 text-center">
        <Team />
      </section> */}
      <section id="Subscribes" className="text-center py-20 bg-blue-100">
        <div className="container" data-aos="fade-up" data-aos-duration="2000">
          <div className="flex justify-center mx-3">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
              <h4
                className="mb-3 section-heading wow fadeInUp"
                data-wow-delay="0.3s"
              >
                Start For <span className="primary">Free</span>
              </h4>
              <p
                className="mb-4 text-gray-600 leading-loose text-sm wow fadeInUp"
                data-wow-delay="0.6s"
              >
                Existing customized ideas through client-based deliverables.
                <br /> Compellingly unleash fully tested outsourcing
              </p>
              <form htmlFor="">
                <div className="wow fadeInDown" data-wow-delay="0.3s">
                  <input
                    type="Email"
                    className="w-full mb-5 bg-white border border-blue-300 rounded-full px-5 py-3 duration-300 focus:border-blue-600 outline-none"
                    name="email"
                    placeholder="Email Address"
                  />
                  <button
                    className="border-0 bg-[#ec1f24] text-white rounded-full w-12 h-12 duration-300 hover:opacity-75"
                    type="submit"
                  >
                    <AiOutlineArrowRight className="h-full w-full" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-24">
        <Contact />
      </section>

      <footer id="footer" className="bg-gray-800 pt-16">
        <Footer />
      </footer>

      {/* <a
        href="#"
        className="back-to-top w-10 h-10 fixed bottom-0 right-12 mb-5 mr-5 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg z-20 duration-300 hover:bg-blue-400"
      >
        <BiUpArrowCircle className="text-xl" />
      </a> */}
    </div>
  );
}

export default App;
const sliderContent = [
  {
    heading: "Building Materials",
    content: "All kind of Building Materials",
    image: slider4,
  },
  {
    heading: "Plumbing Materials",
    // content: "All kind of Building Materials",
    image: slider2,
  },
  {
    heading: "Electrical Materials",
    // content: "All kind of Building Materials",
    image: slider3,
  },

  {
    heading: "HVAC Spare Parts",
    // content: "All kind of Building Materials",
    image: slider1,
  },
];
const servicesContent = [
  {
    heading: "Manpower Supply",
    image: manpower,
  },
  {
    heading: "Motor Rewinding and Repair",
    image: motor,
  },
  {
    heading: "Power Tools/ Equipment Rent",
    image: trading1,
  },
  {
    heading: "MEP Maintenance & Civil Fit-outs",
    image: mep,
  },
];
const productContent = [
  {
    heading: "Wires and Cables",
    image: wires,
  },
  {
    heading: "Isolators",
    image: isolator,
  },
  {
    heading: "Switch & Sockets",
    image: switches,
  },
  {
    heading: "GI Conduit & Accessories",
    image: gi,
  },
  {
    heading: "PVC Conduit & Accessories",
    image: pvc,
  },
  {
    heading: "Flexible Cables",
    image: flexible,
  },
  {
    heading: "GI Flexible Conduit & Accessories",
    image: flexible2,
  },
  {
    heading: "AC Copper Coils",
    image: copper,
  },
  {
    heading: "AC Compressors",
    image: AC,
  },
  {
    heading: "Rubber Insulations",
    image: rubber,
  },
  {
    heading: "Fiber Glass Insulations",
    image: fiver,
  },
  {
    heading: "AC Gas",
    image: ACGas,
  },
  {
    heading: "UPVC & PVC Fittings",
    image: UPVC,
  },
  {
    heading: "PPR Pipes & Fittings",
    image: ppr,
  },
  {
    heading: "Sanitary Wares",
    image: sanitary,
  },
  {
    heading: "Copper Pipes & Fittings",
    image: copperpipe,
  },
  {
    heading: "SS, Ci, PVC Floor Traps",
    image: ss,
  },
  {
    heading: "Mixers",
    image: mixer,
  },
  {
    heading: "Heaters",
    image: heater,
  },
  {
    heading: "GI & MI Fittings",
    image: gimi,
  },
  {
    heading: "MS, SS & GI Pipes",
    image: msssgi,
  },
  {
    heading: "GI & Aluminium Sheets",
    image: gi2,
  },
  {
    heading: "Wood & Plywoods",
    image: wood,
  },
  {
    heading: "Safety Items",
    image: safety,
  },
];
