import callImage from '../assets/images/call.png';
import clockImage from '../assets/images/clock.png';
import faceookImage from '../assets/images/faceook.png';
import footerImage from '../assets/images/footer.jpg';
import instagramImage from '../assets/images/instagram.png';
import linkedinImage from '../assets/images/linkedin.png';
import locationImage from '../assets/images/location.png';
import messageImage from '../assets/images/message.png';
import xImage from '../assets/images/x.png';

const Footer = () => {
    return (
        <div
            className="relative bg-center bg-cover"
            style={{
                backgroundImage: `url(${footerImage})`,
            }}
        >
            <div className="absolute inset-0 bg-black/80 pointer-events-none"></div>
            <div className="relative container py-[120px]">
                <h2 className="font-bebas font-medium text-[62px] leading-[64px] text-white uppercase text-center pb-[60px]">
                    We ready to have you the best dining experiences
                </h2>
                <div className="grid grid-cols-4 pb-[120px]">
                    <div className="flex flex-col gap-6 items-center">
                        <img src={clockImage} alt="clock" />
                        <h3 className="uppercase font-bebas font-medium text-2xl leading-7 text-white text-center tracking-widest">
                            Opening hours
                        </h3>
                        <span className="font-roboto text-base leading-[25px] font-light text-[#F7F8F9] text-center">
                            Monday - Sunday <br /> 9:00 AM to 11:30 PM
                        </span>
                    </div>
                    <div className="flex flex-col gap-5 items-center">
                        <img src={callImage} alt="clock" />
                        <h3 className="uppercase font-bebas font-medium text-2xl leading-7 text-white text-center">
                            LET&apos;S TALK
                        </h3>
                        <span className="font-roboto text-base leading-[25px] font-light text-[#F7F8F9] text-center">
                            Phone: 1-800-222-4545 <br /> Fax: 1-800-222-4545
                        </span>
                    </div>
                    <div className="flex flex-col gap-5 items-center">
                        <img src={messageImage} alt="clock" />
                        <h3 className="uppercase font-bebas font-medium text-2xl leading-7 text-white text-center">
                            BOOK A TABLE
                        </h3>
                        <span className="font-roboto text-base leading-[25px] font-light text-[#F7F8F9] text-center">
                            Email: demo@website.com <br /> Support:
                            support@website.com
                        </span>
                    </div>
                    <div className="flex flex-col gap-5 items-center">
                        <img src={locationImage} alt="clock" />
                        <h3 className="uppercase font-bebas font-medium text-2xl leading-7 text-white text-center">
                            Our Address
                        </h3>
                        <span className="font-roboto text-base leading-[25px] font-light text-[#F7F8F9] text-center">
                            123 Stree New York City, <br /> United States Of
                            America.
                        </span>
                    </div>
                </div>
                <div className="flex justify-center gap-6">
                    <a
                        href="#"
                        className="flex justify-center items-center w-[54px] h-[54px] rounded-full border-[1.25px] border-[#E5E7EB]"
                    >
                        <img src={faceookImage} alt="faceook" />
                    </a>
                    <a
                        href="#"
                        className="flex justify-center items-center w-[54px] h-[54px] rounded-full border-[1.25px] border-[#E5E7EB]"
                    >
                        <img src={xImage} alt="x" />
                    </a>
                    <a
                        href="#"
                        className="flex justify-center items-center w-[54px] h-[54px] rounded-full border-[1.25px] border-[#E5E7EB]"
                    >
                        <img src={instagramImage} alt="instagram" />
                    </a>
                    <a
                        href="#"
                        className="flex justify-center items-center w-[54px] h-[54px] rounded-full border-[1.25px] border-[#E5E7EB]"
                    >
                        <img src={linkedinImage} alt="linkedin" />
                    </a>
                </div>
                <h4 className="text-center font-montserrat text-[21px] leading-[26px] font-light text-white pt-6 tracking-wider">
                    © 2023 All Rights Reserved
                </h4>
            </div>
        </div>
    );
};

export default Footer;
