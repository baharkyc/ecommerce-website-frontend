import CategoryCard from "../Cards/CategoryCard";
import categories from "../../data/categories.json"


const CategoryBanner = () => {
  return (
    <section className="w-full px-8 md:px-16 lg:px-32 xl:px-56 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
        {categories.map((cat, i) => (
          <CategoryCard
            key={i}
            name={cat.name}
            imageUrl={cat.imageUrl}
            href={cat.href}
            count={cat.count}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryBanner;
