import React from 'react'

const Project = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 font-manrope">
            <div className="text-center space-y-6">
                <h4 className="uppercase text-[#F57059] text-sm font-semibold">Project Management App</h4>
                <h3 className="text-3xl font-bold leading-tight">
                    Download our app and start your free trial <br />to get started today!
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    End-to-end payments and financial management in a single solution.
                </p>
                
                <div className="flex justify-center  mt-8">
                    <button className="inline-block"> 
                        <img src="./images/image-fifteen.png" alt="App Store" className="h-12 mb-[65px]" />
                    </button>
                    <button className="inline-block"> 
                        <img src="./images/image-sixteen.png" alt="Google Play" className="h-[130px]" />
                    </button>
                </div>
            </div>            
        </div>
    )
}

export default Project
