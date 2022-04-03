import { ProductsListApi } from "../../api-request/products-list-api";

import { createContext, useEffect, useState } from "react";

const productsListContext = createContext();

const ProductsListProider = ({ children }) => {
    const [productsData, setProductsData] = useState([]);

    const getAllProductsFromApi = async () => {
        const reciveProducts = await ProductsListApi();
        setProductsData(reciveProducts);
    };

    useEffect(() => {
        getAllProductsFromApi();
    }, []);

    return (
        <productsListContext.Provider value={{ productsData }}>
            {children}
        </productsListContext.Provider>
    );
};

export { productsListContext, ProductsListProider };
