import React from 'react'
import { useLocation } from 'react-router-dom'

const ProjectDetailPage = () => {
    const location = useLocation();
    const projectData = location.state

    console.log(projectData)
    return (
        <div>
            <div className='bg-projectBanner lg:h-[24vw] h-52 px-3'>
                <div className='wrapper flex flex-col justify-between h-full lg:pt-24 pt-8 pb-8 '>
                    <h1 className='text-4xl text-yellowColor'>{projectData.title}</h1>
                    <p className='text-xl text-white'>{projectData.type}</p>
                </div>
            </div>
            <div className='wrapper grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-3 py-10'>
                {projectData && projectData.projectImg.map((item, index) => {
                    return (
                        <div key={item.id} className=''>
                            <img src={item} alt={index} />
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ProjectDetailPage