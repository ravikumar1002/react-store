
import { categories } from "../../../backend/db/categories";
const CategoryFilter = ({ filteredApplyItemState, filteredApplyItemDispatch}) => {
    return (
        <div className="filter-section">
            <h3>Category</h3>
            <div className="flex-col">
                {categories.map((category) => {
                    return (
                        <label htmlFor={category.categoryName.toLowerCase()} key = {category._id}>
                        <input
                            type="checkbox"
                            id={category.categoryName.toLowerCase()}
                            name={category.categoryName.toLowerCase()}
                            checked = {filteredApplyItemState.activeCategory.includes(category.categoryName.toLowerCase())}
                            className="category"
                            onChange={(e) => {
                                const { name, checked } = e.target;
                                const selectedItems = checked
                                    ? [...filteredApplyItemState.activeCategory, name]
                                    : filteredApplyItemState.activeCategory.filter(
                                        (i) => i !== name
                                    );
                                filteredApplyItemDispatch({
                                    type: "CATEGORY",
                                    payload: {
                                        category: selectedItems,
                                    },
                                });
                            }}
                        />
                        <span>{category.categoryName}</span>
                    </label>
                    )
                })}
            </div>
        </div>
    )
}

export {CategoryFilter}