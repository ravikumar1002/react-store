const userDataReducer = (state, action) => {
    switch (action.type) {
        case "GET_WISHLIST_PRODUCTS_FROM_SERVER":
            return {
                ...state,
                wishlist: action.payload.wishlistData,
            };

        case "WISHLIST_TOGGLE":
            return {
                ...state,
                wishlist: action.payload.wishlistData,
            };

        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                wishlist: action.payload.wishlistData,
            };

        case "GET_CART_PRODUCTS_FROM_SERVER":
            return {
                ...state,
                cart: action.payload.cartData,
            };

        case "CART_TOGGLE":
            return {
                ...state,
                cart: action.payload.cartData,
            };

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: action.payload.cartData,
            };

        case "UPDATE_QUANTITY":
            return {
                ...state,
                cart: action.payload.cartData,
            };

        case "LOGOUT": {
            return {
                ...state,
                cart: [],
                wishlist: [],
                address: [],
                orders: [],
            };
        }

        case "ALL_ADDRESS": {
            return {
                ...state,
                address: action.payload.address,
            };
        }

        case "UPDATE_ADDRESS": {
            return {
                ...state,
                address: action.payload.address,
            };
        }

        case "NEW_ADDRESS": {
            return {
                ...state,
                address: action.payload.address,
            };
        }

        case "DELETE_ADDRESS": {
            return {
                ...state,
                address: action.payload.address,
            };
        }

        case "ORDERS": {
            return {
                ...state,
                orders: action.payload.orders,
            }
        }

        case "ORDERED_ITEM": {
            return {
                ...state,
                orders: action.payload.orderProducts,
                cart: action.payload.cartClear,
            };
        }

        default:
            return state;
    }
};

export { userDataReducer };
