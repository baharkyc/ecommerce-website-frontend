const DropdownMenu = ({ menuItems }) => {
    return (
        <div className="absolute top-full left-0 bg-white shadow-lg py-6 px-8 hidden group-hover:flex flex-row gap-8 z-50 min-w-[200px] justify-between text-nowrap">
            {menuItems.map((category, index) => {
                const categoryName = Object.keys(category)[0];
                const items = category[categoryName];

                return (
                    <div key={index} className="text-s font-semibold space-y-2">
                        <p className="mb-2">{categoryName}</p>
                        {items.map((item, id) => (
                            <a
                                key={id}
                                href="#"
                                className="block font-medium text-second-text-color hover:text-primary-color"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export default DropdownMenu;
