import React from 'react'
import './gallery.css'
// import img1 from './images/1.jpg'



function gallery() {
  return (
      <>
      {/* <div>gallery</div> */}

    <div className="Mgallery">
       <div class="container">
    <div class="heading">
      <h3>FeaTURED <span>ShoTs</span></h3>
    </div>
    <div class="box">
      
      <div class="dream">
        <img src="/images/1.jpg" />
         <img src="/images/2.jpg" />
          <img src="/images/3.jpg" />
           <img src="/images/4.jpg" />
            <img src="/images/5.jpg" />
            
      </div>

        <div class="dream">
        <img src="/images/6.jpg" />
         <img src="/images/7.jpg" />
          <img src="/images/8.jpg" />
           <img src="/images/9.jpg" />
            <img src="/images/10.jpg" />
            
      </div>

        <div class="dream">
        <img src="/images/11.jpg" />
         <img src="/images/12.jpg" />
          <img src="/images/13.jpg"/>
           <img src="/images/14.jpg"/>
            <img src="/images/15.jpg"/>
            
      </div>




    </div>
    <div class="btn">
      <a href="/">More</a>
    </div>





  </div>
  </div>

      </>
    
  );
}

export default gallery