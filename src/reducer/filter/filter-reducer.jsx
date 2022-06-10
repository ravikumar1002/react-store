const filterReducer = (state, action) => {
    const { ratings, sortBy, item, range, activeCategory, inputSearchText } = state;

    function filteringData(
        productList,
        { ratingValue, rangeValue, categoryValue, inputSearchValue }
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
            })
            .filter(searchItem => {
                return searchItem.title.toLowerCase().match(inputSearchValue) ? searchItem : false
            })
    }

    function getSortItems(data, sortBy) {
        if (sortBy === "PRICE_HIGH_TO_LOW") {
            return [...data].sort(
                (a, b) => b.originalPrice - (b.originalPrice / 100) * b.discount - (a.originalPrice - (a.originalPrice / 100) * a.discount)
            )
        } else if (sortBy === "PRICE_LOW_TO_HIGH") {
            return [...data].sort(
                (a, b) => a.originalPrice - (a.originalPrice / 100) * a.discount - (b.originalPrice - (b.originalPrice / 100) * b.discount)
            )
        }
        return data;
    }

    const getfilterData = (
        data,
        { sortByValue, ratingValue, rangeValue, categoryValue, inputSearchValue }
    ) => {

        const sortedData = getSortItems(data, sortByValue);
        const filteredData = filteringData(sortedData, {
            ratingValue,
            rangeValue,
            categoryValue,
            inputSearchValue,
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
                inputSearchValue: inputSearchText,
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
                inputSearchValue: inputSearchText,
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
                inputSearchValue: inputSearchText,
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
                inputSearchValue: inputSearchText,
            });
            return {
                ...state,
                activeCategory: action.payload.category,
                filteredItem: sortedCategory,
            };

        case "SEARCH_ITEM":
            const searchItem = getfilterData(item, {
                sortByValue: null,
                categoryValue: [],
                ratingValue: null,
                rangeValue: 5000,
                inputSearchValue: action.payload.searchKeyword,
            });
            return {
                ...state,
                inputSearchText: action.payload.searchKeyword,
                filteredItem: searchItem,
            }
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
