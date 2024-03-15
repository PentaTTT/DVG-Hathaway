import React, { useState } from 'react'

const Contact = () => {
    const inputCss = 'lg:w-[30%] w-5/6 p-3 rounded-md'

    const [error, setError] = useState({})
    const [formData, setFormData] = useState({
        "Họ tên": '',
        "SĐT": '',
        "Email": '',
        "Lời nhắn": ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if (!formData['Họ tên'].trim()) {
            validationErrors['Họ tên'] = 'Hãy nhập họ tên!'
        }
        if (!formData['SĐT'].trim()) {
            validationErrors['SĐT'] = 'Hãy nhập số điện thoại!'
        }
        if (!formData['Email'].trim()) {
            validationErrors['Email'] = 'Hãy nhập email!'
        } else if (!/\S+@\S\.\S+/.test(formData['Lời nhắn'])) {
            validationErrors['Lời nhắn'] = 'Email không hợp lệ!'
        }

        setError(validationErrors)
        if (Object.keys(validationErrors).length === 0) {
            alert("Gửi form thành công!")
            setFormData({
                "Họ tên": '',
                "SĐT": '',
                "Email": '',
                "Lời nhắn": ''
            })
        }
    }
    return (

        <div className='lg:py-24 py-12' data-aos="fade-up" data-aos-duration='2000'>
            <div className='text-center '>
                <h3 className='text-green text-2xl font-fontRoboto font-bold mb-3'>Let's Work Together</h3>
                <p className='lg:w-1/2 w-5/6 mx-auto'>Gửi yêu cầu về mục tiêu Marketing của doanh nghiệp để được tư vấn hình thức quảng cáo phù hợp nhất một cách nhanh chóng</p>
            </div>

            <div className='pt-7 mx-auto text-center'>
                <form className="flex flex-col gap-7" method='POST'
                    //onSubmit={handleSubmit}
                    action="https://script.google.com/macros/s/AKfycby544lCjtb9ZIJux2Kq_qc7VhrcpwR2b1vUoS5TTI13DyC4JW30FwwFYrv5nkKmCHVcIA/exec"
                >
                    <div>
                        <label htmlFor=""></label>
                        <input className={inputCss} name='Họ tên' type="text" placeholder='Họ và tên (*)'
                            onChange={handleChange}
                        />
                        {error['Họ tên'] && <div className='text-red-600'>{error['Họ tên']}</div>}
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input className={inputCss} name='SĐT' type="text" placeholder='Số điện thoại (*)' onChange={handleChange} />
                        {error['SĐT'] && <div className='text-red-600'>{error['SĐT']}</div>}
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input className={inputCss} name='Email' type="text" placeholder='Email của bạn (*)' onChange={handleChange} />
                        {error['Email'] && <div className='text-red-600'>{error['Email']}</div>}
                    </div>
                    <div>
                        <textarea className={inputCss}
                            name="Lời nhắn" id='' cols="30" rows="7" placeholder='Lời nhắn' onChange={handleChange}>
                        </textarea>
                    </div>
                    <button className='bg-green btnEffect mx-auto p-3 rounded-md flex items-center text-yellow-400 hover:text-yellow-400' type='submit'
                    //onClick={handleSubmit}
                    >GỬI LIÊN HỆ</button>
                </form>
            </div>

        </div>
    )
}

export default Contact