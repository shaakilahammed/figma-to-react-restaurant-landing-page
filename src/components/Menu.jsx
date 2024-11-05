const menuList = ['Home', 'About', 'Portfolio', 'Clients', 'Blog', 'Contact'];
const Menu = () => {
    return (
        <div className="flex items-center gap-10">
            {menuList.map((item, index) => (
                <a
                    href="#"
                    key={index}
                    className="font-raleway font-medium text-[15px] text-white "
                >
                    {item}
                </a>
            ))}
        </div>
    );
};

export default Menu;
