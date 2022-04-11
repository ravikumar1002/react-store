import "./header.css"
import { Link } from "react-router-dom"
import { userProductsDataContext } from "../../service/getUserProductsData";
import { useContext } from "react";
import { productsDataContext } from "../../context/products-context/products-data";

const Header = () => {
    const { userSavedProductsState } = useContext(userProductsDataContext)
    const { filteredApplyItemState, filteredApplyItemDispatch } = useContext(productsDataContext);

    return (

        <header className="flex-space-around p-2 nav-bg-primary nav-wrapper">
            <div className="inline-centre">
                <h2>
                    <Link to="/" className="nav-text-primary text-decoration-none">
                        React Store
                    </Link>
                </h2>
            </div>
            <div className="search-input-wrapper search-bar">
                <span className="input-search nav-input-width">
                    <span className="fas fa-search input-search-icon"></span>
                    <input
                        type="search"
                        className="input-search-input"
                        placeholder="Search"
                        onChange={(e) => {
                            if (e.target.value.length > 0) {
                                filteredApplyItemDispatch({
                                    type: "SEARCH_ITEM",
                                    payload: {
                                        searchKeyword: e.target.value.toLowerCase()
                                    }
                                })
                            } else {
                                filteredApplyItemDispatch({
                                    type: "CLEAR_FILTER",
                                    payload : filteredApplyItemState.item
                                })
                            }
                        }
                        }
                    />
                </span>
            </div>
            <nav >
                <ul className="horizontal-align-centre nav-text-primary">
                    <li className="list-style-none">
                        <button>
                            <Link
                                to="/signup"
                                className="nav-btn-primary nav-text-primary "
                            >
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