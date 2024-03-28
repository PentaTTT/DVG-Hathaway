import React from 'react'
import { listPartner } from '../ultils/partner'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='text-center lg:py-24 py-12 bg-gradient-to-r from-slate-300 to-bgCream'>
            <div className='wrapper'>
                <h3 className='text-green text-2xl font-fontRoboto font-bold mb-3'>Đối tác tiêu biểu</h3>
                <p className=''>chúng tôi được tin tưởng bởi</p>
                <div className='mx-auto py-12 md:px-7 px-10'
                // data-aos="zoom-in-up" data-aos-duration="2000"
                >
                    <Slider {...settings}>
                        {listPartner && listPartner.length > 0 &&
                            listPartner.map((item) => {
                                return <div key={item.name} className='w-full h-full relative
                                before:border-solid before:border-l-2 before:border-t-2 before:absolute lg:before:w-[25%] lg:before:h-[30%] 
                                before:left-0 before:top-0 before:border-green before:transition-all before:ease-in-out before:duration-[300ms]
                                after:border-solid after:border-r-2 after:border-b-2 after:absolute lg:after:w-[25%] lg:after:h-[30%]
                                after:right-0 after:bottom-0 after:border-green after:transition-all after:ease-in-out after:duration-[300ms]
                                hover:before:w-full hover:before:h-full hover:after:w-full hover:after:h-full group
                                before:w-full before:h-full after:w-full after:h-full
                                '>

                                    <div className='w-full h-32 mx-auto bg-white'>
                                        <img loading='lazy' className='object-cover p-3 mx-auto w-auto h-full group-hover:scale-110 transition-all ease-in-out duration-[300ms]'
                                            src={item.img} alt={item.name} />
                                    </div>

                                </div>
                            })
                        }
                    </Slider>

                </div>
            </div>

        </div>
    )
}

export default Partner