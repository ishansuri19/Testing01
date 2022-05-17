import React from 'react'
import './middle.css'
import Title from 'react-vanilla-tilt'

function middle() {
    return (
        <>
            {/* <div>junoon</div> */}

            <div class="about-wrapper">
                <div class="about-left">
                    <div class="about-left-content">
                        <div>
                            <div class="shadow">
                                <div class = "about-img"  >
                
                
                <a href="https://junoonnsut.com/" className="logo navbar-brand text-white offset-md-2">
                <img src="/images/junoon2.png" />
                </a>
              </div>
              
                            </div>

                            <h2>Junoon</h2>
                            <h3>NSUT</h3>
                        </div>

                        {/* <ul class="icons">
                            <li><i class="fab fa-facebook-f"></i></li>
                            <li><i class="fab fa-twitter"></i></li>
                            <li><i class="fab fa-linkedin"></i></li>
                            <li><i class="fab fa-instagram"></i></li>
                        </ul> */}
                    </div>
                </div>

                <div class="about-right">
                    <h1>Junoon<span>!</span></h1>
                    <h2>Here's who I am & what I do</h2>
                    <div class="about-btns">
                    <a href="https://www.instagram.com/junoon.nsut/"  > <button type="button" class="btn btn-pink">Istagram</button> </a>
                    <a href="https://www.facebook.com/junoon.nsut/"  >    <button type="button" class="btn btn-white">Facebook</button> </a>
                    </div>

                    <div class="about-para">
                        <p>Founded in 2010, Junoon is a platform for photography and videography enthusiasts of NSUT where they can showcase and nurture their talents . 
                            Our members excel not just in different genres of photography but also in film making, photo editing and storytelling through pictures. 
                            We bring out our flair for photography through three of our main projects: Project Perspective, Storygram and Humans Of NSUT. 
                            Two more new projects, Poll it Out and Project Reels, have been incorporated adding to the rich history of the society. 
                            Junoon also organizes the Ethnic Day every year wherein the students and the faculty come together to celebrate and display our fusion of cultures, traditions and harmony.
                             Our society provides the platform to the photography enthusiasts as they exhibit talent through their pictures that we feature on our social media handles.
                             We conduct photowalks around Delhi, hence providing a captivating experience for everyone who wants to learn and grow in this field. 
                             Additionally, our team holds technical workshops for enhanced learning and organizes time to time photography competitions. 
                             Junoon also indulges in collborations with other societies to exhibit the best of happenings in NSUT.</p>
                    </div>
                </div>
            </div>



        </>

    );
}

export default middle;