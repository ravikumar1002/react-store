import { useOperations } from "../../hooks/useOperations";
import { useToken } from "../../hooks/token-hooks";

const PriceProductCard = ({ productsData }) => {
    const { localStorageToken } = useToken()
    const { toggleWishlist, wishlistButtonText, cartButtonText, togglecart } =
        useOperations();

    return (
        <>
            {productsData.map((item) => {
                return (
                    <div
                        className="card-body-md card-horizontal-md horizontal-product-card"
                        key={item._id}
                    >
                        <div className="card-img flex-align-centre">
                            <img
                                src={item.imgSources}
                                alt={item.title}
                                className="vertical-product-card-img"
                            />
                        </div>
                        <div className="card-content-container">
                            <div className="card-img-heading">
                                <h4 className="card-heading">{item.title}</h4>
                            </div>

                            <div className="card-content">
                                <p>
                                    <span className="fs-md fw-500">
                                        {item.originalPrice -
                                            (item.originalPrice / 100) * item.discount}
                                    </span>
                                    <span> </span>
                                    <span className="text-decoration-line-through text-gray">
                                        ${item.originalPrice}
                                    </span>
                                </p>
                                <p>{`Discount : ${item.discount}%`}</p>
                                <p>{`Ratings : ${item.ratings}`}</p>
                            </div>

                            <div className="card-footer">
                                <span className="card-btn card-horizontal-buttons">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => {
                                            togglecart(localStorageToken, item);
                                        }}
                                    >
                                        {cartButtonText(item)}
                                    </button>

                                    <button
                                        className="btn-block btn-x-sm py-1 btn btn-secondary mt-1"
                                        onClick={() => {
                                            toggleWishlist(localStorageToken, item);
                                        }}
                                    >
                                        {wishlistButtonText(item)}
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default PriceProductCard;
