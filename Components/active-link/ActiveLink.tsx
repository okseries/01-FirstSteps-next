
"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'




interface Props {
    path: string;
    label: string;
}

export const ActiveLink = ({ path, label }: Props) => {

    const pathname = usePathname();

    const isActive = pathname === `/${path}`;

    


    return (
        <Link
            href={path}
            className={`link ${isActive && 'link-active'}`}
        >
            <span>{label}</span>
        </Link>
    )
}