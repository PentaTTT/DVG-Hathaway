import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import logoImg from "/image/logoEmptyBG.png"

const Footer = ({ serviceList }) => {
    return (
        <div className='pt-10 text-white bg-gradient-to-r from-[#0d722b] to-[#6eb950]'>
            <div className='wrapper grid lg:grid-cols-4 gap-6 pb-10
                            grid-cols-1 md:grid-cols-3 md:gap-2 px-3 lg:px-0
            '>
                <div className='flex md:flex-col flex-row gap-3'>
                    <img src={logoImg} alt="logo DVG" className='object-contain lg:w-24 w-20' />
                    <div>
                        <div className='flex items-center gap-2'><FaPhone />033.33.69.444</div>
                        <div className='flex items-center gap-2 py-2'><MdOutlineEmail />dvghathawayinc@gmail.com</div>
                        <div className='flex gap-2'><HiOutlineLocationMarker className='lg:w-[14%] md:w-[12%] sm:w-[3%] w-[12%]' />
                            <p>Số 6, tổ 10, khu 1 đường Trần Hưng Đạo, thành phố Hạ Long, tỉnh Quảng Ninh</p>
                        </div>
                    </div>

                </div>

                <div className='text-center lg:text-start'>
                    <p className='text-lg font-fontRoboto font-bold'>DỊCH VỤ CỦA CHÚNG TÔI</p>
                    <ul>
                        {serviceList && serviceList.length > 0 &&
                            serviceList.map((item, index) => {
                                return <li key={index} className='mt-2'>
                                    {item.title}
                                </li>
                            })
                        }
                    </ul>
                </div>

                <div className='text-center lg:text-start lg:block hidden'>
                    <p className='text-lg font-fontRoboto font-bold'>ĐĂNG KÝ THEO DÕI NGAY</p>
                    <p className='my-3'>Đừng bỏ lỡ tin tức Marketing mới nhất. Theo dõi chúng tôi ngay hôm nay!</p>
                </div>

                <div className='mx-auto text-center lg:text-start'>
                    <p className='text-lg font-fontRoboto font-bold'>NHẬN TƯ VẤN TRỰC TIẾP</p>
                    <p className='my-3'>
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdvghathawayvietnam&tabs=timeline%2Cevent&width=270&height=270&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                            width="270" height="270"
                            style={{ border: "none", overflow: "hidden" }}
                            scrolling="no" frameBorder="0" allowFullScreen={true}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                        </iframe>
                    </p>
                </div>
            </div>
            <div className='wrapper py-5 border-t border-solid border-white'>
                <p className='text-sm text-center'>Copyright © 2024 &nbsp;
                    <a href="">DVG HATHAWAY</a>
                    . &nbsp;All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
