
//component import
import Button from "./Button";

//assets import
import CallIcon from '../../assets/svg/call.svg';
import MailIcon from '../../assets/svg/mail.svg';
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="grid grid-cols-5 gap-20">
            <div className="col-span-5 sm:col-span-2 bg-blue-700 text-white px-2 py-8 sm:py-16 rounded-[10px]">
                <div className="flex flex-col gap-6 justify-center items-center">
                    <h1 className="text-[24px] font-semibold">Any Questions About Us?</h1>
                    <p className="text-[14px] text-center w-full sm:w-[60%] ">If you have any queries or any sorts of complaints, feel free to reach out and contact us on.</p>
                    <div className="flex sm:flex-col gap-6">
                        <div className="flex flex-row gap-1 sm:gap-3 items-center">
                            <img src={CallIcon} alt="phone" />
                            <h1 className="text-[14px] sm:text-[20px] font-semibold">+91-999999999</h1>
                        </div>
                        <div className="flex flex-row gap-1 sm:gap-3 items-center">
                            <img src={MailIcon} alt="email" />
                            <h1 className="text-[14px] sm:text-[20px] font-semibold">info@Xyz.com</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-5 sm:col-span-3">
                <div className="flex flex-col justify-between  h-full">
                    <h1 className="text-[34px] font-bold text-white">Request a Call Back</h1>
                    <div className="flex flex-col gap-5 ">
                        <input placeholder="Your Email or Contact Number" className="text-[18px] rounded-[5px] py-2 px-4 border-[2.5px] border-blue-700 bg-transparent focus:border-white" />
                        <textarea placeholder="Your Message" className="text-[18px] rounded-[5px] py-2 px-4 border-[2.5px] border-blue-700 bg-transparent focus:border-white" rows={4} />
                        <Link to={`/form-submission`}>
                        <Button text="Send Message" style={{ color: '#fff', width: "100%" }} stylecustom="btnGlow"  />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;