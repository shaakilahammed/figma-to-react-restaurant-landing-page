import deliveryImage from '../assets/images/delivery.png';
import diningImage from '../assets/images/dining.png';
import fastImage from '../assets/images/fast.png';

const Services = () => {
    return (
        <div className="grid grid-cols-3 pt-[80px]">
            <div className="flex gap-4">
                <div className="flex justify-center items-center w-[90px] h-[90px] rounded-full bg-white shadow-[0_7px_16px_0px_#0000001A]">
                    <img src={fastImage} alt="fast delivery" />
                </div>
                <div className="flex flex-col gap-0.5 justify-center">
                    <h3 className="uppercase font-bebas font-medium text-[30px] text-[#0A1425]">
                        fast delivery
                    </h3>
                    <span className="font-inter font-light text-xl leading-8 tracking-[-0.30px]">
                        Within 30 minutes
                    </span>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="flex justify-center items-center w-[90px] h-[90px] rounded-full bg-white shadow-[0_7px_16px_0px_#0000001A]">
                    <img src={diningImage} alt="fast delivery" />
                </div>
                <div className="flex flex-col gap-0.5 justify-center">
                    <h3 className="uppercase font-bebas font-medium text-[30px] text-[#0A1425]">
                        absolute dining
                    </h3>
                    <span className="font-inter font-light text-xl leading-8 tracking-[-0.30px]">
                        Best buffet restaurant
                    </span>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="flex justify-center items-center w-[90px] h-[90px] rounded-full bg-white shadow-[0_7px_16px_0px_#0000001A]">
                    <img src={deliveryImage} alt="fast delivery" />
                </div>
                <div className="flex flex-col gap-0.5 justify-center">
                    <h3 className="uppercase font-bebas font-medium text-[30px] text-[#0A1425]">
                        pickup delivery
                    </h3>
                    <span className="font-inter font-light text-xl leading-8 tracking-[-0.30px]">
                        Grab your food order
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Services;
