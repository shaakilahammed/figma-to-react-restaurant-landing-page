// eslint-disable-next-line react/prop-types
const Button = ({ children, className }) => {
    return (
        <button
            className={`bg-[#FEBF00] font-roboto text-[#0A1425] font-bold ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
