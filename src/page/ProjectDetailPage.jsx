import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Team, Contact } from '../component/index'
import Lightbox from "react-image-lightbox";
import "./init"

const ProjectDetailPage = () => {
    const location = useLocation();
    const projectData = location.state;

    const [isOpen, setIsOpen] = useState(false)
    const [currentImg, setCurrentImg] = useState('')
    const [key, setKey] = useState(false);

    useEffect(() => { setTimeout(() => setKey(key + 1)); }, [isOpen]);

    return (
        <div>
            <div className='bg-projectBanner lg:h-[24vw] h-52 px-3'>
                <div className='wrapper flex flex-col justify-between h-full xl:pt-12 pt-5 pb-5 '>
                    <h1 className='xl:text-4xl text-2xl text-yellowColor'>{projectData.title}</h1>
                    <ul >
                        {projectData?.desc &&
                            projectData?.desc?.map((item, index) => {
                                return <li key={index} className='xl:text-base text-sm text-white'>{item}</li>
                            })
                        }
                    </ul>

                </div>
            </div>

            <div className='wrapper grid lg:grid-cols-4 md:grid-cols-2 xl:px-0 px-3 grid-cols-2 gap-3 py-10'>
                {projectData && projectData.projectImg.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className='shadow-md lg:max-h-36 max-h-[140px] overflow-hidden cursor-pointer'
                                onClick={() => { setIsOpen(true); setCurrentImg(item) }}
                            >
                                <img loading='lazy' className='' src={item} alt={index} />
                            </div>

                            {isOpen && (

                                <Lightbox
                                    className="!text-white"
                                    key={key}
                                    mainSrc={currentImg}
                                    onCloseRequest={() => setIsOpen(false)}
                                />

                            )}
                        </div>
                    )
                })}


            </div>

            <Team />
            <Contact />
        </div>
    )
}

export default ProjectDetailPage