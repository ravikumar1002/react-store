import { useContext, useEffect, useRef, useState } from "react";
import { userProductsDataContext } from "../../service/getUserProductsData";

export const CheckoutAddressModal = ({ setShowSaveAddressModal, showAddressModal, setShowAddressModal, setSelectedAddress }) => {
    const { userSavedProductsState } = useContext(userProductsDataContext);
    const { address } = userSavedProductsState;
    const checkoutAddress = useRef();

    const handleClickOutside = (e) => {
        console.log(showAddressModal)
        if (
            checkoutAddress?.current &&
            !checkoutAddress?.current?.contains(e.target)
        ) {
            setShowSaveAddressModal(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="checkout-address_modal-box">
            <div
                className="flex-col gap-2 checkout-address-option checkoutAddress"
                ref={checkoutAddress}
            >
                {!showAddressModal && (
                    <>
                        <button
                            className="btn border-squre btn-primary"
                            onClick={() => {
                                setShowAddressModal(true);
                                setShowSaveAddressModal(false)
                            }}
                        >
                            Create new Address
                        </button>
                        {address.length > 0 &&
                            address.map((address) => {
                                return (
                                    <div
                                        className="d-flex gap-2"
                                        key={address._id}
                                        style={{ alignItems: "baseline" }}
                                    >
                                        <input type="radio" name="address" id={address._id} onChange={(e) => {
                                            if (e.target.checked) {
                                                setSelectedAddress(address)
                                            }
                                        }} />
                                        <label htmlFor={address._id}>
                                            <div>
                                                <span>Address name:</span>
                                                <span>{address.addressName}</span>
                                            </div>
                                            <div>
                                                <span>Address:</span>
                                                <span style={{ wordBreak: "break-all" }}>
                                                    {address.addressLine1},{address?.addressLine2}
                                                    {address.city},{address.pincode},{address.state},
                                                    {address.country},
                                                </span>
                                            </div>
                                            <div>
                                                <span>Phone No:</span>
                                                <span>{address.phoneNo}</span>
                                            </div>
                                        </label>
                                    </div>
                                );
                            })}
                    </>
                )}
            </div>
        </div>
    );
};
