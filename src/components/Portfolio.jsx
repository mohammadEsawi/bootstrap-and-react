import React from 'react'

export default function Portfolio() {
  return (
    <div>

<div className="d-flex flex-column justify-content-center align-items-center mt-4 mb-4 text-color ">
    <h2 className='fw-bold'>PORTFOLIO</h2>
    <i className="text-color fw-bold" style={{ fontSize: 24 }}>-----★-----</i>

</div>
      <div class="container text-center">
  <div class="row">
    <div class="col">
    <img src="/src/image/cabin.png" className="img-fluid  mb-3" />
    </div>
    <div class="col">
    <img src="/src/image/cake.png" className="img-fluid  mb-3" />
    </div>
    <div class="col">
    <img src="/src/image/circus.png" className="img-fluid  mb-3" />
    </div>
  </div>

  <div class="row">
    <div class="col">
    <img src="/src/image/game.png" className="img-fluid  mb-3" />
    </div>
    <div class="col">
    <img src="/src/image/safe.png" className="img-fluid  mb-3" />
    </div>
    <div class="col">
    <img src="/src/image/submarine.png" className="img-fluid  mb-3" />
    </div>
  </div>
</div>
    </div>
  )
}
