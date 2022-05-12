import { useOperations } from "../../hooks/useOperations";
import { useAuth } from "../../context/auth/auth-context";

const CartProductCard = ({ selectedItemsForCart }) => {
    const { token } = useAuth()
    const { toggleWishlist, wishlistButtonText, removeProductsFromCart, updateProductQuantityInCart } = useOperations()

    return (
        <>
            {
                selectedItemsForCart.map((item) => {
                    return (

                        <div
                            className="card-body-md card-horizontal-md horizontal-product-card cart-Card "
                            key={item._id}
                        >
                            <div className="card-img flex-align-centre ">
                                <img
                                    src={item.imgSources}
                                    alt={item.title}
                                    className="card-md-img horizontal-product-card-img"
                                />
                            </div>
                            <div className="card-content-container cart-card-content">
                                <div className="card-img-heading">
                                    <h4 className="card-heading">{item.title}</h4>
                                </div>

                                <div className="card-content">
                                    <p>
                                        <span className="fs-md fw-500">{` $${item.originalPrice -
                                            (item.originalPrice / 100) * item.discount} `}</span>
                                        <span> </span>
                                        <span className="text-decoration-line-through text-gray">
                                            {item.originalPrice}
                                        </span>
                                    </p>
                                    <p>{`Discount:  ${item.discount}%`}</p>
                                    <p className="flex-align-centre gap-2">
                                        <span>Quantity:</span>
                                        <button className="btn btn-primary" onClick={() => {
                                            updateProductQuantityInCart(token, item, "increment")

                                        }}>+</button>
                                        <span className="current-qty-no">{item.qty}</span>
                                        <button className="btn btn-primary" onClick={() => {
                                            item.qty > 1 ?
                                                updateProductQuantityInCart(token, item, "decrement") :
                                                removeProductsFromCart(token, item)
                                        }}
                                        >-</button>
                                    </p>
                                </div>

                                <div className="card-footer">
                                    <span className="card-btn card-horizontal-buttons">
                                        <button className="btn btn-primary"
                                            onClick={
                                                () => {
                                                    removeProductsFromCart(token, item)
                                                }
                                            }
                                        >Remove From cart</button>

                                        <button className="btn-block btn-x-sm py-1 btn btn-secondary mt-1"
                                            onClick={() => {
                                                toggleWishlist(token, item)
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

export default CartProductCard;
