import React from 'react'
import Testinomial from '../Components/Testinomial'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const TestinomialContainer = () => {
  return (
    <div className='my-[2%] px-[5%]'> 
        <Carousel autoPlay infiniteLoop interval={2000} showArrows={false} showStatus={false} transitionTime={1000} showThumbs={false}>
            <Testinomial/>
            <Testinomial/>
            <Testinomial/>
            <Testinomial/>
        </Carousel>
    </div>
  )
}

export default TestinomialContainer