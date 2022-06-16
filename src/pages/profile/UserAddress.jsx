import { useState } from "react"
import { AddressModal } from "../../components/address-modal/AddressModal"
import { useOperations } from "../../hooks/useOperations"

export const UserAddress = () => {

    const { newAddress } = useOperations()
    const [showAddressModal, setShowAddressModal] = useState(false)

    return (
        <div>
            {!showAddressModal && <div>
                <button className="btn border-squre btn-primary" onClick={() => {
                    setShowAddressModal(true)
                }}>Create new Address</button>
                <div>Saved Address</div>
            </div>}
            {showAddressModal && <AddressModal setShowAddressModal={setShowAddressModal}/>}
        </div>
    )
}