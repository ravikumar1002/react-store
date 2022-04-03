import { useContext } from "react";
import PriceProductCard from "./price-products-list";
import { productsDataContext } from "../../context/products-context/products-data";

const ProductsListShow = () => {

    const { filteredApplyItemState } = useContext(productsDataContext)
    const { filteredItem } = filteredApplyItemState

    return (
        <div className="product-items-container">
            <div className="flex-align-centre py-2">
                <h2>Showing All Product</h2>
                <p className="pl-2">{` showing ${filteredItem.length} products`}</p>
            </div>
            <div className="product-items">
                <PriceProductCard productsData={filteredItem} />
            </div>
        </div>
    );
};

export default ProductsListShow;
