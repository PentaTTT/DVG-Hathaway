import React from 'react'
import { serviceDetail } from '../ultils/serviceDetail'
import videoBg from "/image/video_service.mp4"

const ServiceDetailPage = () => {

    return (
        <div className=''>
            <div className='relative'>

                <video src={videoBg} loop muted autoPlay playsinline
                    className='w-full lg:h-[24vw] object-cover shadow-md'
                />

                <div className='absolute lg:top-[45%] top-[40%] lg:left-48 left-5'>
                    <h1 className='font-fontRoboto lg:text-3xl text-2xl text-yellowColor'>Dịch Vụ Network Fanpage</h1>
                    <p className='my-3'>desc</p>
                </div>
            </div>

            <div className='wrapper py-10'>
                <h2 className='text-center text-green font-bold font-fontRoboto text-2xl my-10'>Network Fanpage</h2>
                <div className='grid lg:grid-cols-3 gap-5 p-5 md:grid-cols-2'>
                    {serviceDetail && serviceDetail.length > 0 &&
                        serviceDetail.map((item) => {
                            return (
                                <div key={item.id}
                                    className='bg-white flex justify-center p-5 rounded-md shadow-md'
                                >
                                    <a href={item.link} target='_blank'>
                                        <div>
                                            <img src={item.img} alt={item.name}
                                                className='rounded-full h-[250px] w-[250px] flex justify-center'
                                            />
                                        </div>

                                        <div className='text-center'>
                                            <p className='text-xl font-bold py-5 font-fontRoboto'>{item.name}</p>
                                            <p>Follow: {item.follow}</p>
                                            <p>Cost: {item.cost}</p>
                                        </div>

                                    </a>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default ServiceDetailPage