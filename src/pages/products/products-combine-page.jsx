import Filter from "../../components/filter/Filter";
import ProductsListShow from "./productslist";
import "./products.css";

const ProductsPageCombine = () => {
    return (
        <main className="d-flex gap-2">
            <Filter />
            <ProductsListShow />
        </main>
    );
};

export default ProductsPageCombine;
