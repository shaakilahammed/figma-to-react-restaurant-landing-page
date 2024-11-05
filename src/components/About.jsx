import AboutImage from '../assets/images/AboutImage.jfif';
import AboutSideImage from '../assets/images/about_side.png';
import contentImage from '../assets/images/content.png';
import Services from './Services';
import Tabs from './Tabs';
const About = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="container py-[120px]">
                <div className="flex justify-between gap-20 relative">
                    <img
                        className="w-[600px] object-cover"
                        src={AboutImage}
                        alt="About Image"
                    />
                    <div className="absolute top-[30px] left-[24px] h-[130px] w-[240px] bg-white rounded-[20px] z-10 flex justify-center items-center">
                        <img src={contentImage} alt="content" />
                    </div>

                    <Tabs />
                </div>
                <Services />
            </div>
            <img
                className="absolute top-[410px] right-[-230px]  z-10 rotate-[-22deg]"
                src={AboutSideImage}
                alt="AboutSideImage"
            />
        </div>
    );
};

export default About;
