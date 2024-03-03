import React, { useState } from 'react'
import tiktokLogo from '../assets/partner/tiktok.png'
import tiktokHoverLogo from '../assets/partner/tiktok-hover.png'

const Service = ({ haveTitle }) => {
    const [isHover, setIsHover] = useState({ id: null, status: false })

    const serviceList = [
        {
            id: 1,
            img: 'https://agency.mauthemewp.com/wp-content/uploads/2021/09/dich-vu-5.png',
            imgHover: 'https://agency.mauthemewp.com/wp-content/uploads/2021/09/hover-dich-vu-5.png',
            title: 'Quản trị Fanpage',
            sub: [
                'Quản lý Fanpage', 'Content', 'Facebook Ads'
            ]
        },
        {
            id: 2,
            img: 'https://agency.mauthemewp.com/wp-content/uploads/2021/09/dich-vu-4.png',
            imgHover: 'https://agency.mauthemewp.com/wp-content/uploads/2021/09/hover-dich-vu-4.png',
            title: 'SEO Website',
            sub: [
                'Tư Vấn & Xây Dựng Website', 'SEO Website', 'Mua Tên Miền'
            ]
        },
        {
            id: 3,
            img: 'https://agency.mauthemewp.com/wp-content/uploads/2021/09/dich-vu-2.png',
            imgHover: 'https://agency.mauthemewp.com/wp-content/uploads/2021/09/hover-dich-vu-2.png',
            title: 'Network Fanpage',
            sub: [
                'Booking Hot Page', 'Đăng Ảnh & Video', 'Post Bài'
            ]
        },
        {
            id: 4,
            img: tiktokLogo,
            imgHover: tiktokHoverLogo,
            title: 'Xây Kênh Tiktok',
            sub: [
                'Tư Vấn Xây Kênh Tiktok', 'Sản Xuất Content', 'Quản Lý Kênh'
            ]
        },
        {
            id: 5,
            img: 'https://agency.mauthemewp.com/wp-content/uploads/2021/09/dich-vu-1.png',
            imgHover: 'https://agency.mauthemewp.com/wp-content/uploads/2021/09/hover-dich-vu-1.png',
            title: 'Partnership',
            sub: [
                'Kết Nối Khách Hàng Với Các Kênh Truyền Thông', 'Booking Hot Page', 'Truyền Thông Số Tích Hợp'
            ]
        },
        {
            id: 6,
            img: 'https://agency.mauthemewp.com/wp-content/uploads/2021/09/dich-vu-6.png',
            imgHover: 'https://agency.mauthemewp.com/wp-content/uploads/2021/09/hover-dich-vu-6.png',
            title: 'Dịch Vụ Thiết Kế',
            sub: [
                'Thiết Kế Logo', 'Thiết Kế Banner', 'Thiết Kế Các Ấn Phẩm In Ấn'
            ]
        },
    ]


    return (
        <div className='wrapper lg:my-24 my-12'>
            {haveTitle &&
                <h1 className='lg:text-4xl text-2xl text-green text-center'>DỊCH VỤ</h1>
            }
            <p className='text-base text-center lg:mt-9 mt-5'>Cung cấp các giải pháp truyền thông</p>
            <div className='mt-12 lg:mx-0 grid lg:grid-cols-3 gap-7 transition
                            md:grid-cols-2 grid-cols-1 mx-3
            '>
                {serviceList && serviceList.length > 0 &&
                    serviceList.map((item, index) => {
                        return <div key={index} className='text-center min-h-[280px] bg-white hover:shadow-2xl ease-in-out duration-200'
                            onMouseEnter={() => { setIsHover({ id: item.id, status: true }) }}
                            onMouseLeave={() => { setIsHover({ id: null, status: false }) }}
                            data-aos="flip-left" data-aos-duration='2000'
                        >
                            {isHover.status === true && isHover.id === item.id ?
                                <img src={item.imgHover} alt="img service"
                                    className='object-fit mx-auto mt-5'
                                />
                                :
                                <img src={item.img} alt="img service"
                                    className='object-fit mx-auto mt-5'
                                />
                            }
                            <h3 className='font-fontRoboto font-bold my-6'>{item.title}</h3>
                            <ul>
                                {item.sub && item.sub.length > 0 &&
                                    item.sub.map((sub, index) => {
                                        return <li key={index} className='text-sm'>
                                            {sub}
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    })

                }
            </div>
        </div>
    )
}

export default Service
