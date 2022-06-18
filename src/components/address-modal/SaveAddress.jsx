
import { useOperations } from "../../hooks/useOperations"
import "./save-address.css"

export const SaveAddress = ({ address }) => {

    const { deleteAddress } = useOperations()

    return (
        <div className="save-address-box">
            <div className="address-content">
                <span>Address name:</span>
                <span>{address.addressName}</span>
            </div>
            <div className="address-content">
                <span>Address:</span>
                <span className="address-box">
                    {address.addressLine1},
                    {address?.addressLine2}
                    {address.city},
                    {address.pincode},
                    {address.state},
                    {address.country},
                </span>
            </div>
            <div className="address-content">
                <span>Phone No:</span>
                <span>
                    {address.phoneNo}
                </span>
            </div>
            <div className="address-content address-btn-section">
                <span>
                    <button className="btn btn-danger" onClick={() => {
                        deleteAddress()
                    }}>Delete Address</button>
                </span>
                <span>
                    <button className="btn btn-secondary">Edit Address</button>
                </span>
            </div>
        </div>
    )
}

