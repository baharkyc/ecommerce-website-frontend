import CategoryCard from "../cards/CategoryCard";
import { useSelector } from "react-redux";


const CategoryBanner = () => {

  const categories = useSelector((state) => state.product.categories);

  const topCategories = (categories || [])
    .sort((a, b) => b.rating - a.rating) // Descending based on rating
    .slice(0, 6); // First 6 top category to map

  return (
    <section className="w-full px-8 md:px-16 lg:px-32 xl:px-56 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">

        {topCategories.map((category) => {

          const genderPath = category.gender === "k" ? "kadin" : "erkek";
          const categoryPath = category.code.split(":")[1];

          return (
            <CategoryCard
              key={category.id}
              gender={category.gender === "k" ? "Women" : "Men"}
              name={category.title}
              to={`/shop/${genderPath}/${categoryPath}/${category.id}`}
              imageUrl={category.img}
            />
          )
        })}

      </div>
    </section>
  );
};

export default CategoryBanner;
