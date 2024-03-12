import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { serviceList } from '../ultils/serviceDetail'
import { path } from '../ultils/constant'

const Service = ({ haveTitle }) => {
    const [isHover, setIsHover] = useState({ id: null, status: false })
    const nav = useNavigate()

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
                    serviceList.map((item) => {
                        return <div key={item.id} className='text-center min-h-[280px] bg-white hover:shadow-2xl ease-in-out duration-200'
                            onMouseEnter={() => { setIsHover({ id: item.id, status: true }) }}
                            onMouseLeave={() => { setIsHover({ id: null, status: false }) }}
                            onClick={() => {
                                item.id && item.id === 3 ?
                                    nav(path.SERVICEDETAIL)
                                    :
                                    nav(path.SERVICE2DETAIL, { state: item })
                            }}
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
