import React from 'react'
import { Contact } from '../component'
import phoneLogo from '../assets/phone.svg'
import location from '../assets/location.svg'

const ContactPage = () => {
    return (
        <section>
            <div className='bg-gradient-to-r from-[#0d722b] to-[#6eb950]'>
                <div className='py-12 lg:pb-24 wrapper px-3 lg:px-0'>
                    <h2 className='font-fontRoboto font-semibold text-3xl text-transparent bg-gold bg-clip-text'>DVG HATHAWAY</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 pt-6'>
                        <div className='flex gap-11 p-5 pb-24 bg-lightGray shadow-lg'>
                            <div className='w-2/3'>
                                <h3 className='text-green text-xl mb-5'>Hotline:</h3>
                                <p className='mb-[5px]'>Hostline: 033 33 69 444</p>
                                <p>Email: dvghathawayinc@gmail.com</p>
                            </div>
                            <div className='w-1/3'>
                                <img src={phoneLogo} alt='phone' />
                            </div>
                        </div>

                        <div className='flex gap-11 p-5 pb-16 bg-lightGray shadow-lg'>
                            <div className='w-2/3'>
                                <h3 className='text-green text-xl mb-5'>Văn phòng - Hạ Long</h3>
                                <p className='mb-[5px]'>Số 6, tổ 10, khu 1 đường Trần Hưng Đạo, thành phố Hạ Long, tỉnh Quảng Ninh</p>
                                <p>Email: dvghathawayinc@gmail.com</p>
                            </div>
                            <div className='w-1/3'>
                                <img src={location} alt='location' />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Contact />
        </section >
    )
}

export default ContactPage