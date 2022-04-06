
const RatingsFilter = ({ filteredApplyItemState, filteredApplyItemDispatch}) => {

    return (
        <div className="filter-section">
                <h3>Rating</h3>
                <div className="flex-col">
                    <span>
                        <label htmlFor="rating-4">
                            <input
                                type="radio"
                                id="rating-4"
                                className="input-radio"
                                checked ={filteredApplyItemState.ratings === 4 }
                                name="rating"
                                onChange={(e) => {
                                    const { checked } = e.target;
                                    filteredApplyItemDispatch({
                                        type: "RATINGS",
                                        payload: {
                                            ratingsType: 4,
                                            isChecked: checked,
                                        },
                                    });
                                }}
                            />
                            4 star and above
                        </label>
                    </span>
                    <span>
                        <label htmlFor="rating-3">
                            <input
                                type="radio"
                                id="rating-3"
                                className="input-radio"
                                checked ={filteredApplyItemState.ratings === 3}
                                name="rating"
                                onChange={(e) => {
                                    const { checked } = e.target;
                                    filteredApplyItemDispatch({
                                        type: "RATINGS",
                                        payload: {
                                            ratingsType: 3,
                                            isChecked: checked,
                                        },
                                    });
                                }}
                            />
                            3 star and above
                        </label>
                    </span>
                    <span>
                        <label htmlFor="rating-2">
                            <input
                                type="radio"
                                id="rating-2"
                                className="input-radio"
                                checked ={filteredApplyItemState.ratings === 2 }
                                name="rating"
                                onChange={(e) => {
                                    const { checked } = e.target;
                                    filteredApplyItemDispatch({
                                        type: "RATINGS",
                                        payload: {
                                            ratingsType: 2,
                                            isChecked: checked,
                                        },
                                    });
                                }}
                            />
                            2 star and above
                        </label>
                    </span>
                    <span>
                        <label htmlFor="rating-1">
                            <input
                                type="radio"
                                id="rating-1"
                                className="input-radio"
                                checked ={filteredApplyItemState.ratings === 1 }
                                name="rating"
                                onChange={(e) => {
                                    const { checked } = e.target;
                                    filteredApplyItemDispatch({
                                        type: "RATINGS",
                                        payload: {
                                            ratingsType: 1,
                                            isChecked: checked,
                                        },
                                    });
                                }}
                            />
                            1 star and above
                        </label>
                    </span>
                </div>
            </div>
    )
}


export {RatingsFilter}