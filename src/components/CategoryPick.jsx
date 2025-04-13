import ShopCard from "./Cards/ShopCard";

const CategoryPick = () => {
    return(
        <div className="flex flex-col sm:grid sm:grid-rows-2 grid-flow-col mx-32 my-16 gap-8 sm:max-h-[600px]">
            <div className="row-span-2 h-full">
                <ShopCard 
                    imageUrl="https://images.unsplash.com/photo-1556905055-8f358a7a47b2"
                    title="Women"
                    description="Spring'25"/>
            </div>
            <ShopCard 
                imageUrl="https://images.unsplash.com/photo-1479064555552-3ef4979f8908"
                title="Men"
                description="Spring'25"/>
            <ShopCard 
                imageUrl="https://images.unsplash.com/photo-1705869213986-cc8dc227fae4"
                title="Home"
                description=""/>
        </div>
    

    )
}

export default CategoryPick;

