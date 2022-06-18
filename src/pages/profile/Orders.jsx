import { useContext, useEffect } from "react"
import { getOrdersFromServer } from "../../api-request/order"
import { useAuth } from "../../context/auth/auth-context"
import { userProductsDataContext } from "../../service/getUserProductsData"
import { cartSummry } from "../cart/cart-summary"

export const Orders = () => {
    const { token } = useAuth()
    const { userSavedProductsState, dispatchUserSavedProducts } = useContext(userProductsDataContext)
    const { getPrice } = cartSummry();

    useEffect(async () => {
        const ordersData = await getOrdersFromServer(token)
        dispatchUserSavedProducts({
            type: "ORDERS",
            payload: {
                orders: ordersData?.orders
            }
        })
    }, [])

    console.log(userSavedProductsState)

    return (
        <div>
            {userSavedProductsState.orders ? userSavedProductsState.orders.map((orderedItem,i) => {
                return (
                    <div key={i} className="p-1 m-1 order-wrapper">
                        <div className="flex-between mb-1">
                            <div className="d-flex gap-2">
                                <div>
                                    <h4>Shipped To: </h4>
                                </div>
                                <div >
                                    <p>{orderedItem.order.deliveryAddress.addressName}</p>
                                    <p>{orderedItem.order.deliveryAddress.addressLine1}, {orderedItem.order.deliveryAddress?.addressLine2}</p>
                                    <p>
                                        {orderedItem.order.deliveryAddress.city}-{orderedItem.order.deliveryAddress.pincode}
                                    </p>
                                    <p>{orderedItem.order.deliveryAddress.state}, {orderedItem.order.deliveryAddress.country}</p>
                                </div>
                            </div>
                            <div>
                                <h3>TotalPrice: ${getPrice(orderedItem.order.items)}</h3>
                            </div>
                        </div>

                        <div className="d-flex gap-2" style={{flexWrap: "wrap"}}>
                            {
                                orderedItem.order.items.map((item) => {
                                    return (
                                        <div className="card-body-md card-horizontal-md horizontal-product-card checkout-card" key={item._id}>
                                            <div className="card-img flex-align-centre ">
                                                <img
                                                    src={item.imgSources}
                                                    alt={item.title}
                                                    className="card-md-img horizontal-product-checkout-img"
                                                />
                                            </div>
                                            <div className="card-content-container cart-card-content">
                                                <div className="card-img-heading">
                                                    <h4 className="card-heading">{item.title}</h4>
                                                </div>

                                                <div className="card-content">
                                                    <p>
                                                        <span className="fs-md fw-500">{` $${item.originalPrice -
                                                            (item.originalPrice / 100) * item.discount
                                                            } `}</span>
                                                    </p>
                                                    <p className="flex-align-centre gap-2">
                                                        <span>Quantity:</span>
                                                        <span className="current-qty-no">{item.qty}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            })
                :
                <div>
                    NO Orders
                </div>}
        </div>
    )
}