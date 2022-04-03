import {useContext } from "react";
import { cartSummry } from "./cart-summary";
import { userProductsDataContext } from "../../service/getUserProductsData";

const CartFinalPriceCard = () => {
    const { userSavedProductsState } = useContext(userProductsDataContext);

    const { getPrice, totalPrice, getDiscount, savePrice } = cartSummry();

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
                <div className="btn-block p-1">
                    <button className=" btn btn-primary ">Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default CartFinalPriceCard;
