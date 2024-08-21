import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image, Skeleton, Spin } from "antd";

function ProductSlider() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <Image
                        width={500}
                        height={600}
                        src="https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        placeholder={<div className="flex justify-center items-center h-screen">
                            <Skeleton size="large" />
                        </div>}
                    />
                </div>
                <div>
                    <Image
                        width={500}
                        height={600}
                        src="https://images.unsplash.com/photo-1445205170230-053b83016050"
                        placeholder={<div className="flex justify-center items-center h-screen">
                            <Spin size="large" />
                        </div>}
                    />
                </div>
                <div>
                    <Image
                        width={500}
                        height={600}
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                        placeholder={<div className="flex justify-center items-center h-screen">
                            <Spin size="large" />
                        </div>}
                    />
                </div>
                <div>
                    <Image
                        width={500}
                        height={600}
                        src="https://images.unsplash.com/photo-1596918404383-22e2c91f4964"
                        placeholder={<div className="flex justify-center items-center h-screen">
                            <Spin size="large" />
                        </div>}
                    />
                </div>
                <div>
                    <Image
                        width={500}
                        height={600}
                        src="https://images.unsplash.com/photo-1632194978058-4f2f48bc68c2"
                        placeholder={<div className="flex justify-center items-center h-screen">
                            <Spin size="large" />
                        </div>}
                    />
                </div>
            </Slider>
        </div>
    );
}

export default ProductSlider;
