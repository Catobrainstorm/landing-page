import React from 'react';

const SectionOne = () => {
    return (
        <div className="flex flex-col md:flex-row items-center py-8 md:py-12 max-w-[1240px] mx-auto px-4 text-black relative font-manrope">
            {/* Mobile View (image above text) */}
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"> 
                <img 
                  src="./images/image-seventeen.png" 
                  alt="Product illustration" 
                  className="w-full max-w-sm md:max-w-lg" 
                /> 
            </div>
            
            {/* Content section */}
            <div className="w-full md:w-1/2 md:ml-8 flex flex-col justify-center text-center md:text-left">  
                <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                    My little garret repair to {' '}
                    <span className="md:hidden">desire he esteem.</span>
                    <span className="hidden md:inline">desire he esteem.</span>
                </h2>

                <h4 className="mb-6 tracking-wide leading-relaxed text-sm md:text-base" style={{ color: '#757095', wordSpacing: '.2rem' }}>
                    Just like we said before, we have tons of {' '}
                    <span className="md:hidden">features that will help you to manage your wallet. From income, outcome, monthly usage, and etc.</span>
                    <span className="hidden md:inline">features that will help you to manage your <br /> wallet. From income, outcome, monthly usage, <br /> and etc.</span>
                </h4>
                
                <div className="mt-4 flex justify-center md:justify-start">
                    <button>
                        <img 
                          src="./images/image-eighteen.png" 
                          alt="Download button" 
                          className="h-20 md:h-[130px]" 
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SectionOne;