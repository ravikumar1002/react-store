import "./header.css";
import { Link } from "react-router-dom";
import { userProductsDataContext } from "../../service/getUserProductsData";
import { useContext } from "react";
import { productsDataContext } from "../../context/products-context/products-data";
import { useState } from "react";

const Header = () => {
    const { userSavedProductsState } = useContext(userProductsDataContext);
    const { filteredApplyItemState, filteredApplyItemDispatch } =
        useContext(productsDataContext);
    const [showSuggestionSearch, setShowSuggestionSearch] = useState({
        suggestionList: false,
        headerSearchWord: "",
    });
    const [searchProductsList, setSearchProductsList] = useState([
        ...filteredApplyItemState.item,
    ]);

    return (
        <header className="flex-space-around p-2 nav-bg-primary nav-wrapper">
            <div className="inline-centre">
                <h2>
                    <Link to="/" className="nav-text-primary text-decoration-none">
                        React Store
                    </Link>
                </h2>
            </div>
            <div className="search-input-wrapper search-bar ">
                <span className="input-search nav-input-width">
                    <span className="fas fa-search input-search-icon"></span>
                    <input
                        type="search"
                        className="input-search-input"
                        placeholder="Search"
                        value={showSuggestionSearch.headerSearchWord}
                        onChange={(e) => {
                            const inputSearchText = e.target.value.trim();
                            if (inputSearchText.trim().length > 0) {
                                setShowSuggestionSearch((prev) => {
                                    return {
                                        ...prev,
                                        suggestionList: true,
                                        headerSearchWord: inputSearchText,
                                    };
                                }); 

                                const findSuggestionAccordingSearch = [...filteredApplyItemState.item].filter((searchItem) => {
                                    return searchItem.title.toLowerCase().includes(inputSearchText.toLowerCase())? searchItem : false;
                                });

                                setSearchProductsList(findSuggestionAccordingSearch);

                            } else {
                                filteredApplyItemDispatch({
                                    type: "SEARCH_ITEM",
                                    payload: {
                                        searchKeyword: "",
                                    },
                                });

                                setShowSuggestionSearch((prev) => {
                                    return {
                                        ...prev,
                                        suggestionList: false,
                                        headerSearchWord: "",
                                    };
                                });
 
                                setSearchProductsList([]);
                            }
                        }}
                    />
                </span>

                <div
                    className={`${showSuggestionSearch.suggestionList ? "show-suggestion-search" : ""
                        }`}
                >
                    <ul>
                        {showSuggestionSearch.suggestionList &&
                            (searchProductsList.length > 0 ? (
                                searchProductsList.map((products) => {
                                    return (
                                        <li
                                            key={products._id}
                                            onClick={(e) => {
                                                const selectedItemInSearchBar = e.target.textContent.toLowerCase();
                                                setShowSuggestionSearch((prev) => {
                                                    return {
                                                        ...prev,
                                                        headerSearchWord: selectedItemInSearchBar,
                                                    };
                                                });
                                                filteredApplyItemDispatch({
                                                    type: "SEARCH_ITEM",
                                                    payload: {
                                                        searchKeyword: selectedItemInSearchBar,
                                                    },
                                                });
                                                setShowSuggestionSearch((prev) => {
                                                    return {
                                                        ...prev,
                                                        suggestionList: false,
                                                    };
                                                });
                                            }}
                                        >
                                            <Link to="/productspage" className="text-decoration-none">
                                                {products.title}
                                            </Link>
                                        </li>
                                    );
                                })
                            ) : (
                                <li>No item Found</li>
                            ))}
                    </ul>
                </div>
            </div>
            <nav>
                <ul className="horizontal-align-centre nav-text-primary">
                    <li className="list-style-none">
                        <button>
                            <Link to="/signup" className="nav-btn-primary nav-text-primary ">
                                <span className="btn btn-secondary btn-sm border-squre">
                                    signUp
                                </span>
                            </Link>
                        </button>
                    </li>
                    <li className="list-style-none ">
                        <button>
                            <Link
                                to="/wishlist"
                                className="nav-btn-primary nav-text-primary btn-sm"
                            >
                                <span className="badge-container">
                                    <i className="fas fa-heart fs-md"></i>
                                    <span className="badge-number-round-x-sm badge-end-top nav-badge-primary">
                                        {userSavedProductsState?.wishlist.length}
                                    </span>
                                </span>
                            </Link>
                        </button>
                    </li>
                    <li className="list-style-none">
                        <button>
                            <Link
                                to="/cart"
                                className="inline-centre nav-text-primary btn-icon-text-left btn-sm nav-btn-primary"
                            >
                                <span className="badge-container">
                                    <i className="fas fa-shopping-cart fs-md"></i>
                                    <span className="badge-number-round-x-sm badge-end-top nav-badge-primary">
                                        {userSavedProductsState?.cart.length}
                                    </span>
                                </span>
                            </Link>
                        </button>
                    </li>
                    <li className="list-style-none">
                        <button>
                            <Link
                                to="profile"
                                className="inline-centre nav-text-primary btn-icon-text-left btn-sm nav-btn-primary"
                            >
                                <span className="badge-container">
                                    <i className="fas fa-user fs-md"></i>
                                </span>
                            </Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
