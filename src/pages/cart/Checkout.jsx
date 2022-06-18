import { useContext, useState } from "react";
import { userProductsDataContext } from "../../service/getUserProductsData";
import { cartSummry } from "./cart-summary";
import "./checkout.css";
import { CheckoutAddressModal } from "./CheckoutAddressModal";
import { addToOrdersInServer } from "../../api-request/order";
import CartFinalPriceCard from "./total-price-card";
import { AddressModal } from "../../components/address-modal/AddressModal";

export const Checkout = () => {
    const [showSaveAddressModal, setShowSaveAddressModal] = useState(false);
    const { userSavedProductsState } = useContext(userProductsDataContext);
    const { address } = userSavedProductsState;
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState({});
    return (
        <div className="checkout-page">
            <div className="checkout-address-wrapper">
                {selectedAddress.addressName ?
                    <div className="flex-between gap-2">
                        <div>
                            <h2>Shipping Address</h2>
                        </div>
                        <div className="checkout-address">
                            <h4>{selectedAddress.addressName}</h4>
                            <p>{selectedAddress.addressLine1},{selectedAddress?.addressLine2}</p>
                            <p>
                                {selectedAddress.city}-{selectedAddress.pincode}
                            </p>
                            <p>{selectedAddress.state},</p>
                            <p>{selectedAddress.country}</p>
                        </div>
                        <div>
                            <button
                                className="btn-sm btn-secondary border-squre"
                                onClick={() => {
                                    setShowSaveAddressModal(true);
                                }}
                            >
                                Change Address
                            </button>
                        </div>
                    </div>
                    :
                    <div className="flex-between gap-4">
                        <div>
                            <h2>Shipping Address</h2>
                        </div>
                        <button
                            className="btn-sm btn-secondary border-squre"
                            onClick={() => {
                                setShowSaveAddressModal(true);
                            }}
                        >
                            select Address
                        </button>
                    </div>
                }

                <div>
                    <div>
                        <h2>Shipping items</h2>
                    </div>
                    <div className="d-flex gap-2 m-1 p-1" style={{ flexWrap: "wrap" }}>
                        {userSavedProductsState?.cart.length > 0 &&
                            userSavedProductsState?.cart.map((item) => {
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
                                );
                            })}
                    </div>
                </div>
            </div>
            <div>
                {userSavedProductsState?.cart.length > 0 && <CartFinalPriceCard checkout={true} selectedAddress={selectedAddress} />}
            </div>
            {showSaveAddressModal && (
                <CheckoutAddressModal
                    setShowSaveAddressModal={setShowSaveAddressModal}
                    showAddressModal={showAddressModal}
                    setShowAddressModal={setShowAddressModal}
                    setSelectedAddress={setSelectedAddress}
                />
            )}
            {showAddressModal && (
                <AddressModal
                    setShowAddressModal={setShowAddressModal}
                    setShowSaveAddressModal={setShowSaveAddressModal}
                    checkout={true}
                />
            )}
        </div>
    );
};
