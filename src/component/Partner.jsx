import React from 'react'

const Partner = () => {
    const listPartner = [
        {
            name: 'Vinfast',
            img: '/image/partner/vinfast.png'
        },
        {
            name: 'PNJ',
            img: '/image/partner/pnj.png'
        },
        {
            name: 'Samsung',
            img: '/image/partner/samsung.png'
        },
        {
            name: 'VNG',
            img: '/image/partner/vng.png'
        },
        {
            name: 'Thế giới di động',
            img: '/image/partner/thegioididong.png'
        },
        {
            name: 'Zalo Pay',
            img: '/image/partner/zalopay.png'
        },
        {
            name: 'Traveloka',
            img: '/image/partner/traveloka.png'
        },
        {
            name: 'Shopee',
            img: '/image/partner/shopee.png'
        },
    ]

    return (
        <div className=' text-center lg:py-24 py-12 bg-gradient-to-r from-white to-bgCream'>
            <div className='wrapper'>
                <h3 className='text-green text-2xl font-fontRoboto font-bold mb-3'>Đối tác tiêu biểu</h3>
                <p className=''>chúng tôi được tin tưởng bởi</p>
                <div className='grid lg:grid-cols-4 gap-1 max-w-[1000px] mx-auto pt-16
                                grid-cols-1 px-3 lg:px-0 sm:grid-cols-2'
                    data-aos="zoom-in-up" data-aos-duration="2000"
                >

                    {listPartner && listPartner.length > 0 &&
                        listPartner.map((item) => {
                            return <div key={item.name} className='w-full h-full relative
                                before:border-solid before:border-l-2 before:border-t-2 before:absolute lg:before:w-[25%] lg:before:h-[30%] 
                                before:left-0 before:top-0 before:border-green before:transition-all before:ease-in-out before:duration-[300ms]
                                after:border-solid after:border-r-2 after:border-b-2 after:absolute lg:after:w-[25%] lg:after:h-[30%]
                                after:right-0 after:bottom-0 after:border-green after:transition-all after:ease-in-out after:duration-[300ms]
                                hover:before:w-full hover:before:h-full hover:after:w-full hover:after:h-full group
                                before:w-full before:h-full after:w-full after:h-full
                                '>

                                <div className='w-[220px] h-[130px] mx-auto'>
                                    <img className='object-cover p-3 mx-auto w-auto h-full group-hover:scale-110 transition-all ease-in-out duration-[300ms]'
                                        src={item.img} alt={item.name} />
                                </div>

                            </div>
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Partner