import React from 'react';
import './counter.css'
import CountUp from 'react-countup';


 function counter() {
  return (
      <>
       {/* <div>counter</div> */}
    <div className="counter-up">
        <div className="content">

            <div className="box">
                <div className="icon"></div>
                <div className="counter">
                    <CountUp end ={57}/>
                </div>
                <div className="text"> Competitions</div>
            </div>

            <div className="box">
                <div className="icon"></div>
                <div className="counter">
                <CountUp end ={124}/>
                </div>
                <div className="text"> Photowalks</div>
            </div>

            <div className="box">
                <div className="icon"></div>
                <div className="counter">
                <CountUp end ={45}/>
                </div>
                <div className="text">Work-Shops</div>
            </div>

        </div>

    </div>
      </>
   

    

  );
}

export default counter