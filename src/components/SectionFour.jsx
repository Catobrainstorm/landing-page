import React from 'react';

const SectionFour = () => {
    return (
        <div className="max-w-4xl mt-24 md:mt-[350px] mx-auto px-4 py-8 md:py-1 h-auto md:h-[350px] w-full md:w-[1000px] font-manrope bg-[#05796B] rounded-xl flex items-center justify-center">
            <div className="text-center">
                <h3 className="mb-4 text-white text-3xl md:text-5xl font-semibold leading-snug">
                    Discover a better way to <br className="hidden md:block" /> manage purchases
                </h3>
                <button className="bg-[#FF7F5C] text-white px-6 py-2 rounded-3xl mt-6 md:mt-10 hover:opacity-90">
                    <p className="p-2">Get Started Now</p>
                </button>
            </div>
        </div>
    );
};

export default SectionFour;
