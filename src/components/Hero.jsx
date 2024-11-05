import flowerImage from '../assets/images/flower.png';
import heroImage from '../assets/images/hero.jfif';
import offerImage from '../assets/images/Offer.png';
import Button from './Button';
const Hero = () => {
    return (
        <div className="container">
            <div className="relative h-[939px] flex items-center">
                <div className="">
                    <div className="bg-title-text-gradiant z-50 relative w-[830px]">
                        <span className="font-bebas text-[120px] text-white font-medium uppercase leading-[130px] backdrop-blur-[44px]">
                            Taste the authentic
                        </span>
                        <br />
                        <span className="font-bebas text-[120px] text-white font-medium uppercase leading-[130px] backdrop-blur-[44px]">
                            Saudi cuisine
                        </span>
                    </div>
                    <div className="w-[559px]">
                        <p className="font-roboto font-normal text-2xl text-white mt-[16px] mb-[38px]">
                            Among the best Saudi chefs in the world, serving you
                            something beyond flavor.
                        </p>
                    </div>

                    <Button className="text-lg px-6 py-4 z-50 relative">
                        EXPLORE MENU
                    </Button>
                </div>
                <div className="absolute top-[130px] right-0 z-40">
                    <img
                        src={heroImage}
                        alt="Hero Image"
                        className="w-[700px] h-[649px] object-cover max-w-full scale-x-[-1]"
                    />
                    <img
                        src={flowerImage}
                        alt="Flower Image"
                        className="absolute top-[-33px] right-[-28px] w-[45px] h-[45px] max-w-full"
                    />
                    <div className="absolute bg-[#FEC519] rounded-full bottom-[2px] right-[-52px] w-[120px] h-[120px] flex justify-center items-center shadow-[0_8px_9px_0px_#00000040]">
                        <img
                            src={offerImage}
                            alt="Offer Image"
                            className="w-[87%] h-[87%]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
