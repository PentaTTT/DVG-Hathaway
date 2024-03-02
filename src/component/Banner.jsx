import React from 'react'
import missionImg from '../assets/su-menh.svg'
import visionImg from '../assets/tam-nhin.svg'
import banner from "../assets/banner.webp"

const Banner = () => {
    return (
        <section className='relative'>
            <div className=''>
                <img className='object-cover md:h-full h-[250px] w-full brightness-[60%]'
                    src={banner} alt="banner" />
            </div>

            <div className='wrapper'>
                <div className='absolute top-10 lg:top-[15%] mx-5 lg:mx-0'>
                    <h1 data-aos="fade-right" data-aos-duration="2000"
                        className='text-2xl md:text-5xl lg:text-7xl font-fontRoboto bg-gold text-transparent bg-clip-text z-10 '>DVG HATHAWAY</h1>
                    <p data-aos="fade-down" data-aos-duration="2500"
                        className='text-sm md:text-sm lg:text-lg text-white mt-5 lg:mt-12 w-full md:w-3/4 lg:w-[40%]'>Với đội ngũ nhân lực có trình độ chuyên môn cao, DVG HATHAWAY tự hào mang đến một tư duy hoàn toàn mới trong lĩnh vực truyền thông marketing. Cùng với sứ mệnh gắn kết các doanh nghiệp với khách hàng của họ, đội ngũ Marketing sáng tạo của chúng tôi sẽ giúp nâng tầm thương hiệu mạnh mẽ cho khách hàng</p>
                </div>
                <div data-aos="fade-down" data-aos-duration="2500"
                    className='wrapper lg:absolute -bottom-16 lg:grid lg:grid-cols-3 gap-5
                                flex flex-col p-3
                '>
                    <div className=''></div>
                    <div className='text-center rounded-xl shadow-xl bg-bgCream p-8'>
                        <img src={missionImg} alt="su menh" className='object-cover mx-auto' />
                        <h3 className='text-2xl text-green py-3'>Sứ mệnh</h3>
                        <p>Hướng đến việc trở thành doanh nghiệp mang giá trị đối với xã hội và cộng đồng.
                            Góp phần đưa các sản phẩm dịch vụ của Việt Nam vươn ra thế giới.</p>
                    </div>
                    <div className='text-center rounded-xl shadow-xl bg-bgCream p-8'>
                        <img src={visionImg} alt="tam nhin" className='object-cover mx-auto' />
                        <h3 className='text-2xl text-green py-3'>Tầm nhìn</h3>
                        <p>Mong muốn Tạo dựng thương hiệu và sức ảnh hưởng để làm
                            bàn đạp thúc đẩy phát triển Du lịch và Bất động
                            sản Quảng Ninh, Việt Nam.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Banner