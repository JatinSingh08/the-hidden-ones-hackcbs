import React from "react";
import './Services.css';


const Services = (props) => {
  return (
    <div>
      <div className="ServicesSection">
        <div className="ServicesContent">
          <h2 className="ServicesTitle tracking-in-expand">Services Offered By us</h2>
          <h4 className="ServicesHeading focus-in-expand-fwd ">Consult top doctors online for any health concern</h4>
          <p className="ServicesText focus-in-expand-fwd ">
          Book an appointment for an in-clinic consultation
Find experienced doctors across all specialties
          </p>
        </div>
      </div>
      {/* //card div */}
    <div className="card_container">
      <div className="card-category-1">
            <div className="basic-card basic-card-aqua">
                <div className="card-content">
            <span className="card-title">Best-offer</span>
                    <p className="card-text">
              Get the Heaviest Discounts ever..
              From solo offers to Family package all in one.. 
                  </p>
                </div>

                <div className="card-link">
                    <a title="Read Full"href="#_"><span>Read Full</span></a>
            </div>
            </div>
      <div className="card-category-1">
            <div className="basic-card basic-card-aqua">
                <div className="card-content">
            <span className="card-title">Find Doctors Near You</span>
                    <p className="card-text">
                  Get the Best Doctors that you want..From Establishing trust
                  to building loyalty
                  </p>
                </div>

                <div className="card-link">
                    <a title="Read Full" href="#_"><span>Read Full</span></a>
            </div>
            </div>
      <div className="card-category-1">
            <div className="basic-card basic-card-aqua">
                <div className="card-content">
            <span className="card-title">Hassle Free life</span>
                    <p className="card-text">
                    In the time of suffering, have a stress free recovery 
                    rather than roaming in hospitals.
                  </p>
                </div>

                <div className="card-link">
                    <a title="Read Full" href="#_" ><span>Read Full</span></a>
                </div>
                </div>
              </div>
      <div className="card-category-1">
            <div className="basic-card basic-card-aqua">
                <div className="card-content">
            <span className="card-title">Special Programs</span>
                    <p className="card-text">
                    Special program that supports your life style
                    through various Diseases.
                  </p>
                </div>

                <div className="card-link">
                    <a title="Read Full" href="#_" ><span>Read Full</span></a>
                </div>
                </div>
              </div>
              </div>
        </div>
        </div>
    </div>
  );
};

export default Services;
