"use client"
import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../public/Assets/images/logo.png'
import Image from 'next/image';

function Header() {

    return (
        <header className='header px-[20px] pt-8 container mx-auto'>
            <div className='header-top pb-[30px] border-b-2 border-b-[#E3E3E3]  flex justify-between items-center'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='w-[20px]' />
                <div className='logo'>
                    <Link href={"#"}>
                        <Image src={Logo} width={150} height={150} alt='' />
                    </Link>
                </div>
                <div className='flex items-center gap-[23px] header-top-items'>
                    <div className='flex items-center gap-[8px]'>
                        <FontAwesomeIcon icon={faUser} />
                        <p className='text-[#1E2832] mb-0'>Account</p>
                    </div>
                    <div className='flex items-center gap-[8px]'>
                        <FontAwesomeIcon icon={faBagShopping} />
                        <p className='text-[#1E2832] mb-0'>Shopping</p>
                    </div>
                </div>
            </div>
            <div className="pt-6 mx-auto justify-center none md:flex">
                <nav>
                    <ul className="nav-items none p-0 md:justify-center md:gap-[47px] md:flex md:items-center">
                        <li className="nav-link">
                            <Link href={"#"} className='text-[#1E2832] decoration-transparent font-medium text-[16px]' >Jewelry & Accessories</Link>
                        </li>
                        <li className="nav-link">
                            <Link href={"#"} className='text-[#1E2832] decoration-transparent font-medium text-[16px]'>Clothing & Shoes</Link>
                        </li>
                        <li className="nav-link">
                            <Link href={"#"} className='text-[#1E2832] decoration-transparent font-medium text-[16px]' >Home & Living</Link>
                        </li>
                        <li className="nav-link">
                            <Link href={"#"}  className='text-[#1E2832] decoration-transparent font-medium text-[16px]'>Wedding & Party</Link>
                        </li>
                        <li className="nav-link">
                            <Link href={"#"}  className='text-[#1E2832] decoration-transparent font-medium text-[16px]'>Toys & Entertainment</Link>
                        </li>
                        <li className="nav-link">
                            <Link href={"#"} className='text-[#1E2832] decoration-transparent font-medium text-[16px]' >Art & Collectibles</Link>
                        </li>
                        <li className="nav-link">
                            <Link href={"#"}  className='text-[#1E2832] decoration-transparent font-medium text-[16px]'>Craft Supplies & Tools</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
