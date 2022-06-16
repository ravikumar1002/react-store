import { useAuth } from "../../context/auth/auth-context"
import { useNavigate } from "react-router-dom"
import { userProductsDataContext } from "../../service/getUserProductsData"
import { useContext, useState } from "react"
import { UserProfileData } from "./UserProfileData"
import "./profile.css"
import { UserAddress } from "./UserAddress"
const Profile = () => {
    const [activeBtn, setActiveBtn] = useState("user-profile")
    const { dispatchUserSavedProducts } = useContext(userProductsDataContext)
    const navigate = useNavigate()
    const { user } = useAuth()
    const { userData } = user



    return (
        <div>
            <div className="profile-page-layout">
                <div className="profile-nav">
                    <button className={`btn-sm  border-squre ${activeBtn === "user-profile" ? "btn-primary" : "btn-secondary"}`} onClick={() => {
                        setActiveBtn("user-profile")
                    }}>Profile</button>
                    <button className={`btn-sm  border-squre ${activeBtn === "address" ? "btn-primary" : "btn-secondary"}`} onClick={() => {
                        setActiveBtn("address")
                    }}>Address</button>
                </div>

                <div className="profile-content">
                    {activeBtn === "user-profile" && <UserProfileData userData={userData} />}
                    {activeBtn === "address" && <UserAddress userData={userData} />}
                </div>


            </div>
        </div>
    )
}

export { Profile }