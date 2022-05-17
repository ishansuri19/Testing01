import React from 'react'
import './Storygram.css';

function Storygram() {
    return (
        <>
            {/* <div>Storygram</div> */}
            <div className="bos">
                <div class="heading">
                    <h3>Best of <span>Storygram</span></h3>
                </div>
            </div>


            <div class="cards">
                <div class="card card1">
                    <div class="containers">
                        <img src="/images/3.jpg" />
                    </div>
                    <div class="details">
                        <h3>story-1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                    </div>
                </div>
                <div class="card card2">
                    <div class="containers">
                        <img src="/images/14.jpg" />
                    </div>
                    <div class="details">
                        <h3>story-2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                    </div>
                </div>
                <div class="card card3">
                    <div class="containers">
                        <img src="/images/1.jpg" />
                    </div>
                    <div class="details">
                        <h3>story-3</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                    </div>
                </div>
            </div>
        </>


    );
}

export default Storygram