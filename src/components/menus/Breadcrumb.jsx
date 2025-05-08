import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({itemAlignment = "justify-start"}) => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter(Boolean);

    return (
        <nav className="text-sm text-gray-600 my-4 ">
            <ol className={`hidden md:flex ${itemAlignment} text-nowrap space-x-2 px-16 lg:px-32 xl:px-56`}>
                <li>
                    <Link to="/" className="hover:text-primary-color">Home</Link>
                </li>

                {pathnames.map((segment, index) => {
                    const path = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;

                    //First letter -> caps
                    // - -> space
                    const label = segment
                        .replace(/-/g, " ")
                        .replace(/\b\w/g, char => char.toUpperCase());

                    return (
                        <li key={path} className="flex items-center">
                            <ChevronRight className="w-4 h-4 mx-1" />
                            {isLast ? (
                                <span className="text-primary-color">{label}</span>
                            ) : (
                                <Link to={path} className="hover:text-primary-color">
                                    {label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
