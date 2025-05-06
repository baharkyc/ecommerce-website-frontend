import PageContent from "../layout/PageContent";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Clients from "../components/banners/Clients";
import CategoryBanner from "../components/banners/CategoryBanner";
import ListProducts from "../components/ListProducts"
import ProductFilterRow from "../components/ProductFilterRow";
import Breadcrumb from "../components/menus/Breadcrumb";
import Loading from "../components/Loading";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setOffset } from "../store/actions/productActions";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


const ShopPage = () => {

    const { gender, categoryPath, categoryId } = useParams(); //get URL parameters to fetch products based on selected category.

    const [viewMode, setViewMode] = useState("grid");
    const [ sort, setSort ] = useState(null);
    const [ filter, setFilter ] = useState({});

    const [pageNumber, setPageNumber] = useState(1);

    const dispatch = useDispatch();

    const {productList, limit, offset} = useSelector((state) => state.product);
    const isLoading = useSelector((state) => state.global.isLoading);

    useEffect(() => {
        if(!limit) return;
        const calculatedOffset = (pageNumber - 1) * limit; 
        dispatch(setOffset(calculatedOffset));

        dispatch(fetchProducts(categoryId, sort, filter, calculatedOffset));

    }, [categoryId, sort, filter, pageNumber, limit]);

    

    const filteredProductsByPrice = filter?.maxPrice
    ? productList.filter(product => product.price <= filter.maxPrice)
    : productList;

    /* { color: selectedColor, maxPrice: maxPrice }*/


    return (
        <div>
            <Header />
            <PageContent>
                <Breadcrumb/>
                <CategoryBanner />
                <ProductFilterRow
                    onViewChange={(mode) => setViewMode(mode)}
                    onSortChange={(newSort) => {
                        setSort(newSort)
                        setPageNumber(1);
                    }}
                    onFilterChange={(newFilter) => {
                        setFilter(newFilter);
                        setPageNumber(1);
                    }}
                />
                {isLoading ? (
                    <Loading />
                ) : (
                    <ListProducts
                        products={filteredProductsByPrice}
                        viewMode={viewMode}
                        pageNumber={pageNumber}
                        setPageNumber={setPageNumber}
                />)
                }
                <Clients />
            </PageContent>
            <Footer />
        </div>
    );
};


export default ShopPage;
