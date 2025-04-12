const ProductCard = ({product}) => {
    

    return (
        <div className="flex flex-col w-full max-w-sm bg-white border border-gray-200 rounded-lg p-4  hover:shadow-md transition-shadow">
            <img
                className="w-full h-64 object-cover rounded-md mb-4"
                src={product.imageUrl}
                alt={product.name}
            />
            <h2 className="text-center text-lg font-semibold text-text-color mb-2">{product.name}</h2>
            <p className="text-center text-sm text-second-text-color mb-4">{product.description}</p>
            <div className="mt-auto text-center text-xl font-bold text-secondary-1 mt-auto">{product.price.toFixed(2)} ₺</div>
    </div>  
    )
}

export default ProductCard;