import React from 'react'
import teamImg from '/image/team-img.webp'

const Team = () => {
    const projectList = [
        {
            name: 'Hợp tác với',
            total: '30 +',
            content: 'doanh nghiệp trong nước và quốc tế'
        },
        {
            name: 'Tăng trung bình',
            total: '55 %',
            content: 'độ nhận diện thương hiệu của khách hàng trên truyền thông'
        },
        {
            name: 'Chi tiêu hơn',
            total: '300 +',
            content: 'chiến dịch quảng cáo trên toàn cầu'
        },
        {
            name: 'Hỗ trợ',
            total: '12 +',
            content: 'doanh nghiệp từ lúc khởi nghiệp đến khi phát triển'
        },

    ]

    return (
        <section className='lg:py-24 py-12 bg-teamBg bg-auto bg-center bg-fixed' >
            <div className='wrapper'>
                <div className="text-center"
                    data-aos="fade-down" data-aos-duration="1500"
                >
                    <h2 className='font-fontRoboto lg:text-4xl text-2xl text-white'>ĐỘI NGŨ</h2>
                    <p className='text-white mt-8 mb-11'>Đội ngũ của chúng tôi chính là đội ngũ của bạn. Chúng tôi ở đây, đồng hành cùng doanh nghiệp bạn!</p>
                </div>
                <div className='flex lg:flex-row flex-col justify-center gap-16 lg:p-0 p-3'>
                    <img src={teamImg} alt="team image" className='lg:w-1/2 '
                        data-aos="fade-right" data-aos-duration="2000"
                    />
                    <div className='text-white flex flex-col gap-5'
                        data-aos="fade-left" data-aos-duration="2000"
                    >
                        <p>Với đội ngũ trẻ trung và có trình độ cao trong lĩnh vực Digital Marketing, chúng tôi tự hào mang đến một tư duy hoàn toàn mới cho Quảng cáo trực tuyến.</p>
                        <p>Đối với mỗi khách hàng, chúng tôi tạo ra một concept độc đáo khác nhau để truyền tải thông điệp và thể hiện cảm xúc của thương hiệu. Dù là một thương hiệu nổi tiếng hay là thương hiệu mới gia nhập thị trường, bạn luôn đặc biệt và chúng tôi tin vào tiềm năng phát triển to lớn của doanh nghiệp của bạn.</p>
                        <p>Với DVG HATHAWAY, bạn sẽ có cảm nhận hoàn toàn khác về cách mà chúng tôi làm Marketing trong thời đại công nghệ số, từ RESEARCH, BRAINSTORM, hoạch định PROPOSAL chi tiết cho từng chiến dịch đến việc triển khai quảng cáo bài bản.</p>
                    </div>
                </div>

                {/* Thành tựu */}
                <h3 className='text-2xl font-bold font-fontRoboto text-center lg:mt-24 mt-12 text-white'>Thành Tựu</h3>
                <p className='text-center text-base w-3/4 text-white mt-3 mx-auto'>Với hàng ngàn chiến dịch được triển khai thành công cùng các doanh nghiệp trong nước lẫn quốc tế,
                    hãy cùng chúng tôi đưa thương hiệu đến gần hơn với khách hàng bắt đầu từ giờ!</p>
                <div className='grid lg:grid-cols-4 gap-16 mt-10 text-white z-10
                                grid-cols-1 sm:grid-cols-2 px-3 lg:px-0
                '>
                    {projectList && projectList.length > 0 &&
                        projectList.map((item) => {
                            return <div key={item.name} className='relative z-20'>
                                <div className='after:-z-10 text-center
                                    after:absolute after:w-20 after:h-20 after:left-1 after:top-0 after:border-solid after:border-4 after:border-gray' >
                                    <p className='mb-4'>{item.name}</p>
                                    <span className='text-5xl bg-gold text-transparent bg-clip-text'>{item.total}</span>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Team