import React from 'react'
import { Banner, Service, Team, Project, Partner, Contact }
    from '../component/index'

const Home = () => {

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