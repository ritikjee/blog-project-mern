import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <div className="flex items-center py-20 bg-[#8EFBDAA3] justify-center">
                <div className='max-w-7xl w-full px-7 flex flex-col sm:flex-row items-center justify-between'>
                    <div>
                        <p className="text-[32px] font-bold pb-[10px]">Sign up for Newsletter </p>
                        <p className="text-[16px]">Get the latest news and updates from Horizon</p>
                    </div>
                    <div className="flex flex-col sm:flex-row max-w-[600px]  items-center gap-5">
                        <input type="text" placeholder="Your email address" className="bg-white  w-full px-[20px] py-[10px] rounded-lg" />
                        <button className="bg-[#2270E2] text-white px-[20px] py-[10px] rounded-full">Subscribe</button>
                    </div>

                </div>
            </div>
            <div className="flex items-center py-[72px] justify-center">
                <div className='max-w-7xl w-full px-7 flex flex-col gap-10 sm:gap-0 sm:flex-row items-center justify-center sm:justify-between'>
                    <div className="flex gap-3">
                        <FaFacebook className="text-blue-700" />
                        <FaTwitter className="text-blue-700" />
                        <FaInstagram className="text-blue-700" />
                    </div>
                    <div>
                        <div className="text-[20px] flex-col flex items-center justify-center font-bold pb-10">
                            Company
                        </div>
                        <div className="text-16px">
                        <p>About</p>
                        <p>Contact</p>
                        </div>
                    </div>
                    <div>
                        <div className="text-[20px] flex flex-col items-center justify-center font-bold pb-10">
                            Legal
                        </div>
                        <div className="text-16px">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Code of Conduct</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer