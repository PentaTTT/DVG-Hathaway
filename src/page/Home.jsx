import React, { useEffect } from 'react'
import { Banner, Service, Team, Project, Partner, Contact }
    from '../component/index'

const Home = () => {

    // useEffect(() => {
    //     const handleVisibilityChange = () => {
    //         if (document.visibilityState === 'hidden') {
    //             // Xử lý khi trang được ẩn (chuyển tab)
    //             console.log('Tab đã được chuyển đi');
    //         } else {
    //             // Xử lý khi trang được hiển thị lại (quay lại tab)
    //             console.log('Tab đã được quay lại');
    //         }
    //     };

    //     document.addEventListener('visibilitychange', handleVisibilityChange);

    //     return () => {
    //         document.removeEventListener('visibilitychange', handleVisibilityChange);
    //     };
    // }, []);

    return (
        <div className=''>
            <Banner />
            <Service haveTitle={true} />
            <Team />
            <Project />
            <Partner />
            <Contact />
        </div>
    )
}

export default Home