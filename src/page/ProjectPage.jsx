import React from 'react'
import { Contact, Project, Team } from '../component'

const ProjectPage = () => {

    return (
        <div>
            <div className='bg-projectBanner xl:h-[24vw] h-[250px] text-center'>
                <p className='text-white text-4xl font-fontRoboto xl:pt-40 pt-24'>Các dự án nổi bật</p>
            </div>
            <Project />
            <Team noteam={true} />
            <Contact />
        </div>
    )
}

export default ProjectPage