import ProductsPageCombine from "./products-combine-page";
import { useDocumentTitle } from "../../hooks/document-title";
import { useEffect } from "react";
const ProductsPage = () => {
    useEffect(() => {
        useDocumentTitle("Products listing")
    }, [])
    return <ProductsPageCombine />;
};

export default ProductsPage;
