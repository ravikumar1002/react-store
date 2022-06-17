import { useState } from "react"
import "./address-modal.css"
import { useAuth } from "../../context/auth/auth-context"
import { useOperations } from "../../hooks/useOperations"

export const AddressModal = ({ update, updateData, setShowAddressModal }) => {
    const emptyAddress = {
        addressName: "",
        addressLine1: "",
        addressLine2: "",
        phoneNo: "",
        city: "",
        state: "",
        pincode: "",
        country: "",
    }
    const [addressData, setAddressData] = useState(update ? { ...updateData } : { ...emptyAddress })
    const { token } = useAuth()
    const { newAddress, updateAddress } = useOperations()

    const addressFormInput = (inputType, value) => {
        setAddressData((prev) => {
            return {
                ...prev,
                [inputType]: value
            }
        })
    }

    return (
        <div className="address-modal-wrapper">
            <div className="address-modal">
                <form action="" className="address-modal-form" onSubmit={(e) => {
                    e.preventDefault()
                    if (update) {
                        updateAddress(token, addressData._id, addressData)
                    } else {
                        newAddress(token, addressData)
                    }
                    console.log(addressData)
                    setAddressData({ ...emptyAddress })
                }}>
                    <div className="d-flex gap-2">
                        <input type="text" id="addressname" placeholder="AddressName*" value={addressData.addressName} onChange={(e) => {
                            addressFormInput("addressName", e.target.value)
                        }} required />
                    </div>
                    <div className="">
                        <input type="number" placeholder="Phone No *" value={addressData.phoneNo} onChange={(e) => {
                            addressFormInput("phoneNo", e.target.value)
                        }} required />
                    </div>
                    <div className="">
                        <input type="text" placeholder="Address line 1 *" value={addressData.addressLine1} onChange={(e) => {
                            addressFormInput("addressLine1", e.target.value)
                        }} required />
                    </div>
                    <div className="">
                        <input type="text" placeholder="Address line 2" value={addressData.addressLine2} onChange={(e) => {
                            addressFormInput("addressLine2", e.target.value)
                        }} />
                    </div>
                    <div className="d-flex gap-2">
                        <input type="text" placeholder="City/District *" value={addressData.city} onChange={(e) => {
                            addressFormInput("city", e.target.value)
                        }} required />
                        <input type="text" placeholder="State *" value={addressData.state} onChange={(e) => {
                            addressFormInput("state", e.target.value)
                        }} required />
                    </div>
                    <div className="d-flex gap-2">
                        <input type="number" placeholder="Pin code *" value={addressData.pincode} onChange={(e) => {
                            addressFormInput("pincode", e.target.value)
                        }} required />
                        <input type="text" placeholder="Country *" value={addressData.country} onChange={(e) => {
                            addressFormInput("country", e.target.value)
                        }} required />
                    </div>
                    <div className="flex-between gap-4">
                        <button className=" btn-sm btn-danger border-squre" onClick={() => {
                            setShowAddressModal(false)
                        }}>Cancel</button>
                        <button className=" btn-sm btn-primary border-squre" type="submit">Save address</button>
                    </div>
                </form>
            </div>
        </div>
    )
}