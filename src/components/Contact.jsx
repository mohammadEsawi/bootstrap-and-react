import React from 'react';

export default function Contact() {
  return (
    <div>
      <div
        className="text-center d-flex justify-content-center align-items-center py-5" >
        <div>
          <h1 className="display-4 fw-bold text-color">CONTACT ME</h1>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <i className="fw-bold text-color" style={{ fontSize: 24 }}>-----★-----</i>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Type your message here"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-20">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
