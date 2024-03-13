import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Team, Contact } from '../component/index'
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
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
                <div className='wrapper flex flex-col justify-between h-full lg:pt-24 pt-8 pb-8 '>
                    <h1 className='text-4xl text-yellowColor'>{projectData.title}</h1>
                    <p className='text-xl text-white'>{projectData.type}</p>
                </div>
            </div>

            <div className='wrapper grid lg:grid-cols-4 md:grid-cols-2 lg:px-0 px-3 grid-cols-2 gap-3 py-10'>
                {projectData && projectData.projectImg.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className='shadow-md lg:max-h-36 max-h-[140px] overflow-hidden cursor-pointer'
                                onClick={() => { setIsOpen(true); setCurrentImg(item) }}
                            >
                                <img className='' src={item} alt={index} />
                            </div>

                            {isOpen && (
                                <Lightbox
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