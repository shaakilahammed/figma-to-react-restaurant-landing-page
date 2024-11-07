import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { RiDoubleQuotesL } from 'react-icons/ri';
import menImage from '../assets/images/men.png';
import TestimonialLeftImage from '../assets/images/testimonial.png';
import TestimonialDesingImage from '../assets/images/testimonial_design.png';
import TestimonialRightImage from '../assets/images/testimonial_right.png';
const Testimonial = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="container py-[120px] ">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-[18px]">
                        <div className="flex items-center gap-2.5">
                            <div className="w-2.5 h-2.5 bg-[#BD1F17]"></div>
                            <span className="text-[#BD1F17] font-roboto text-xl font-bold">
                                Crispy, Every Bite Taste
                            </span>
                        </div>
                        <h3 className="font-bebas font-medium text-[62px] leading-[62px] text-[#181818] uppercase">
                            What Some of my Customers Say
                        </h3>
                    </div>
                    <div className="flex gap-8">
                        <button className="flex justify-center items-center w-[60px] h-[60px] rounded-[75px] bg-white shadow-[0_0px_13.64px_0px_#0000001A]">
                            <FaChevronLeft className="text-[#0A1425] h-5" />
                        </button>
                        <button className="flex justify-center items-center w-[60px] h-[60px] rounded-[75px] bg-white shadow-[0_0px_13.64px_0px_#0000001A]">
                            <FaChevronRight className="text-[#BD1F17] h-5" />
                        </button>
                    </div>
                </div>
                <div className="flex mt-[60px] h-[556px]">
                    <div className="bg-[#FEBF00] w-[556px] py-[19px] relative">
                        <div className="h-full px-[84px] py-[72px]">
                            <div className="flex h-full">
                                <RiDoubleQuotesL className="text-[80px] mt-[-40px]" />
                                <div className="flex flex-col h-full justify-between">
                                    <p className="font-roboto text-xl font-normal leading-[34px] text-[#0A1425]">
                                        You can&apos;t go wrong with Chicken
                                        Mandi, I had it twice. The chicken was
                                        cooked perfectly, juicy & soft (usually
                                        mandi chicken is a bit dry). I would
                                        defiantly recommend it.
                                    </p>
                                    <div className="flex justify-between">
                                        <div className="border-b border-[#0A1425] w-full pb-[14px]">
                                            <h3 className="font-bebas font-medium text-lg leading-[20px] text-[#0A1425]">
                                                Khalid Al Dawsry
                                            </h3>
                                            <span className="font-roboto text-sm leading-[14px] text-[#333333] font-normal">
                                                Jeddah, Saudi
                                            </span>
                                        </div>
                                        <div className="border-b-4 border-[#BD1F17] pb-[14px]">
                                            <img
                                                src={menImage}
                                                className="w-10 h-10 object-cover rounded-full"
                                                alt="men"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img
                            className="absolute top-[420px] left-[1px] z-10 "
                            src={TestimonialDesingImage}
                            alt="TestimonialDesingImage"
                        />
                    </div>
                    <div className="flex-grow h-[556px] z-10">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/7SJh6vNR7jI?si=_L1_2ZMLz146HA_p&amp;controls=0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
            <img
                className="absolute top-[168px] left-[-154px] z-10 rotate-[-87deg]"
                src={TestimonialLeftImage}
                alt="TestimonialLeftImage"
            />
            <img
                className="absolute top-[485px] right-[-200px] rotate-[35deg]"
                src={TestimonialRightImage}
                alt="TestimonialRightImage"
            />
        </div>
    );
};

export default Testimonial;
