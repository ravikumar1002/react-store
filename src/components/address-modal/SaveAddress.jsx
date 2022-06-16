
import "./save-address.css"

export const SaveAddress = () => {

    return (
        <div className="save-address-box">
            <div className="address-content">
                <span>Address name:</span>
                <span>Something</span>
            </div>
            <div className="address-content">
                <span>Address:</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, officiis!
                </span>
            </div>
            <div className="address-content">
                <span>Phone NO:</span>
                <span>
                    1236547890
                </span>
            </div>
            <div className="address-content address-btn-section">
                <span>
                    <button className="btn btn-danger">Delete Address</button>
                </span>
                <span>
                    <button className="btn btn-secondary">Edit Address</button>
                </span>
            </div>
        </div>
    )
}

