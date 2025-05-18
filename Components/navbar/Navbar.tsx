
import Link from 'next/link'
import React from 'react'
import { HomeIcon } from '@primer/octicons-react'
import { ActiveLink } from '../active-link/ActiveLink'


const navItems = [
    { path: 'about', label: 'About' },
    { path: 'pricing', label: 'Pricing' },
    { path: 'contact', label: 'Contact' },
]

export const NavBar = () => {


    return (
        <div
            className='flex items-center px-4 bg-blue-800 bg-opacity-30 text-white absolute top-0 w-full h-[4rem]'
        >

            <Link href='/' className='flex items-center px-2 text-blue-200 hover:text-blue-400 active:text-fuchsia-500'>
                <HomeIcon size={24} />
                <span >Home</span>
            </Link>


            <div className='flex-1'></div>

            {
                navItems.map(item => (
                    <ActiveLink key={item.path}  {...item} />
                ))
            }

        </div>
    )
}
