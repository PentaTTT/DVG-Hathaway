import React from 'react'
import fbLogo from '../assets/facebook.svg'
import igLogo from '../assets/instagram.svg'
import ytLogo from '../assets/youtube.svg'

const ContactBar = () => {
    return (
        <div className='fixed lg:bottom-[200px] lg:left-[50px] bottom-3 right-3 w-fit lg:w-[40px]'>
            <ul className='flex md:flex-col gap-3'>
                <li>
                    <a href="https://www.facebook.com/dvghathawayvietnam" target='_blank'>
                        <img src={fbLogo} alt="facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/dvghathawayvietnam" target='_blank'>
                        <img src={igLogo} alt="facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/dvghathawayvietnam" target='_blank'>
                        <img src={ytLogo} alt="facebook" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default ContactBar