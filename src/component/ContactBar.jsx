import React from 'react'
import { FaFacebookMessenger } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const ContactBar = () => {
    return (
        <div className='fixed lg:bottom-[200px] lg:left-[50px] bottom-3 right-3 w-fit lg:w-[40px]'>
            <ul className='flex justify-center items-center md:flex-col gap-5 md:py-5 md:px-2 py-2 px-5 bg-white rounded-md'>
                <li>
                    <a href="https://www.messenger.com/t/dvghathawayvietnam" target='_blank'>
                        <FaFacebookMessenger className='text-lightGreen w-6 h-6' />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/dvghathawayvietnam" target='_blank'>
                        <FaPhoneAlt className='text-lightGreen w-6 h-6' />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/dvghathawayvietnam" target='_blank'>
                        <IoMdMail className='text-lightGreen w-6 h-6' />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default ContactBar