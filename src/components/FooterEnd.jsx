import React from 'react';

const FooterEnd = () => {
    return (
        <div className="footer flex flex-col md:flex-row justify-between items-start md:items-center h-auto md:h-24 max-w-[1240px] mx-auto mt-20 md:mt-60  md:mb-32 px-4 text-black relative font-manrope">
            {/* Column 1: AR Shakir */}
            <div className="mb-8 md:mb-0">
                <ul>
                    <li>
                        <h3 className="font-semibold text-black p-4">AR Shakir</h3>
                    </li>
                    <li>
                        <p className="text-sm text-gray-600 max-w-xs mx-auto p-4">
                            Finance Helps Companies manages payments easily
                        </p>
                    </li>
                    <li>
                        <img src="./images/logo-four.png" alt="" className="p-4 w-20" /> {/* Adjusted image width */}
                    </li>
                </ul>
            </div>

            {/* Column 2: Company */}
            <div className="mb-4 md:mb-0">
                <ul>
                    <li>
                        <h3 className="font-semibold text-black p-4">Company</h3>
                    </li>
                    <li className="text-sm text-slate-900 pt-4 pl-4">About Us</li>
                    <li className="text-sm text-slate-900 pt-4 pl-4">Careers</li>
                    <li className="text-sm text-slate-900 pt-4 pl-4">Blog</li>
                    <li className="text-sm text-slate-900 pt-4 pl-4">Pricing</li>
                </ul>
            </div>

            {/* Column 3: Products */}
            <div className="mb-4 md:mb-0">
                <ul>
                    <li>
                        <h3 className="font-semibold text-black p-4">Products</h3>
                    </li>
                    <li className="text-sm text-slate-900 pt-4 pl-4">Invoicing</li>
                    <li className="text-sm text-slate-900 pt-4 pl-4">Contract</li>
                    <li className="text-sm text-slate-900 pt-4 pl-4">Accounting</li>
                    <li className="text-sm text-slate-900 pt-4 pl-4">Proposal</li>
                </ul>
            </div>

            {/* Column 4: Resources */}
            <div className="mb-4 md:mb-0">
                <ul>
                    <li>
                        <h3 className="font-semibold text-black p-4">Resources</h3>
                    </li>
                    <li className="text-sm text-slate-900 pt-4 pl-4">Proposal Template</li>
                    <li className="text-sm text-slate-900 pt-4 pl-4">Invoice Template</li>
                    <li className="text-sm text-slate-900 pt-4 pl-4">Tutorial</li>
                    <li className="text-sm text-slate-900 pt-4 pl-4">How to write a Contract</li>
                </ul>
            </div>

            {/* Column 5: Contact Us */}
            <div className="mb-0">
                <ul>
                    <li>
                        <h3 className="font-semibold text-black p-4">Contact Us</h3>
                    </li>
                    <li className="text-sm text-slate-900 flex items-center pl-4"> {/* Added flex and items-center */}
                        <img src="./images/email.png" alt="Email" className="mr-2 w-4 h-4" /> {/* Adjusted image size */}
                        <a href="mailto:shakir260@gmail.com">shakir260@gmail.com</a> {/* Added mailto link */}
                    </li>
                    <li className="text-sm text-slate-900 pt-4 pl-4 flex items-center"> {/* Added flex and items-center */}
                        <img src="./images/call.png" alt="Call" className="mr-2 w-4 h-4" /> {/* Adjusted image size */}
                        <a href="tel:+92-300-848-8985">+92-300-848-8985</a> {/* Added tel link */}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FooterEnd;
