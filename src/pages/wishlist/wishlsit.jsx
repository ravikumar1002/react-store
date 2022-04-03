import { useContext} from "react";
import { userProductsDataContext } from "../../service/getUserProductsData";
import WishlistProductsCard from "./wishlist-card";
const WishlistPage = () => {
    const { userSavedProductsState } = useContext(
        userProductsDataContext
    );

    return (
        <>
            <h2 className="text-center py-2">My Wishlist</h2>
            <div className="grid-center-columns wishlist-page">
                {userSavedProductsState?.wishlist?.length > 0 ? (
                    <WishlistProductsCard
                        productsData={userSavedProductsState?.wishlist}
                    /> 
                ) : <div className="text-center mt-4"> 
                    <p>Wishlist Is Empty</p>
                    </div>}
            </div>
        </>
    );
};

export default WishlistPage;
