import React, { Component } from "react";
import "./Banner.css";

class Banner extends Component {
  render() {
    return (
      <div className="SlideShow middle">

        <div className="slides">

          <input type="radio" name="r" id="r1" checked/>
          <input type="radio" name="r" id="r2"/>
          <input type="radio" name="r" id="r3"/>
          <input type="radio" name="r" id="r4"/>
          <input type="radio" name="r" id="r5"/>

          <div className="slide s1">
            <img src="images/7.jpg" alt="" />
          </div>
          <div className="slide">
            <img src="images/8.jpg" alt="" />
          </div>
          <div className="slide">
            <img src="images/9.jpg" alt="" />
          </div>
          <div className="slide">
            <img src="images/10.jpg" alt="" />
          </div>
          <div className="slide">
            <img src="images/11.jpg" alt="" />
          </div>
        </div>

        <div className="nav">
          <label htmlFor="r1" className="bar"></label>
          <label htmlFor="r2" className="bar"></label>
          <label htmlFor="r3" className="bar"></label>
          <label htmlFor="r4" className="bar"></label>
          <label htmlFor="r5" className="bar"></label>
        </div>
      </div>  
    );
  }
}

export default Banner;
