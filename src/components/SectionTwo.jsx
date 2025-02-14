import React from 'react';

const SectionTwo = () => {
    return (
        <div className="py-8 md:py-12 max-w-[1240px] mx-auto px-4 text-black relative font-manrope">
            <div className="block justify-center text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-manrope text-slate-950" style={{ wordSpacing: '.3rem' }}>
                    Start today, with free or{' '}
                    <span className="md:hidden">premium plan, you choose</span>
                    <span className="hidden md:inline"><br /> premium plan, you choose</span>
                </h2>
                <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mt-5 md:mt-7 px-4">
                    With lots of unique and useful features, you can easily manage{' '}
                    <span className="md:hidden">your wallet easily without any problem.</span>
                    <span className="hidden md:inline"><br /> your wallet easily without any problem.</span>
                </p>
            </div>

            <div className="relative mt-7 md:mt-10">
                <img src="./images/vectorone.png" alt="Background vector" className="absolute inset-0 w-full h-full object-cover opacity-10 z-0" />
                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-9 justify-center items-center">
                        {/* Basic Plan Card */}
                        <div className="bg-white p-4 rounded-2xl shadow-2xl py-8 md:py-10 w-full md:w-auto max-w-md">
                            <h4 className="text-base py-5 md:py-9">BASIC PLAN</h4>
                            <h4 className="flex flex-wrap justify-center items-baseline">
                                <span className="text-4xl md:text-6xl">$0</span>
                                <span className="ml-2">Per month</span>
                            </h4>
                            <p className="py-6 md:py-10 text-[#757095] text-sm md:text-base px-4">
                                Joy horrible moreover man feelings own shy.{' '}
                                <span className="md:hidden">Request norland neither mistake for yet. Between the for morning assured.</span>
                                <span className="hidden md:inline"><br /> Request norland neither mistake for yet. <br /> Between the for morning assured.</span>
                            </p>

                            <hr className="mx-4" />

                            <ul className="mt-4">
                                <li className="py-2 md:py-3 text-[#757095]"> 
                                    <p className="mx-auto pt-2 pl-4 flex items-center text-sm md:text-base">
                                        <img src="./images/check-circle.png" alt="Included" className="w-5 h-5 mr-2" />
                                        Customer Support
                                    </p>
                                </li>
                                <li className="py-2 md:py-3 text-[#757095]"> 
                                    <p className="mx-auto pt-2 pl-4 flex items-center text-sm md:text-base">
                                        <img src="./images/check-circle.png" alt="Included" className="w-5 h-5 mr-2" />
                                        Free User Account
                                    </p>
                                </li>
                                <li className="py-2 md:py-3 text-[#757095]"> 
                                    <p className="mx-auto pt-2 pl-4 flex items-center text-sm md:text-base">
                                        <img src="./images/cross-circle.png" alt="Not included" className="w-5 h-5 mr-2" />
                                        Monthly Reports
                                    </p>
                                </li>
                                <li className="py-2 md:py-3 text-[#757095]"> 
                                    <p className="mx-auto pt-2 pl-4 flex items-center text-sm md:text-base">
                                        <img src="./images/cross-circle.png" alt="Not included" className="w-5 h-5 mr-2" />
                                        Multiple Devices
                                    </p>
                                </li>
                            </ul>
                            <div className="flex justify-center mt-6 md:mt-10">
                                <button className="text-[#757095] px-6 py-2 rounded-3xl hover:opacity-90 text-center border border-gray-300 items-center">
                                    Join for Free
                                </button>
                            </div>
                        </div>

                        {/* Premium Plan Card */}
                        <div className="relative mt-10 md:mt-0 w-full md:w-auto max-w-md">
                            <div className="absolute -top-3 right-4 md:-right-3 z-10">
                                <button className="bg-black text-white px-4 py-2 rounded-full text-xs md:text-sm font-bold">
                                    Best choice
                                </button>
                            </div>

                            <div className="bg-[#05796B] text-white p-4 rounded-2xl shadow-2xl py-8 md:py-10">
                                <h4 className="text-base py-5 md:py-9">PREMIUM PLAN</h4>
                                <h4 className="flex flex-wrap justify-center items-baseline">
                                    <span className="text-4xl md:text-6xl">$49</span>
                                    <span className="ml-2">per month</span>
                                </h4>
                                <p className="py-6 md:py-10 text-white text-sm md:text-base px-4">
                                    On even feet time have an no at. Relation so{' '}
                                    <span className="md:hidden">in confined smallest children unpacked delicate. Why sir end believe.</span>
                                    <span className="hidden md:inline"><br /> in confined smallest children unpacked <br /> delicate. Why sir end believe.</span>
                                </p>

                                <hr className="mx-4" />

                                <ul className="mt-4">
                                    <li className="py-2 md:py-3"> 
                                        <p className="mx-auto pt-2 pl-4 flex items-center text-sm md:text-base">
                                            <img src="./images/check-circle-green.png" alt="Included" className="w-5 h-5 mr-2" />
                                            Customer Support
                                        </p>
                                    </li>
                                    <li className="py-2 md:py-3"> 
                                        <p className="mx-auto pt-2 pl-4 flex items-center text-sm md:text-base">
                                            <img src="./images/check-circle-green.png" alt="Included" className="w-5 h-5 mr-2" />
                                            Upto 10 Users 
                                        </p>
                                    </li>
                                    <li className="py-2 md:py-3"> 
                                        <p className="mx-auto pt-2 pl-4 flex items-center text-sm md:text-base">
                                            <img src="./images/check-circle-green.png" alt="Included" className="w-5 h-5 mr-2" />
                                            Monthly Reports
                                        </p>
                                    </li>
                                    <li className="py-2 md:py-3"> 
                                        <p className="mx-auto pt-2 pl-4 flex items-center text-sm md:text-base">
                                            <img src="./images/check-circle-green.png" alt="Included" className="w-5 h-5 mr-2" />
                                            Multiple Devices Supported
                                        </p>
                                    </li>
                                </ul>

                                <div className="flex justify-center mt-6 md:mt-10">
                                    <button className="text-black px-6 py-2 rounded-3xl hover:opacity-90 text-center bg-white items-center">
                                        <p className="font-medium">
                                            Get the premium
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;