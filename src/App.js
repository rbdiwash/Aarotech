import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import banner from "./assets/img/hero.svg";

import Footer from "./Components/Footer";
import { BiUpArrowCircle } from "react-icons/bi";
import { AiFillBug, AiOutlineArrowRight } from "react-icons/ai";
import manpower from "./assets/img/manpower.jpg";
import motor from "./assets/img/motor.jpeg";
import about from "./assets/img/about.jpg";
import services from "./assets/img/services.jpg";
import slide3 from "./assets/img/slide3.jpg";
import { useEffect } from "react";
import Aos from "aos";
import Contact from "./Components/Contact";
import Team from "./Components/Team";
import About from "./Components/About";
import Group from "./Components/Group";
import Slider from "react-slick";
import trading1 from "./assets/img/trading1.png";
import trading2 from "./assets/img/trading2.png";
import slider1 from "./assets/img/slider1.png";
import slider2 from "./assets/img/slider2.png";
import slider3 from "./assets/img/slider3.png";
import motor2 from "./assets/img/motor.png";

function Buttons() {
  return (
    <>
      <a className="btn mr-4" href="#services">
        Our Services
      </a>
      <a className="btn-alt" href="#about">
        About us
      </a>
    </>
  );
}

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  var settings = {
    infinite: true,
    fade: true,
    dots: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  };

  const sliderContent = [
    {
      heading: "Electrical Materials",
      content: "All kind of Building Materials",
      image: slider3,
    },
    {
      heading: "Plumbing Materials",
      content: "All kind of Building Materials",
      image: slider2,
    },
    {
      heading: "HVAC Spare Parts",
      content: "All kind of Building Materials",
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
      image: trading2,
    },
  ];

  return (
    <div className="App">
      <Navbar />
      {/* <section id="hero-area" className="bg-blue-100 pt-10 pb-10">
        <div className="container">
          <div className="flex justify-between">
            <div className="w-full text-center">
              <h2
                className="text-4xl font-bold leading-snug text-gray-700 mb-10 wow fadeInUp"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Aarotech-Qatar Private Limited
                <br className="hidden lg:block" />
              </h2>
              <div
                className="text-center mb-10 wow fadeInUp"
                data-aos="fade-up"
                data-aos-duration="1300"
              >
                <a href="#" rel="nofollow" className="btn">
                  Learn More
                </a>
              </div>

              <div
                className="text-center wow fadeInUp"
                data-wow-delay="1.6s"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <img className="img-fluid mx-auto" src={banner} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section id="hero-area" className="bg-blue-100 ">
        <div className="">
          <Slider {...settings}>
            {sliderContent.map((item, index) => (
              <div className="">
                <div
                  className="p-4 py-32"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    width: "100%",
                    height: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="md:container py-16">
                    <div
                      className={`${
                        index === 1
                          ? "md:w-1/2 w-full md:ml-auto md:text-right"
                          : "md:w-1/2 w-full"
                      }`}
                    >
                      <h3 className="text-5xl primary">{item.heading}</h3>
                      <h2 className="text-2xl my-10 mb-12 font-semibold">
                        {item.content}
                      </h2>
                      <Buttons />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section id="services" className="py-24">
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
          {/* <Slider {...settings}>
            {servicesContent.map((item, index) => (
              <div className="">
                <div
                  className="p-4 block py-32"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    width: "100%",
                    height: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="container py-16">
                    <div
                      className={`${
                        index === 1 ? "w-1/2 ml-auto text-right" : "w-1/2"
                      }`}
                    >
                      <h3 className="text-5xl primary">{item.heading}</h3>
                      <h2 className="text-2xl my-10 mb-12 font-semibold">
                        {item.content}
                      </h2>
                      <Buttons />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider> */}

          <div className="flex flex-wrap">
            {servicesContent.map((item, index) => (
              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4" key={index}>
                <div className="m-4 " data-aos="fade-up" data-aos-delay="200">
                  <div className="icon text-7xl rounded shadow-lg p-4 min-h-[350px]">
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
      <div id="about" className="bg-blue-100 py-24">
        <About />
      </div>
      <div id="group" className=" py-24">
        <Group />
      </div>
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
              <form for="">
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

      <a
        href="#"
        className="back-to-top w-10 h-10 fixed bottom-0 right-0 mb-5 mr-5 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg z-20 duration-300 hover:bg-blue-400"
      >
        <BiUpArrowCircle className="text-xl" />
      </a>
    </div>
  );
}

export default App;
