import { useContext, useEffect } from "react";
import { userProductsDataContext } from "../../service/getUserProductsData";
import WishlistProductsCard from "./wishlist-card";
import "./wishlist.css"
import wishlistEmptyImg from "../../assets/wishlist-empty.png"
import { EmptyPage } from "../../components/empty-page/EmptyPage";
import { useDocumentTitle } from "../../hooks/document-title";
import { useOperations } from "../../hooks/useOperations";
import { useAuth } from "../../context/auth/auth-context";

const WishlistPage = () => {
    const { userSavedProductsState } = useContext(
        userProductsDataContext
    );
    const { getCartFromApi, getWishlistProductsFromApi } = useOperations()
    const { token } = useAuth()
    useEffect(() => {
        useDocumentTitle("Wishlist")
        if (token) {
            getWishlistProductsFromApi(token);
            getCartFromApi(token)
        }
    }, [])

    const emptyWIshlist = {
        imgSrc: wishlistEmptyImg,
        imgAlt: "wishlist is empty",
        emptyPageHeading: "Your wishlist is empty!!",
        emptyPageText: "Seems like you don't have wishes here.",
        emptyPageSubText: "Make a Wish!",
    }

    return (
        <>
            <h2 className="text-center py-2">My Wishlist</h2>
            <div className="wishlist-products">
                {userSavedProductsState?.wishlist?.length > 0 ? (
                    <WishlistProductsCard
                        productsData={userSavedProductsState?.wishlist}
                    />
                ) : <div className="text-center mt-4">
                    <EmptyPage emptyPageData={emptyWIshlist} />
                </div>}
            </div>
        </>
    );
};

export default WishlistPage;
