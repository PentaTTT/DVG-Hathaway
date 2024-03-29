import React from 'react'
import { Contact, Partner, Service, Team } from '../component'
import banner from '../assets/banner.webp'

const ServicePage = () => {
    return (
        <section>
            <div>
                <div className='relative'>
                    <img loading='lazy' src={banner} alt="banner"
                        className='h-48 w-full object-cover brightness-[60%]'
                    />
                    <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-4xl text-2xl text-white'>CÁC GÓI DỊCH VỤ</p>
                </div>
                <Service haveTitle={true} />
                <Team />
                <Partner />
                <Contact />
            </div>
        </section>
    )
}

export default ServicePage