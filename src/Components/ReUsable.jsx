// Importing Packages
import React from "react";
import { NavLink } from "react-router-dom";

// Importing Images

const ReUsable = (props) => {
  return (
    <>
      <section id="header" className="section-manually">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 my-3 home-text">
                  <h1>
                    {props.h1text}
                    <strong className="brand-name"> {props.strongtext}</strong>
                  </h1>
                  <h3 className="my-3">
                    We are here to bost your Coding Skills with talented
                    Devlopers
                  </h3>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn">
                      {props.btntext}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-imp my-3">
                  {props.imgsrc ? (
                    <img
                      src={props.imgsrc}
                      className="img-fluid animated"
                      alt="ReUsable"
                    />
                  ) : (
                    <h4>Loading...</h4>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReUsable;
