import {
    createContext,
    useReducer,
    useContext,
    useEffect,
    useState,
} from "react";
import { productsListContext } from "./products-list-context";
import { filterReducer } from "../../reducer/filter/filter-reducer";

const productsDataContext = createContext();

const ProductsDataProvider = ({ children }) => {
    const { productsData } = useContext(productsListContext);
    const filterInitialData = {
        filteredItem: [],
        item: [],
        sortBy: null,
        activeCategory: [],
        ratings: null,
        range: 5000,
        inputSearchText: "",
    };

    const [filteredApplyItemState, filteredApplyItemDispatch] = useReducer(
        filterReducer,
        filterInitialData
    );

    useEffect(() => {
        filteredApplyItemDispatch({
            type: "SET_INITIAL_DATA",
            payload: productsData,
        });
    }, [productsData]);

    return (
        <productsDataContext.Provider
            value={{ filteredApplyItemState, filteredApplyItemDispatch }}
        >
            {children}
        </productsDataContext.Provider>
    );
};

export { productsDataContext, ProductsDataProvider };
