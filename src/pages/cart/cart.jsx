import CartFinalPriceCard from "./total-price-card"
import CartProductCard from "./cart-products-card"
import "./cart.css"
import { useContext } from "react";
import { userProductsDataContext } from "../../service/getUserProductsData";

const CartPage = () => {

    const { userSavedProductsState } = useContext(
        userProductsDataContext
    );

    return (
        <main>
            <h2 className="text-center py-2 ">My Cart</h2>
            <div className="centre gap-2">
                <div>
                    {userSavedProductsState?.cart.length > 0 && <CartProductCard selectedItemsForCart={userSavedProductsState.cart} />}
                </div>
                <div>
                    {userSavedProductsState?.cart.length > 0 && <CartFinalPriceCard />}
                </div>
                <div>
                   {userSavedProductsState.cart.length === 0 && <div className="text-center mt-4">
                       <p>Cart Page is Empty</p>
                       </div>}  
                </div>
            </div>
        </main>
    )
}

export default CartPage