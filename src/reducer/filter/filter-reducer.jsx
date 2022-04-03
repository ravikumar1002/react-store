const filterReducer = (state, action) => {
    const { ratings, sortBy, item, range, activeCategory } = state;

    function filteringData(
        productList,
        { ratingValue, rangeValue, categoryValue }
    ) {
        return productList
            .filter((item) => {
                const itemPrice =
                    item.originalPrice - (item.originalPrice / 100) * item.discount;
                if (itemPrice <= rangeValue) {
                    return item;
                }
            })
            .filter((rating) => {
                return ratingValue === null ? true : rating.ratings >= ratingValue;
            })
            .filter((category) => {
                return categoryValue.length > 0
                    ? categoryValue.includes(category.categoryName)
                    : true;
            });
    }

    function getSortItems(item, sortBy) {
        if (sortBy === "PRICE_HIGH_TO_LOW") {
            return [
                ...item.sort(
                    (a, b) =>
                        b.originalPrice -
                        (b.originalPrice / 100) * b.discount -
                        (a.originalPrice - (a.originalPrice / 100) * a.discount)
                ),
            ];
        } else if (sortBy === "PRICE_LOW_TO_HIGH") {
            return [
                ...item.sort(
                    (a, b) =>
                        a.originalPrice -
                        (a.originalPrice / 100) * a.discount -
                        (b.originalPrice - (b.originalPrice / 100) * b.discount)
                ),
            ];
        }
        return item;
    }

    const getfilterData = (
        data,
        { sortByValue, ratingValue, rangeValue, categoryValue }
    ) => {
        const sortedData = getSortItems(data, sortByValue);
        const filteredData = filteringData(sortedData, {
            ratingValue,
            rangeValue,
            categoryValue,
        });
        return filteredData;
    };

    switch (action.type) {
        case "SORT":
            const sortedValue = getfilterData(item, {
                sortByValue: action.payload.sortType,
                ratingValue: ratings,
                rangeValue: range,
                categoryValue: activeCategory,
            });
            return {
                ...state,
                sortBy: action.payload.sortType,
                filteredItem: sortedValue,
            };

        case "RATINGS":
            const sortedRatings = getfilterData(item, {
                sortByValue: sortBy,
                ratingValue: action.payload.ratingsType,
                rangeValue: range,
                categoryValue: activeCategory,
            });
            return {
                ...state,
                ratings: action.payload.ratingsType,
                filteredItem: sortedRatings,
            };

        case "RANGE_FILTER":
            const sortedRange = getfilterData(item, {
                sortByValue: sortBy,
                ratingValue: ratings,
                categoryValue: activeCategory,
                rangeValue: action.payload.range,
            });
            return {
                ...state,
                range: action.payload.range,
                filteredItem: sortedRange,
            };
        case "CATEGORY":
            const sortedCategory = getfilterData(item, {
                sortByValue: sortBy,
                ratingValue: ratings,
                rangeValue: range,
                categoryValue: action.payload.category,
            });
            return {
                ...state,
                activeCategory: action.payload.category,
                filteredItem: sortedCategory,
            };

        case "CLEAR_FILTER":
            return {
                ...state,
                filteredItem: action.payload,
                sortBy: null,
                activeCategory: [],
                ratings: null,
                range: 5000,
            };

        case "SET_INITIAL_DATA":
            return {
                ...state,
                item: action.payload,
                filteredItem: action.payload,
            };

        default:
            return state;
    }
};

export { filterReducer };
