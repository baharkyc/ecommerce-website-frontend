import PageContent from "../layout/PageContent";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Clients from "../components/banners/Clients";
import CategoryBanner from "../components/Banners/CategoryBanner";
import ListProducts from "../components/ListProducts"
import clothes from "../data/clothes.json"
import categories from "../data/categories.json"
import ProductFilterRow from "../components/ProductFilterRow";

import { useState } from "react";
import Breadcrumb from "../components/menus/Breadcrumb";

const ShopPage = () => {
    const [viewMode, setViewMode] = useState("grid");

    return (
        <div>
            <Header />
            <PageContent>
                <Breadcrumb/>
                <CategoryBanner />
                <ProductFilterRow
                    products={clothes}
                    onViewChange={(mode) => setViewMode(mode)}
                />
                <ListProducts
                    products={clothes}
                    category={categories[0]}
                    viewMode={viewMode}
                />
                <Clients />
            </PageContent>
            <Footer />
        </div>
    );
};


export default ShopPage;