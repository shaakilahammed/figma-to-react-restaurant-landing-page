import logoImage from '../assets/images/Logo.png';

const Logo = () => {
    return (
        <div className="flex items-center gap-1.5">
            <img src={logoImage} alt="Restaurant Logo" />
            <h2 className="font-poppins font-semibold text-white text-[28px]">
                Restau<span className="font-normal">rant</span>
            </h2>
        </div>
    );
};

export default Logo;
