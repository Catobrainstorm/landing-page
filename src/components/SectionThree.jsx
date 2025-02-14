import React from 'react';

const SectionThree = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-16 font-manrope">
            <div className="text-center space-y-6">
                <h3 className="uppercase text-[#3734A9] text-sm font-semibold">
                    Testimonials
                </h3>
                <h3 className="text-3xl font-bold leading-tight">
                    Check out what our Clients are saying
                </h3>
            </div>

            <div className="flex flex-col md:flex-row items-center py-12 max-w-[1240px] mx-auto px-4 text-black relative font-manrope justify-between gap-6">
                
                
                <div className="w-full md:w-48 h-48 mb-6 md:mb-0"> 
                    <img
                        src="./images/image-nineteen.png"
                        alt=""
                        className="max-w-80 object-cover rounded-md" 
                    />
                </div>

                <div className="w-full md:w-1/2 md:ml-10 items-center mt-7">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <img src="./images/logo-one.png" alt="" className="h-15 pb-7" />
                            <img src="./images/logo-two.png" alt="" className="h-7" />
                        </div>
                        <p className="text-black-900 text-2xl leading-relaxed mt-4">
                            Is be upon sang fond must shew. Really boy law county she unable
                            her sister. Feet you off its like like six. Among sex are leave
                            law built now
                        </p>

                        <div className="mt-4 flex items-center justify-between">
                            <div>
                                <h4 className="font-semibold">AR Shakir</h4>
                                <p className="text-sm text-gray-500">CEO GetNextDesign</p>
                            </div>
                            <div>
                                <img
                                    src="./images/logo-three.png"
                                    alt="AR Shakir"
                                    className="mx-w-10 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionThree;
