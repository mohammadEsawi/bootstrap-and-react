import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-dark text-white text-center py-4"
      style={{ marginTop: "50px" }}
    >
      <div className="container">
        <div className="row text-start">
          <div className="col-md-4">
            <h5 className="fw-bold">Location</h5>
            <p className="mb-0">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 text-center">
            <h5 className="fw-bold">Around the Web</h5>
            <div className="d-flex justify-content-center gap-3 mt-2">
              <a href="#" className="text-white" aria-label="Facebook">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#" className="text-white" aria-label="Twitter">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="#" className="text-white" aria-label="LinkedIn">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="#" className="text-white" aria-label="Instagram">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">About Freelancer</h5>
            <p className="mb-0">
              Freelance is a free to use, MIT licensed Bootstrap theme created
              by <a>Start Bootstrap.</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
