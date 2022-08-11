import React from "react";
import about from "../assets/img/feature/img-1.svg";
import { useEffect } from "react";
import Aos from "aos";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container">
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
                <div className="w-full sm:w-1/2 lg:w-1/2">
                  <div className="m-3">
                    <div className="icon text-4xl">
                      <i className="lni lni-layers"></i>
                    </div>
                    <div className="features-content">
                      <h4 className="feature-title">Built with TailwindCSS</h4>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Veniam tempora quidem vel sint.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2">
                  <div className="m-3">
                    <div className="icon text-4xl">
                      <i className="lni lni-gift"></i>
                    </div>
                    <div className="features-content">
                      <h4 className="feature-title">Free to Use</h4>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Veniam tempora quidem vel sint.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2">
                  <div className="m-3">
                    <div className="icon text-4xl">
                      <i className="lni lni-laptop-phone"></i>
                    </div>
                    <div className="features-content">
                      <h4 className="feature-title">Fully Responsive</h4>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Veniam tempora quidem vel sint.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2">
                  <div className="m-3">
                    <div className="icon text-4xl">
                      <i className="lni lni-leaf"></i>
                    </div>
                    <div className="features-content">
                      <h4 className="feature-title">Easy to Customize</h4>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Veniam tempora quidem vel sint.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div
              className="mx-3 lg:mr-0 lg:ml-3 wow fadeInRight"
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
