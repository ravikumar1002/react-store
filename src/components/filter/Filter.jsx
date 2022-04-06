import "./filter.css";
import { productsDataContext } from "../../context/products-context/products-data";
import { useContext } from "react";
import { RangeFilter } from "./filter-component/Range-filter";
import { CategoryFilter } from "./filter-component/Category-filter";
import { RatingsFilter } from "./filter-component/Ratings-filter";
import { SortFilter } from "./filter-component/Sort-filter";
import { useState } from "react";
const Filter = () => {
    const [showResposiveFilter, setShowResposiveFilter] = useState(false)
    const { filteredApplyItemState, filteredApplyItemDispatch } =
        useContext(productsDataContext);

    return (
        <div className="filter-wrapper">
            <div className="flex-space-between p-0 filter-section">
                <div className="d-flex">
                    <h2 className="filter-section-text">FIlter</h2>
                    <button onClick={() => {
                        setShowResposiveFilter(!showResposiveFilter)
                    }} className="filter-icon">
                        <i className="fas fa-filter fa-bars-filter fs-2">Filter</i>
                    </button>
                </div>

                <button
                    className={showResposiveFilter ? `btn-sm` : "hide-filter"}
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

            <div className={showResposiveFilter ? `filter-type` : "hide-filter"}>

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
        </div>
    );
};

export default Filter;
