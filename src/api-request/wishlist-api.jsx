import axios from "axios";

const getWishlist = async (authToken) => {
    try {
        const response = await axios.get("/api/user/wishlist", {
            headers: { authorization: authToken },
        });
        if (response.status === 200 || response.status === 201) {
            return response.data;
        } else {
            throw new Error();
        }
    } catch (e) {
        console.log("ERROR", e);
    }
};

const addToWishlist = async (authToken, product) => {
    try {
        const response = await axios.post(
            "/api/user/wishlist",
            { product },
            {
                headers: { authorization: authToken },
            }
        );

        if (response.status === 200 || response.status === 201) {
            return response.data;
        } else {
            throw new Error();
        }
    } catch (e) {
        console.log(e);
    }
};

const removeFromWishlist = async (authToken, id) => {
    try {
        const response = await axios.delete(`/api/user/wishlist/${id}`, {
            headers: { authorization: authToken },
        });
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error();
        }
    } catch (e) {
        console.log("Error", e);
    }
};

export { getWishlist, addToWishlist, removeFromWishlist };
