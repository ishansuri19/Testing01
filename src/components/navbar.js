import React from 'react'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Junoon from './assets/junoon.png';

function navbar() {
  return (
    <div className="container-fluid">
    < div className="row">
      <div className="col-md-12 navbar">
        <a href="https://junoonnsut.com/" className="logo navbar-brand text-white offset-md-2">
        {/* <img src="/images/junoon1.png" /> */} junoon
        </a>
        <ul className="nav">
          <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="https://junoonnsut.com/about" className="nav-link">About Us</a></li>
          <li className="nav-item"><a href="https://junoonnsut.com/collection" className="nav-link">Collections</a></li>
          <li className="nav-item"><a href="https://www.instagram.com/junoon.nsut/" className="nav-link">Instagram</a></li>
          <li className="nav-item"><a href="https://www.facebook.com/junoon.nsut/" className="nav-link">Facebook</a></li>
          <li className="nav-item"><a href="https://junoonnsut.com/contact_us" className="nav-link">Contact Us</a></li>
        </ul>
      </div>
      
      {/*------------------ slider banner	 -----------------*/}
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="info">
              <h1>SLIDE ONE</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="info">
              <h1>SLIDE TWO</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="info">
              <h1>SLIDE THREE</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
);
  
}

export default navbar