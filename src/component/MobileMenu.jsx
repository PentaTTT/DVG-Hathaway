import React from 'react'
import { Link } from 'react-router-dom';

const MobileMenu = ({ visible, navItems }) => {
    const linkClass = 'text-center text-green hover:underline hover:text-lime-800'

    if (!visible) {
        return null;
    }
    return (
        <div
            className='
            bg-bgCream
            w-56
            absolute
            top-8
            right-0
            py-5
            flex
            flex-col
            border-2
            border-slate-300
        '>
            <div className='flex flex-col gap-4'>
                {navItems?.length > 0 &&
                    navItems.map((item) => {
                        return <Link className={linkClass} to={item.link}>{item.name}</Link>
                    }
                    )
                }
            </div>
        </div>
    )
}

export default MobileMenu