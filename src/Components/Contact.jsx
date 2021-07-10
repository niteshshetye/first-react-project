import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    console.warn(data.fullname, data.phone, data.email, data.msg);
    e.preventDefault();
    alert(
      `Coustemer Name: ${data.fullname}. Phone Number: ${data.phone}, Email : ${data.email}, Massage: ${data.msg}`
    );
  };

  return (
    <>
      <div className="my-3">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label className="form-label">Name: </label>
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter Name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contact Number: </label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="+91 xxxxxxxxxx"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address: </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message: </label>
                <textarea
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
