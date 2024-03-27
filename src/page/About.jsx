import React from 'react'
import aboutImg from '../assets/about.jpg'
import missionImg from '../assets/mission.webp'
import visionImg from '../assets/vision.webp'
import { Team } from '../component'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const nav = useNavigate()

    return (
        <div className=''>
            <div className='wrapper flex lg:flex-row flex-col-reverse gap-8 pt-5 pb-16'>
                <div className='w-full px-3 lg:px-0 lg:w-1/2'>
                    <h1 className='font-fontRoboto text-[22px]'>Giới thiệu</h1>
                    <h2 className='font-fontRoboto text-xl font-bold mt-2'>VỀ CHÚNG TÔI</h2>
                    <p className='my-2 text-sm'>Với đội ngũ nhân lực trẻ trung & trình độ cao về Digital Marketing thì DVG HATHAWAY hoàn toàn có thể giúp doanh nghiệp của bạn phát triển từ thương hiệu đến doanh thu.</p>

                    <div className='flex flex-col gap-5 mt-3'>
                        <div className='flex'>
                            <img loading='lazy' src={missionImg} alt="mission image" className='object-fit h-1/2 md:w-[45%] lg:w-[40%]' />
                            <div>
                                <h3 className='text-lg font-bold font-fontRoboto'>SỨ MỆNH</h3>
                                <p className='text-sm mt-2'>DVG HATHAWAY hướng đến việc trở thành doanh nghiệp mang giá trị đối với xã hội và cộng đồng.
                                    Góp phần đưa các sản phẩm dịch vụ của Việt Nam vươn ra thế giới.
                                </p>
                            </div>
                        </div>
                        <div className='flex'>
                            <img loading='lazy' src={visionImg} alt="vision image" className='object-fit h-1/2 md:w-[45%] lg:w-[40%]' />
                            <div>
                                <h3 className='text-lg font-bold font-fontRoboto'>TẦM NHÌN</h3>
                                <p className='text-sm mt-2'>DVG HATHAWAY mong muốn Tạo dựng thương hiệu và sức ảnh hưởng để làm
                                    bàn đạp thúc đẩy phát triển Du lịch và Bất động
                                    sản Quảng Ninh, Việt Nam.
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => nav("/service")}
                        className='bg-green px-3 py-2 rounded-md text-yellow-400 mt-5 btnEffect hover:text-yellow-400'>DỊCH VỤ</button>
                </div>
                <div className='w-full px-3 lg:px-0 lg:w-1/2'>
                    <img loading='lazy' src={aboutImg} alt="about image"
                        className='object-fit'
                    />
                </div>
            </div>

            <Team />
        </div>
    )
}

export default About