import { useAuth } from "../../context/auth/auth-context"
import { useNavigate } from "react-router-dom"
import { userProductsDataContext } from "../../service/getUserProductsData"
import { useContext, useState } from "react"
import "./profile.css"
const Profile = () => {
    const [activeBtn, setActiveBtn] = useState("user-profile")
    const { dispatchUserSavedProducts } = useContext(userProductsDataContext)
    const navigate = useNavigate()
    const { userData, removeData } = useAuth()

    const userLogout = () => {
        localStorage.clear()
        removeData()
        dispatchUserSavedProducts({
            type: "LOGOUT",
        })
    }

    return (
        <div>

            <div className="modal-container profile-container">
                <div className="profile-nav-button">
                    <button className={`btn-sm  border-squre ${activeBtn === "user-profile" ? "btn-primary" : "btn-secondary"}`} onClick={() => {
                        setActiveBtn("user-profile")
                    }}>Profile</button>
                    <button className={`btn-sm  border-squre ${activeBtn === "address" ? "btn-primary" : "btn-secondary"}`} onClick={() => {
                        setActiveBtn("address")
                    }}>Address</button>
                </div>
                {activeBtn === "user-profile" && <div className="profile-wrapper" >
                    <div>
                        <h2 className="text-center">User profile</h2>
                    </div>
                    <div className="flex-col profile-data">
                        <p> <span>Name: </span><span>{userData.name}</span></p>
                        <p><span>Email: </span><span>{userData.email}</span></p>
                    </div>

                    <div className="text-center">
                        <button className="btn-sm border-squre btn-danger" onClick={() => {
                            userLogout()
                            navigate("/")
                        }} >
                            Logout
                        </button>
                    </div>

                </div>}
                {activeBtn === "address" && <div className="profile-wrapper" >
                    <p>Address feature coming soon</p>
                </div>}
            </div>
        </div>
    )
}

export { Profile }