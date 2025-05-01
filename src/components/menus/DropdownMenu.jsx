import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const DropdownMenu = ({ categories }) => {

    const history = useHistory();

    if (!categories || categories.length === 0) {
        console.log("DropdownMenu: categories empty or undefined.");
        return null; // Don't render.
    }

    const categoryTranslations = {
        "Tişört": "T-Shirt",
        "Ayakkabı": "Shoes",
        "Ceket": "Jacket",
        "Elbise": "Dress",
        "Etek": "Skirt",
        "Gömlek": "Shirt",
        "Kazak": "Sweater",
        "Pantalon": "Pants"
        };

    const categoriesGrouped = {
        Women: categories.filter((cat) => cat.gender === "k"),
        Men: categories.filter((cat) => cat.gender === "e"),
    };

    return (
        <div className="absolute top-full left-[-50px] bg-white shadow-lg py-6 px-12 hidden group-hover:flex flex-row gap-32 z-50 min-w-[200px] justify-between text-nowrap">
            {Object.entries(categoriesGrouped).map(([mainCategory, categories], index) => {
                
                return (
                    <div key={index} className="text-s space-y-4 ">
                        <p className="mb-2 font-bold ">{mainCategory}</p>
                        {categories.map((category) => {

                            const genderPath = category.gender === "k" ? "kadin" : "erkek";
                            const categoryPath = category.code.split(":")[1];
                            
                            return ( 
                                <Link
                                    key={category.id}
                                    to={`/shop/${genderPath}/${categoryPath}/${category.id}`}
                                    className="block font-semibold text-second-text-color hover:text-primary-color"
                                >
                                    {categoryTranslations[category.title] || category.title}
                                </Link>)
                        })}
                    </div>
                    
                );
            })}
        </div>
    );
};

export default DropdownMenu;
