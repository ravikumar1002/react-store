const RangeFilter = ({ filteredApplyItemState, filteredApplyItemDispatch}) => {

    return (
        <div className="filter-section">
                <h3>Price</h3>
                <p className="text-gray flex-space-between p-0">
                    <input type="number" value = {filteredApplyItemState.range} 
                     onChange={(e) => {
                        e.target.value === "" ? filteredApplyItemDispatch({
                            type: "RANGE_FILTER",
                            payload: {
                                range: 0,
                            },
                        }):
                        filteredApplyItemDispatch({
                            type: "RANGE_FILTER",
                            payload: {
                                range: e.target.value,
                            },
                        });
                    }}
                    />
                </p>
                <input
                    type="range"
                    className="w-100"
                    min={0}
                    max={5000}
                    value={filteredApplyItemState.range}
                    onChange={(e) => {
                        filteredApplyItemDispatch({
                            type: "RANGE_FILTER",
                            payload: {
                                range: e.target.value,
                            },
                        });
                    }}
                />
            </div>
    )
}

export {RangeFilter}