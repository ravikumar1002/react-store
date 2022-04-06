import Filter from "../../components/filter/Filter";
import ProductsListShow from "./productslist";
import "./products.css";
import { useDocumentTitle } from "../../hooks/document-title";
import { useEffect } from "react";

const ProductsPageCombine = () => {
    useEffect(() => {
        useDocumentTitle("Products listing")
    }, [])
    
    return (
        <main className="d-flex gap-2  products-page-responsive">
            <Filter />
            <ProductsListShow />
        </main>
    );
};

export default ProductsPageCombine;
