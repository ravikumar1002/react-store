import { useContext, useEffect } from "react"
import { getOrdersFromServer } from "../../api-request/order"
import { useAuth } from "../../context/auth/auth-context"
import { userProductsDataContext } from "../../service/getUserProductsData"


export const Orders = () => {
    const { token } = useAuth()
    const { userSavedProductsState, dispatchUserSavedProducts } = useContext(userProductsDataContext)

    useEffect(async() => {
        const ordersData = await getOrdersFromServer(token)
        dispatchUserSavedProducts({
            type: "ORDERS",
            payload: {
                orders: ordersData.orders
            }
        })
    }, [])
    
    console.log(userSavedProductsState)

    return (
        <div>
            Orders
        </div>
    )
}