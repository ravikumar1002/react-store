import { useContext, useState } from "react"
import { AddressModal } from "../../components/address-modal/AddressModal"
import { useOperations } from "../../hooks/useOperations"
import { SaveAddress } from "../../components/address-modal/SaveAddress"
import { userProductsDataContext } from "../../service/getUserProductsData"

export const UserAddress = () => {
    const { userSavedProductsState } = useContext(userProductsDataContext);
    const { address } = userSavedProductsState

    const [showAddressModal, setShowAddressModal] = useState(false)

    return (
        <div>
            {!showAddressModal && <div>
                <button className="btn border-squre btn-primary" onClick={() => {
                    setShowAddressModal(true)
                }}>Create new Address</button>

                {address.length > 0 ? address.map((address) => {
                    return (
                        <SaveAddress address={address} />
                    )
                }) : <div>Add address</div>}

            </div>}
            {showAddressModal && <AddressModal setShowAddressModal={setShowAddressModal} />}
        </div>
    )
}