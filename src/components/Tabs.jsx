import { useState } from 'react';
import cellIcon from '../assets/images/call-alt.png';
import Button from './Button';
const data = [
    {
        id: 1,
        name: 'About',
        title: 'Exceptional culinary experience and delicious food',
        desc: 'At our establishment, we believe in celebrating the art of food. Our chefs are dedicated to crafting dishes that honor traditional flavors while embracing modern culinary techniques. Each plate tells a story of passion, culture, and the pursuit of excellence. We invite you to join us on a journey through authentic tastes and exceptional quality.',
    },
    {
        id: 2,
        name: 'Experience',
        title: 'Crafting Unforgettable Dining Moments',
        desc: 'With years of expertise in the culinary field, our team has honed the craft of creating memorable dining experiences. From the ambiance of our venue to the careful selection of every ingredient, we strive to deliver moments that go beyond just a meal. Step into our world, where dining is an art, and every guest is part of our culinary family.',
    },
    {
        id: 3,
        name: 'Contact',
        title: 'Get in Touch with Us',
        desc: 'We would love to hear from you! For reservations, private events, or general inquiries, please don’t hesitate to reach out. Our team is here to ensure you have an exceptional experience from the moment you get in touch with us. Call us today at +88 3426 739 485 or email us at contact@culinaryexperience.com. We look forward to serving you!',
    },
];

const Tabs = () => {
    const [selectedTab, setSelectedTab] = useState(data[0]);
    return (
        <div className="flex flex-col gap-8">
            <div className="flex border-b border-[#B52B1D]">
                {data.map((item) => (
                    <button
                        key={item?.id}
                        className={`px-4 py-1.5 ${
                            selectedTab?.id === item?.id
                                ? 'bg-[#B52B1D] text-white'
                                : 'text-[#333333]'
                        } font-inter font-normal text-sm`}
                        onClick={() => setSelectedTab(item)}
                    >
                        {item?.name}
                    </button>
                ))}
            </div>
            <div className="flex flex-col gap-[18px]">
                <h3 className="font-bebas text-[62px] leading-[62px] font-medium text-[#181818]">
                    {selectedTab?.title}
                </h3>
                <p className="text-[#333333] font-roboto font-normal text-base">
                    {selectedTab?.desc}
                </p>
            </div>

            <div className="flex gap-8 items-center">
                <Button className="text-lg px-6 py-4 z-50 relative uppercase">
                    About More
                </Button>
                <div className="flex gap-2 items-center">
                    <img className="h-6 w-6" src={cellIcon} alt="cell" />
                    <span className="font-roboto font-semibold text-lg">
                        +88 3426 739 485
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
