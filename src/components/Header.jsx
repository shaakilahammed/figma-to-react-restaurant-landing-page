import heroBg from '../assets/images/hero-bg.png';
import Hero from './Hero';
import Nav from './Nav';
const Header = () => {
    return (
        <div className="relative bg-header-linear-gradiant">
            <Nav />
            <Hero />
            <div
                className="absolute inset-0 bg-center bg-repeat opacity-12 pointer-events-none"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'auto',
                }}
            ></div>
        </div>
    );
};

export default Header;
