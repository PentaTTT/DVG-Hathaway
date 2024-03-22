import React from 'react'
import videoBg from "/image/video_service.mp4"

import { serviceBooking } from '../ultils/serviceDetail'

const BookingService = () => {
    return (
        <div>
            <div className='relative'>

                <video src={videoBg} loop muted autoPlay playsinline
                    className='w-full lg:h-[24vw] object-cover shadow-md'
                />

                <div className='absolute lg:top-[45%] top-[40%] lg:left-48 left-5'>
                    <h1 className='font-fontRoboto lg:text-3xl text-2xl text-yellowColor'>Dịch Vụ Booking KOL KOC</h1>
                    <p className='my-3'></p>
                </div>
            </div>

            <div className='wrapper py-10'>
                <h2 className='text-center text-green font-bold font-fontRoboto text-2xl my-10'>Booking KOL KOC</h2>
                <div className=''>
                    {serviceBooking && serviceBooking.length > 0 &&
                        serviceBooking.map(item => {
                            return <div key={item.id} className='pt-10'>
                                <h2 className='text-lg font-bold pt-5'>{item.name}</h2>
                                <p className='pb-5'>{item.desc}</p>
                                <div className='flex gap-5'>
                                    {item.img?.length > 0 && item.img.map((item, index) => {
                                        return <div key={index}>
                                            <img src={item} className='object-cover max-h-[400px] shadow-md' />
                                        </div>
                                    })}
                                </div>
                            </div>
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default BookingService