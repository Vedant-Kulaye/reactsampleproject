import React from 'react'
import img from "../img1.jpg"
import img1 from "../img2.jpg"
import img2 from "../img3.jpg"
export default function Home() {
  return (
    <div className="container-fixed">
      <div className='col-xl-12 mx-auto'>
<div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" ar ia-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
</div>

<div>

  
</div>









    </div>
  )
}
