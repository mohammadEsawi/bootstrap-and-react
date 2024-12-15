import React from 'react';
export default function About() {
  return (
    <div>
 
      <div
        className="text-center d-flex justify-content-center align-items-center py-5"
        style={{
          height: '65h',
          backgroundColor: '#20c997',
          color: 'white',
        }}
      >
        <div>
          <h1 className="display-4 fw-bold mt-8">ABOUT</h1>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <i className="text-white fw-bold" style={{ fontSize: 24 }}>-----★-----</i>
            <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <p className="lead">
              Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              <br />
              <br />
              You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
            </p>
          </div>

         
          <div className="col-md-8 text-center mt-4">
            <a href="https://startbootstrap.com/theme/freelancer" className="btn btn-lg btn-outline-light">  <i className="fas fa-download"></i>Free Download</a>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
      
     
    </div>
  );
}
