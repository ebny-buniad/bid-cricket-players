import React from 'react';
import bannerImage from '../../assets/banner-main.png'
const Banner = ({ handelCredit }) => {
    const bannerImgClasses = 'mx-auto pt-[5%] pb-10'
    const sectionClasses = 'container mx-auto rounded-2xl mt-22 text-white text-center space-y-3'
    return (
        <>
            <div className={sectionClasses} id='hero-background'>
                <img className={bannerImgClasses} src={bannerImage} alt="" />
                <h2 className='text-4xl font-semibold'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='text-2xl text-gray-400'>Beyond Boundaries Beyond Limits</p>
                <button onClick={() => handelCredit()} className='credit-button'><span className='border-4 px-5 py-3 rounded-xl'>Claim Free Credit</span></button>
            </div>

        </>
    );
};

export default Banner;