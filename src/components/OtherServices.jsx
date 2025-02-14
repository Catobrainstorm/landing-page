import React from 'react';

const OtherServices = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-4 text-black font-manrope py-8">
            <div className="text-center mb-8">
                <h4 className="uppercase text-black-900 text-xs">OUR SERVICES</h4>
                <h2 className="text-3xl font-bold">Save Time Managing Your Business <br /> With Our Best Services</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white p-4 rounded shadow-md">
                    <img src="./images/ui-checks-grid.png" alt="" className="mb-2 pt-4 pl-4 " />
                    <h3 className="font-semibold text-black p-4">Project <br /> Management</h3>
                    <p className="text-xs text-[#757095] pb-4 pl-4">30 options available</p>
                </div>

                <div className="bg-white p-4 rounded shadow-md">
                    <img src="./images/vector-pen.png" alt="" className="mb-2 pt-4 pl-4" />
                    <h3 className="font-semibold text-black p-4">Web & Mobile <br /> Development</h3>
                    <p className="text-xs text-[#757095] pb-4 pl-4">40 options available</p>
                </div>

                <div className="bg-white p-4 rounded shadow-md">
                    <img src="./images/headset.png" alt="" className="mb-2 pt-4 pl-4" />
                    <h3 className="font-semibold text-black p-4">Customer <br /> Marketing</h3>
                    <p className="text-xs text-[#757095] pb-4 pl-4">17 options available</p>
                </div>

                <div className="bg-white p-4 rounded shadow-md">
                    <img src="./images/people.png" alt="" className="mb-2 pt-4 pl-4" />
                    <h3 className="font-semibold text-black p-4">Human <br /> Resources</h3>
                    <p className="text-xs text-[#757095] pb-4 pl-4">21 options available</p>
                </div>

                <div className="bg-white p-4 rounded shadow-md">
                    <img src="./images/gem2.png" alt="" className="mb-2 pt-4 pl-4" />
                    <h3 className="font-semibold text-black p-4">Design & <br /> Creatives</h3>
                    <p className="text-xs text-[#757095] pb-4 pl-4">13 options available</p>
                </div>

                <div className="bg-white p-4 rounded shadow-md">
                    <img src="./images/lighting.png" alt="" className="mb-2 pt-4 pl-4" />
                    <h3 className="font-semibold text-black p-4">Marketing & <br /> Communication</h3>
                    <p className="text-xs text-[#757095] pb-4 pl-4">27 options available</p>
                </div>

                <div className="bg-white p-4 rounded shadow-md">
                    <img src="./images/briefcase.png" alt="" className="mb-2 pt-4 pl-4" />
                    <h3 className="font-semibold text-black p-4">Business <br /> Development</h3>
                    <p className="text-xs text-[#757095] pb-4 pl-4">22 options available</p>
                </div>

                <div className="bg-[#05796B] text-white p-4 rounded shadow-md">
                    <h4 className="font-semibold p-4 text-3xl">+4 <br /> More</h4>
                    <p className="text-xs pb-4 pl-4">170+ options available</p>
                </div>
            </div>
        </div>
    )
}

export default OtherServices;
