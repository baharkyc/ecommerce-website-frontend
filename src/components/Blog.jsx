import PostCard from "./Cards/PostCard";


const Blog = () => {

    return (
        <section className="w-full px-6 md:px-16 py-12 bg-gray-50">
            {/* HEADER */}
            <div className="text-center mb-12 max-w-2xl mx-auto">
                <p className="text-sm text-primary-color tracking-wide uppercase mb-2">Inspire</p>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                    HAVE YOU SEEN OUR BLOG?
                </h2>
                <p className="text-sm text-gray-600">
                     Tips and tricks for creating a style from scratch.
                </p>
            </div>

            {/* BLOG GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mx-16 lg:mx-32 mx-32">
                <PostCard
                name={"Summer Style"}
                department={"Summer Vibes"}
                imageUrl={
                    "https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                description={
                    "Embrace the essence of summer with effortless style. From breezy linens to vibrant patterns, our summer collection is designed to keep you cool, comfortable, and confident."
                }
                />
                <PostCard
                name={"Neutral Tones"}
                department={"Minimal Looks"}
                imageUrl={
                    "https://images.pexels.com/photos/13722068/pexels-photo-13722068.jpeg?auto=compress&cs=tinysrgb&w=800"
                }
                description={"Create a calming look with earthy, soft-toned essentials."}
                />
            </div>
        </section>
        
    )
}

export default Blog;