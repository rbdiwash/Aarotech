import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import banner from "./assets/img/hero.svg";
import about from "./assets/img/feature/img-1.svg";
import Footer from "./Components/Footer";
import { BiUpArrowCircle } from "react-icons/bi";
import {
  AiOutlineBarChart,
  AiFillBank,
  AiFillBug,
  AiOutlineArrowRight,
} from "react-icons/ai";
import image1 from "./assets/img/team/img1.jpg";
import image2 from "./assets/img/team/img2.jpg";
import image3 from "./assets/img/team/img3.jpg";
import { useEffect } from "react";
import Aos from "aos";
import Contact from "./Components/Contact";
import Team from "./Components/Team";
import About from "./Components/About";
import Group from "./Components/Group";

const images = [image1, image2, image3];

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <section id="hero-area" className="bg-blue-100 pt-48 pb-10">
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
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 " data-aos="fade-up" data-aos-delay="200">
                <div className="icon text-7xl">
                  <AiOutlineBarChart />
                </div>
                <div>
                  <h3 className="service-title">
                    Trading for Building materials
                  </h3>
                  <p className="text-gray-600">
                    Electrical, Plumbing, AC Spare Parts Many other items.. ...
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div
                className="m-4 wow fadeInRight"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon text-7xl">
                  <AiFillBank />
                </div>
                <div>
                  <h3 className="service-title">
                    Motor Rewinding and Services{" "}
                  </h3>
                  <p className="text-gray-600">
                    Motor Rewinding and Services ...
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div
                className="m-4 wow fadeInRight"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon text-7xl">
                  <AiFillBug />
                </div>
                <div>
                  <h3 className="service-title">Technical Services</h3>
                  <p className="text-gray-600">
                    In order to leverage maximum workforce productivity, reduce
                    the risk of injury, and minimize costly downtime,...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="about" className="bg-blue-100 py-24">
        <About />
      </div>
      <div id="group" className=" py-24">
        <Group />
      </div>
      <section id="team" className="py-24 text-center">
        <Team />
      </section>
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
                Existing customized ideas through client-based deliverables.{" "}
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
        <Footer />{" "}
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
