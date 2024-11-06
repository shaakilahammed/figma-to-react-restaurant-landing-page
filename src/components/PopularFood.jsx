import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PopularSideImage from '../assets/images/popular_side.png';

const foods = [
    {
        id: 1,
        name: 'Vegetables burger',
        desc: 'Barbecue Italian cuisine pizza',
        image: '/burger.jfif',
    },
    {
        id: 2,
        name: 'Spacial Pizza ',
        desc: 'Barbecue Italian cuisine pizza',
        image: '/pizza.png',
    },
    {
        id: 3,
        name: 'Spacial French fries ',
        desc: 'Barbecue Italian cuisine',
        image: '/fries.jfif',
    },
    {
        id: 4,
        name: 'Cuisine Chicken',
        desc: 'Japanese Cuisine Chicken',
        image: '/chicken.jfif',
    },
];

const PopularFood = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="container py-[120px] bg-[#FBF7F2]">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-[18px]">
                        <div className="flex items-center gap-2.5">
                            <div className="w-2.5 h-2.5 bg-[#BD1F17]"></div>
                            <span className="text-[#BD1F17] font-roboto text-xl font-bold">
                                Crispy, Every Bite Taste
                            </span>
                        </div>
                        <h3 className="font-bebas font-medium text-[62px] leading-[62px] text-[#181818]">
                            POPULAR FOOD ITEMS
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
                <div className="grid grid-cols-4 gap-8 pt-[60px]">
                    {foods.map((item) => (
                        <div
                            key={item?.id}
                            className="flex flex-col items-center bg-white p-8 gap-4"
                        >
                            <img
                                className="h-[120px] "
                                src={item?.image}
                                alt={item?.name}
                            />
                            <div className="w-[57px] h-1 bg-[#BD1F17]"></div>
                            <div className="flex flex-col items-center">
                                <h3 className="uppercase font-bebas text-2xl font-medium text-[#0A1425]">
                                    {item?.name}
                                </h3>
                                <span className="font-inter text-base leading-[32px] font-normal text-[#0A1425] tracking-[-0.20px]">
                                    {item?.desc}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <img
                className="absolute top-[150px] left-[-372px] z-10 rotate-[-72deg]"
                src={PopularSideImage}
                alt="PopularSideImage"
            />
        </div>
    );
};

export default PopularFood;
