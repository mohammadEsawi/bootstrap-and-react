import React from 'react';

export default function Home() {
  return (
    <div
      className="text-center d-flex justify-content-center align-items-center py-5"
      style={{
        height: '70vh',
        backgroundColor: '#20c997',
        color: 'white',
      }}
    >
      <div>
        <img
          src="/src/image/mohammad.jpg" 
          alt="Mohammad" 
          className="img-fluid rounded-circle mb-3" 
          style={{ width: 200 }} 
        />
        <h1 className="display-4 fw-bold">START BOOTSTRAP</h1>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <i className="text-white fw-bold" style={{ fontSize: 24 }}>-----★-----</i>
          <p className="lead mb-0 mt-2 ml-2">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>
  );
}
