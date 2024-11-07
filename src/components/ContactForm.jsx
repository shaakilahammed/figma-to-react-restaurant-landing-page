import { BsCaretDown, BsCaretUp } from 'react-icons/bs';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Button from './Button';
const ContactForm = () => {
    return (
        <form action="#">
            <div className="grid grid-cols-2 max-w-[635px] gap-6 gap-x-[30px] pt-[45px]">
                <input
                    type="text"
                    className="px-4 py-3 bg-transparent font-roboto text-sm leading-[22px] font-normal text-white border border-[#E5E7EB] focus:outline-none placeholder:text-white"
                    placeholder="Your Name *"
                />
                <input
                    type="email"
                    className="px-4 py-3 bg-transparent font-roboto text-sm leading-[22px] font-normal text-white border border-[#E5E7EB] focus:outline-none placeholder:text-white"
                    placeholder="Your Email"
                />
                <div className="relative">
                    <input
                        type="text"
                        className="w-full px-4 py-3 bg-transparent font-roboto text-sm leading-[22px] font-normal text-white border border-[#E5E7EB] focus:outline-none placeholder:text-white"
                        placeholder="Reservation Date"
                        onFocus={(e) => (e.target.type = 'date')}
                        onBlur={(e) => (e.target.type = 'text')}
                    />
                    <FaRegCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" />
                </div>
                <div className="relative w-full">
                    <input
                        type="number"
                        className="w-full px-4 py-3 bg-transparent font-roboto text-sm leading-[22px] font-normal text-white border border-[#E5E7EB] focus:outline-none placeholder:text-white pr-10"
                        placeholder="Total People"
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col">
                        <button type="button">
                            <BsCaretUp className="text-white text-xl" />
                        </button>
                        <button type="button">
                            <BsCaretDown className="text-white text-xl" />
                        </button>
                    </div>
                </div>
                <textarea
                    className="col-span-2 h-[140px] px-4 py-3 bg-transparent font-roboto text-sm leading-[22px] font-normal text-white border border-[#E5E7EB] focus:outline-none placeholder:text-white resize-none"
                    placeholder="Message"
                />
            </div>
            <Button className="text-lg px-6 py-4 z-50 relative uppercase my-8">
                Book Now
            </Button>
        </form>
    );
};

export default ContactForm;
