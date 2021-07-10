// importing the Packages here
import React from "react";

// importing the components
import Card from "./Card";
import Sdata from "../Sdata";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((data, index) => {
                return (
                  <Card key={index} imgsrc={data.imgsrc} title={data.title} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
