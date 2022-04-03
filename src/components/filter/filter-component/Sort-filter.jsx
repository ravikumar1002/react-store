
const SortFilter = ({ filteredApplyItemState, filteredApplyItemDispatch}) => {

    return (
        <div className="filter-section">
            <h3>Sort by</h3>
            <div  className="flex-col">
                <span>
                    <label htmlFor="hightolow">
                        <input
                            type="radio"
                            name="sort"
                            id="hightolow"
                            className="input-radio"
                            onChange={(e) => {
                                const { checked } = e.target;
                                filteredApplyItemDispatch({
                                    type: "SORT",
                                    payload: {
                                        sortType: "PRICE_HIGH_TO_LOW",
                                        isChecked: checked,
                                    },
                                });
                            }}
                        />
                        Price - High to Low
                    </label>
                </span>
                <span>
                    <label htmlFor="lowtohigh">
                        <input
                            type="radio"
                            name="sort"
                            id="lowtohigh"
                            className="input-radio"
                            onChange={(e) => {
                                const { checked } = e.target;
                                filteredApplyItemDispatch({
                                    type: "SORT",
                                    payload: {
                                        sortType: "PRICE_LOW_TO_HIGH",
                                        isChecked: checked,
                                    },
                                });
                            }}
                        />
                        Price - Low to high
                    </label>
                </span>
            </div>
        </div>
    )
}

export { SortFilter }