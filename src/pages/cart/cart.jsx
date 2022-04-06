import CartFinalPriceCard from "./total-price-card"
import CartProductCard from "./cart-products-card"
import "./cart.css"
import { useContext, useEffect } from "react";
import { userProductsDataContext } from "../../service/getUserProductsData";
import CartEmptyImg from "../../assets/empty-bag.png"
import { EmptyPage } from "../../components/empty-page/EmptyPage";
import { useDocumentTitle } from "../../hooks/document-title";

const CartPage = () => {
    useEffect(() => {
        useDocumentTitle("Cart")
    }, [])
    

    const { userSavedProductsState } = useContext(
        userProductsDataContext
    );

    const emptyWIshlist  = {
        imgSrc : CartEmptyImg,
        imgAlt: "Cart is empty",
        emptyPageHeading: "Unfortunately, Your Cart is Empty",
        emptyPageText: "Please Add Something in your Cart",
    }

    return (
        <main>
            <h2 className="text-center py-2 cart-heading">My Cart</h2>
            <div className="cart-page-content gap-2">
                <div className="cart-item-wrapper">
                    {userSavedProductsState?.cart.length > 0 && <CartProductCard selectedItemsForCart={userSavedProductsState.cart} />}
                </div>
                <div className="cart-price-wrapper">
                    {userSavedProductsState?.cart.length > 0 && <CartFinalPriceCard />}
                </div>
                <div>
                   {userSavedProductsState.cart.length === 0 && <div className="text-center mt-4">
                   <EmptyPage  emptyPageData= {emptyWIshlist}/>
                    </div>}  
                </div>
            </div>
        </main>
    )
}

export default CartPage