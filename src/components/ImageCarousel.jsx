import React from 'react';

const ImageCarousel = () => {
    return (
    <div className="max-w-[1240px] mx-auto px-4 text-black font-manrope py-4 md:py-8">
        <div className="text-center py-4">
            <p className="text-lg md:text-xl font-semibold px-2">
            Over 32k+ software businesses growing with AR Shakir
            </p>
        </div>

        {/* Desktop View - Original horizontal layout */}
        <div className="hidden md:block">
            <ul className="flex items-center justify-start gap-10">
                <li>
                    <img src="./images/image-two.png" alt="Partner logo" className="w-40 h-auto" />
                </li>
                <li>
                    <img src="./images/image-three.png" alt="Partner logo" className="w-40 h-auto" />
                </li>
                <li>
                    <img src="./images/image-four.png" alt="Partner logo" className="w-40 h-auto" />
                </li>
                <li>
                    <img src="./images/image-five.png" alt="Partner logo" className="w-40 h-auto" />
                </li>
                <li>
                    <img src="./images/image-six.png" alt="Partner logo" className="w-40 h-auto" />
                </li>
                <li>
                    <img src="./images/image-seven.png" alt="Partner logo" className="w-40 h-auto" />
                </li>
                <li>
                    <img src="./images/image-eight.png" alt="Partner logo" className="w-40 h-auto" />
                </li>
            </ul>
        </div>
        
        {/* Mobile View - Grid layout */}
        <div className="md:hidden">
            <div className="grid grid-cols-3 gap-4 place-items-center">
                <img src="./images/image-two.png" alt="Partner logo" className="w-24 h-auto" />
                <img src="./images/image-three.png" alt="Partner logo" className="w-24 h-auto" />
                <img src="./images/image-four.png" alt="Partner logo" className="w-24 h-auto" />
                <img src="./images/image-five.png" alt="Partner logo" className="w-24 h-auto" />
                <img src="./images/image-six.png" alt="Partner logo" className="w-24 h-auto" />
                <img src="./images/image-seven.png" alt="Partner logo" className="w-24 h-auto" />
                <img src="./images/image-eight.png" alt="Partner logo" className="w-24 h-auto" />
            </div>
        </div>
    </div>
    );
};

export default ImageCarousel;