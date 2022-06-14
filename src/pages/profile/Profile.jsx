import { useAuth } from "../../context/auth/auth-context"
import { useNavigate } from "react-router-dom"
import { userProductsDataContext } from "../../service/getUserProductsData"
import { useContext, useState } from "react"
import { UserProfileData } from "./UserProfileData"
import "./profile.css"
const Profile = () => {
    const [activeBtn, setActiveBtn] = useState("user-profile")
    const { dispatchUserSavedProducts } = useContext(userProductsDataContext)
    const navigate = useNavigate()
    const { user } = useAuth()
    const { userData } = user

   

    return (
        <div>
            <div className="modal-container profile-container">
                <div className="profile-nav-button">
                    <button className={`btn-sm  border-squre ${activeBtn === "user-profile" ? "btn-primary" : "btn-secondary"}`} onClick={() => {
                        setActiveBtn("user-profile")
                    }}>Profile</button>
                </div>
                {activeBtn === "user-profile" && <UserProfileData userData={userData} />}
            </div>
        </div>
    )
}

export { Profile }