import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/Assets/images/logo.png'
import Payment from '../../public/Assets/images/icons_payment.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top py-[96px]">
                <div className="container mx-auto">
                    <div className="flex justify-center flex-col gap-4 md:flex-row">
                        <div className="w-full lg:w-1/3 md:w-1/2">
                            <Image src={Logo} alt='' />
                            <p className='my-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua</p>
                            <div className="icons flex items-center gap-[40px]">
                                <FontAwesomeIcon icon={faFacebookF} />
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faInstagram} />
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </div>
                        </div>
                        <div className="lg:w-1/4 sm:w-1/2 w-full footer-links flex flex-col gap-[12px]">
                            <h5>CATALOG</h5>
                            <Link href={'#'} className='text-[#1E2832] text-[16px] decoration-transparent'>Necklaces</Link>
                            <Link href={'#'} className='text-[#1E2832] text-[16px] decoration-transparent'>hoodies</Link>
                            <Link href={'#'} className='text-[#1E2832] text-[16px] decoration-transparent'>Jewelry Box</Link>
                            <Link href={'#'} className='text-[#1E2832] text-[16px] decoration-transparent'>t-shirt</Link>
                            <Link href={'#'} className='text-[#1E2832] text-[16px] decoration-transparent'>jackets</Link>
                        </div>
                        <div className="lg:w-1/4 sm:w-1/2 w-full footer-links flex flex-col gap-[12px]">
                            <h5>ABOUT US</h5>
                            <Link href={'#'} className='text-[#1E2832] text-[16px] decoration-transparent'>Our Producers</Link>
                            <Link href={'#'} className='text-[#1E2832] text-[16px] decoration-transparent'>Sitemap</Link>
                            <Link href={'#'} className='text-[#1E2832] text-[16px] decoration-transparent'>FAQ</Link>
                            <Link href={'#'} className='text-[#1E2832] text-[16px] decoration-transparent'>About Us</Link>
                            <Link href={'#'} className='text-[#1E2832] text-[16px] decoration-transparent'>Terms & Conditions</Link>
                        </div>
                        <div className="lg:w-1/4 sm:w-1/2 w-full footer-links flex flex-col gap-[12px]">
                            <h5>CUSTOMER SERVICES</h5>
                            <Link href={'#'} className='text-[#1E2832] text-[16px] decoration-transparent'>Contact Us</Link>
                            <Link href={'#'} className='text-[#1E2832] text-[16px] decoration-transparent'>Track Your Order</Link>
                            <Link href={'#'} className='text-[#1E2832] text-[16px] decoration-transparent'>Product Care & Repair</Link>
                            <Link href={'#'} className='text-[#1E2832] text-[16px] decoration-transparent'>Book an Appointment</Link>
                            <Link href={'#'} className='text-[#1E2832] text-[16px] decoration-transparent'>Shipping & Returns</Link>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-[#1E2832]">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center footer-bottom py-[10px]">
                        <p className='text-white text-[17px] font-light mb-0'>© 2022 Coral , Inc.</p>
                        <Image src={Payment} alt='' />
                        <Link href={"#"} className='text-white text-[17px] font-light mb-0 decoration-transparent'> Scroll on Top <FontAwesomeIcon icon={faArrowUp} /></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
