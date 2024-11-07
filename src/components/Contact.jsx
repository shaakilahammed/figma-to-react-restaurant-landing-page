import contactImage from '../assets/images/contact_bg.jfif';
import ContactForm from './ContactForm';
const Contact = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${contactImage})`,
                backgroundSize: '100%',
            }}
        >
            <div className="container py-[120px] max-h-[788px]">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-[16px]">
                        <div className="flex items-center gap-2.5">
                            <div className="w-2.5 h-2.5 bg-[#BD1F17]"></div>
                            <span className="text-[#BD1F17] font-roboto text-xl font-bold">
                                Book Now
                            </span>
                        </div>
                        <h3 className="font-bebas font-medium text-[62px] leading-[62px] text-white uppercase">
                            Book Your Table
                        </h3>
                        <span className="text-[#F7F8F9] font-roboto text-base font-normal max-w-[500px]">
                            Enim tempor eget pharetra facilisis sed maecenas
                            adipiscing. Eu leo molestie vel, ornare non id
                            blandit netus.
                        </span>
                    </div>
                    <ContactForm />
                </div>
            </div>
            ;
        </div>
    );
};

export default Contact;
