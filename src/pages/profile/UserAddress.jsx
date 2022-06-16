import { useState } from "react"
import { AddressModal } from "../../components/address-modal/AddressModal"
import { useOperations } from "../../hooks/useOperations"
import { SaveAddress } from "../../components/address-modal/SaveAddress"

export const UserAddress = () => {

    const { newAddress } = useOperations()
    const [showAddressModal, setShowAddressModal] = useState(false)

    return (
        <div>
            {!showAddressModal && <div>
                <button className="btn border-squre btn-primary" onClick={() => {
                    setShowAddressModal(true)
                }}>Create new Address</button>
                <SaveAddress/>
            </div>}
            {showAddressModal && <AddressModal setShowAddressModal={setShowAddressModal}/>}
        </div>
    )
}