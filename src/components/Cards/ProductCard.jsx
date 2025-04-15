import { Circle } from "lucide-react"

export const ProductCardBordered = ({product}) => {


    return (
        <div className="w-full h-full max-w-sm bg-white border border-gray-200 rounded-lg p-4  hover:shadow-md transition-shadow">
            <img
                className="w-full h-64 object-cover rounded-md mb-4"
                src={product.imageUrl}
                alt={product.name}
            />
            <h2 className="text-center text-lg font-semibold text-text-color mb-2">{product.name}</h2>
            <p className="text-center text-sm text-second-text-color mb-4">{product.description}</p>
            <div className="mt-auto text-center text-xl font-bold text-secondary-1">{product.price.toFixed(2)} ₺</div>
    </div>  
    )
}

export const ProductCardNoBorder = ({product}) => {


    return (
        <div className="w-full h-full bg-white p-4  hover:shadow-md transition-shadow ">
            <img
                className="w-full h-64 object-cover mb-4 border-gray-100 border-1"
                src={product.imageUrl}
                alt={product.name}
            />
            <h2 className="text-center text-lg font-semibold text-text-color mb-2">{product.name}</h2>
            <p className="text-center text-xs font-semibold text-second-text-color mb-4">{product.category}</p>
            <div className="mt-auto text-center text-xl font-bold text-secondary-1">{product.price.toFixed(2)} ₺</div>
            <div className="mt-2 flex justify-center space-x-2">
                <Circle fill="#23856D" className="h-6"/>
                <Circle fill="#ffffff" className="h-6"/>
            </div>

    </div>  
    )
}
