import React from 'react';
import bannerCar from '../../../assets/banner car/banner car.jpg'
import bannerCar1 from '../../../assets/banner car/banner car1.jpg'
import bannerCar2 from '../../../assets/banner car/car-banner2.jpg'
import bannerCar3 from '../../../assets/banner car/banner car3.jpg'

const Banner = () => {
    return (
        <div className=''>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={bannerCar} className="w-full" alt='' />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={bannerCar1} className="w-full" alt='' />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={bannerCar2}className="w-full" alt='' />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={bannerCar3} className="w-full" alt='' />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;