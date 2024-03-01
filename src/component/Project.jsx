import React from 'react'
import { dataProject } from '../ultils/project'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
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
        <div className='wrapper my-20 md:px-7 px-10'>
            <h1 className='text-green font-fontRoboto font-semibold text-3xl text-center mb-10'>Dự án</h1>
            <Slider {...settings}>
                {dataProject?.length > 0 &&
                    dataProject.map(item => {
                        return (
                            <div key={item.id}
                                className='bg-white h-full rounded-xl shadow-r-md'
                            >
                                <div className='flex justify-center items-center'>
                                    <img src={item.img} alt={item.title}
                                        className='h-[260px] object-cover rounded-t-xl'
                                    />
                                </div>
                                <div className='flex flex-col gap-3 text-center'>
                                    <h1 className='text-xl font-bold pt-2'>{item.title}</h1>
                                    <p className='text-green'>{item.type}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>

        </div >
    )
}

export default Project