import React from 'react'

const Contact = () => {
    // background: white;
    // background - image: radial - gradient(black 1px, transparent 0);
    // background - size: 40px 40px;
    // background - position: -19px - 19px;
    const inputCss = 'lg:w-[30%] w-5/6 p-3 rounded-md'

    return (

        <div className='lg:py-24 py-12' data-aos="fade-up" data-aos-duration='2000'>
            <div className='text-center '>
                <h3 className='text-green text-2xl font-fontRoboto font-bold mb-3'>Let's Work Together</h3>
                <p className='lg:w-1/2 w-5/6 mx-auto'>Gửi yêu cầu về mục tiêu Marketing của doanh nghiệp để được tư vấn hình thức quảng cáo phù hợp nhất một cách nhanh chóng</p>
            </div>

            <div className='pt-7 mx-auto text-center'>
                <form className="flex flex-col gap-7" action="">
                    <div>
                        <label htmlFor=""></label>
                        <input className={inputCss} type="text" placeholder='Họ và tên (*)' />
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input className={inputCss} type="text" placeholder='Số điện thoại (*)' />
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input className={inputCss} type="text" placeholder='Email của bạn (*)' />
                    </div>
                    <div>
                        <textarea className={inputCss}
                            name="" id="" cols="30" rows="7" placeholder='Lời nhắn'>
                        </textarea>
                    </div>
                    <button className='bg-green btnEffect mx-auto p-3 rounded-md flex items-center text-yellow-400 hover:text-yellow-400' type='submit'>GỬI LIÊN HỆ</button>
                </form>
            </div>

        </div>
    )
}

export default Contact