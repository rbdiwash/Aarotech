import React from "react";
import about from "../assets/img/about.jpg";
import { useEffect } from "react";
import Aos from "aos";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
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
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <div className="mb-5 lg:mb-0">
              <h2
                className="mb-12 section-heading wow fadeInDown"
                data-wow-delay="0.3s"
              >
                We Provide Quality Service <br />
                <span className="primary"> In Qatar</span> With Proud!!
              </h2>

              <div className="flex flex-wrap">
                <div className="w-full md:w-2/3">
                  <div className="mr-3 pr-6 text-lg text-justify">
                    AARO TECH Trading & Contracting is the one-stop solution for
                    all your material needs, building material supplier in
                    Qatar. Our motive is not just to sell, but be your companion
                    in buying the best quality building materials to build your
                    dream home. Also we provide our services in MEP Maintenance
                    and Civil Fit-outs.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div
              className="mx-3 lg:mr-0 lg:ml-3 wow fadeInRight cursor-pointer hover:scale-105 transform transition duration-500"
              data-wow-delay="0.3s"
            >
              <img src={about} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
