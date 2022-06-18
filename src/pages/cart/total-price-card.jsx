import { useContext } from "react";
import { cartSummry } from "./cart-summary";
import { userProductsDataContext } from "../../service/getUserProductsData";
import { Link, useNavigate } from "react-router-dom";
import { addToOrdersInServer } from "../../api-request/order"
import { useAuth } from "../../context/auth/auth-context";

const CartFinalPriceCard = ({ checkout, selectedAddress }) => {
    const { userSavedProductsState, dispatchUserSavedProducts } = useContext(userProductsDataContext);
    const { token } = useAuth()
    const navigate = useNavigate()

    const { getPrice, totalPrice, getDiscount, savePrice } = cartSummry();

    const placeOrder = () => {
        const orederedData = addToOrdersInServer(token, {
            deliveryAddress: selectedAddress,
            items: userSavedProductsState.cart
        })
        console.log(orederedData)
        dispatchUserSavedProducts({
            type: "ORDERED_ITEM",
            payload: {
                orderProducts: orederedData.orders,
                cartClear: [],
            }
        })
        navigate('/profile/orders', { replace: true })
    }

    return (
        <div className="cart-price-details">
            <h3 className="p-1">PRICE DETAILS</h3>
            <div>
                <p className="flex-space-between">
                    <span>Price</span>
                    <span>{getPrice(userSavedProductsState.cart)}</span>
                </p>
                <p className="flex-space-between">
                    <span>Discount</span>
                    <span> {`${getDiscount(userSavedProductsState.cart)}%`}</span>
                </p>
                <p className="flex-space-between">
                    <span>Delivery Charges</span> <span>$0</span>
                </p>
            </div>

            <h3 className="flex-space-between">
                <span>TOTAL AMOUNT</span>
                <span>{totalPrice(userSavedProductsState.cart)}</span>
            </h3>
            <div>
                <p className="p-1">{`you will save on this order  $${savePrice(
                    userSavedProductsState.cart
                )}`}</p>
                {checkout ? <button className="btn btn-primary" onClick={(e) => {
                    placeOrder()
                }}>
                    Place Order
                </button> :
                    <Link to="/checkout" className="btn-block p-1">
                        <button className="btn btn-primary">Checkout</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default CartFinalPriceCard;
