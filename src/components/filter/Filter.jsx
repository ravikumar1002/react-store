import "./filter.css";
import { productsDataContext } from "../../context/products-context/products-data";
import { useContext } from "react";
import { RangeFilter } from "./filter-component/Range-filter";
import { CategoryFilter } from "./filter-component/Category-filter";
import { RatingsFilter } from "./filter-component/Ratings-filter";
import { SortFilter } from "./filter-component/Sort-filter";
const Filter = () => {
    const { filteredApplyItemState, filteredApplyItemDispatch } =
        useContext(productsDataContext);

    return (
        <div className="filter-wrapper">
            <div className="flex-space-between p-0 filter-section">
                <h2 className="filter-section">FIlter</h2>
                <button
                    className="btn-sm"
                    onClick={() => {
                        filteredApplyItemDispatch({
                            type: "CLEAR_FILTER",
                            payload: filteredApplyItemState.item,
                        });
                    }}
                >
                    Clear
                </button>
            </div>
            <RangeFilter
                filteredApplyItemState={filteredApplyItemState}
                filteredApplyItemDispatch={filteredApplyItemDispatch}
            />
            <CategoryFilter
                filteredApplyItemState={filteredApplyItemState}
                filteredApplyItemDispatch={filteredApplyItemDispatch}
            />
            <RatingsFilter
                filteredApplyItemState={filteredApplyItemState}
                filteredApplyItemDispatch={filteredApplyItemDispatch}
            />
            <SortFilter
                filteredApplyItemState={filteredApplyItemState}
                filteredApplyItemDispatch={filteredApplyItemDispatch}
            />
        </div>
    );
};

export default Filter;
