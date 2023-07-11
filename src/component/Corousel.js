import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Corousel(){
    return(
        <>
         <Carousel>
                <div>
                    <img src="http://www.mnnit.ac.in/images/newstories/2022/slider/yoga2023/DSC_1730.JPG" />
                    <p></p>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="http://www.mnnit.ac.in/images/newstories/2022/slider/yoga2023/DSC_1730.JPG" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://www.mnnit.ac.in/images/newstories/2022/slider/yoga2023/DSC_1730.JPG" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </>
    )
}