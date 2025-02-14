import React from 'react';

const HeaderOne = () => {
    return (
        <div className="flex flex-col md:flex-row items-center max-w-[1240px] mx-auto px-4 text-black font-manrope">
            
            <div className="w-full md:w-1/2 md:pr-8 text-center md:text-left">
                <div>
                    <h2 className="text-lg md:text-xl leading-8 md:leading-9">Product Growth Solution in Single Platform.</h2>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-2">Managing business payments has never been easier</h1>
                    <p className="text-sm md:text-base text-[#757095] leading-6 md:leading-7 mt-4">Never at water me might. On formed merits hunted unable merely by mr whence or. Possession the unpleasing simplicity her uncommonly.</p>

                    <button className="bg-[#05796B] text-white py-2 px-6 rounded mt-6">
                        Try for Free
                    </button>
                </div>
              
                <div className="flex flex-col md:flex-row mt-8 space-y-6 md:space-y-0">
                    <div className="md:mr-8">
                        <h2 className="text-xl font-semibold leading-8">195k+ Users</h2>
                        <p className="text-xs md:text-sm text-[#757095] leading-5 md:leading-6">Delightful remarkably mr on announcing themselves entreaties favourable.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold leading-8">$400m+ Saved</h2>
                        <p className="text-xs md:text-sm text-[#757095] leading-5 md:leading-6">About to in so terms voice at. Equal an would is found seems of and concluded.</p>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <img className="w-full h-full object-cover" src='./images/image-one.png' alt="Product illustration" />
            </div>
        </div>
    )
}

export default HeaderOne;