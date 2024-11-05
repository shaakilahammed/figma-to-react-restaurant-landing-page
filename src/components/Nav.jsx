import Button from './Button';
import Logo from './Logo';
import Menu from './Menu';

const Nav = () => {
    return (
        <div className="container">
            <div className="flex justify-between items-center h-[108px]">
                <div className="flex gap-[60px]">
                    <Logo />
                    <Menu />
                </div>
                <Button className="text-base px-6 py-2.5 z-10">
                    BOOK A TABLE
                </Button>
            </div>
        </div>
    );
};

export default Nav;
