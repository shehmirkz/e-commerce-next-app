import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import BannerImage from '../../public/Assets/images/Hero-image.png'


function Hero() {
    return (
        <section className='hero-section bg-[#F4F4F5] md:px-[70px]'>
            <Header />
            <div className="container mx-auto flex py-24 md:flex-row flex-col  banner-content">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mt-[50px] md:mb-0 items-center banner-text">
                    <h1 className="text-[4.3rem] font-light">Collections
                    </h1>
                    <p className="mt-[40px] text-[28px] font-light lg:leading-loose">you can explore ans shop many differnt collection
                        from various barands here.</p>
                    <button className='mt-[40px] px-[26px] py-[19px] text-[17px] text-white bg-[#1E2832]'> <FontAwesomeIcon icon={faBagShopping} /> Shop Now </button>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image src={BannerImage} alt='' />
                </div>
            </div>
        </section>
    )
}

export default Hero
