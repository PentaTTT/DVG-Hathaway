import React, { useState } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { BsChevronDown } from "react-icons/bs";
import MobileMenu from './MobileMenu';
import { useNavigate } from 'react-router-dom';
import logoDVG from '../../public/image/logoEmptyBG.png'

const Navbar = () => {
    const navItems = [
        { name: "TRANG CHỦ", link: "/" },
        { name: "GIỚI THIỆU", link: "/about" },
        { name: "DỊCH VỤ", link: "/service" },
        { name: "DỰ ÁN", link: "/project" },
        { name: "LIÊN HỆ", link: "/contact" },
    ]
    const nav = useNavigate()


    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const navActive = 'text-lime-800 before:absolute before:w-full before:-bottom-[30px] before:border-b-4 before:border-solid before:boder-green'
    const navNotActive = 'hover:text-lime-800 hover:before:absolute hover:before:w-full hover:before:-bottom-[30px] hover:before:border-b-4 hover:before:border-solid hover:before:boder-green'

    return (
        <div className='bg-bgCream fixed w-full z-50 lg:px-0 px-2 shadow-sm'>
            <div className='wrapper flex items-center justify-between'>
                <div className="">
                    <img src={logoDVG} alt="logo" className='lg:w-24 lg:h-24 w-20 cursor-pointer'
                        onClick={() => nav("/")}
                    />
                </div>

                {/* menu */}
                <div>
                    <ul className='hidden lg:flex items-center gap-8 cursor-pointer'>
                        {navItems && navItems.length > 0 &&
                            navItems.map((item) => {
                                return <li key={item.name} className='relative flex items-center text-lg text-green'>
                                    <NavLink to={item.link}
                                        className={({ isActive }) => isActive ? navActive : navNotActive}
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            })
                        }

                        <button className='h-24 bg-green text-white px-5 text-lg btnEffect'
                            onClick={() => nav("/contact")}
                        >
                            Liên hệ ngay <FaLongArrowAltRight className='inline-block text-xl' /></button>
                    </ul>
                </div>
                {/* mobile menu */}
                <div
                    className='
                        lg:hidden
                        flex
                        flex-row
                        items-center
                        gap-2
                        ml-8
                        cursor-pointer
                        relative
                        hover:text-gray-300
                    '
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                    <p className='text-green text-xl'>Menu</p>
                    <BsChevronDown className={`text-green transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
                    <MobileMenu visible={showMobileMenu} navItems={navItems} />
                </div>
            </div>
        </div >
    )
}

export default Navbar