import { useAuth } from "../../context/auth/auth-context"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { userProductsDataContext } from "../../service/getUserProductsData"
import { Children, useContext, useState } from "react"
import { UserProfileData } from "./UserProfileData"
import "./profile.css"
import { UserAddress } from "./UserAddress"
const Profile = ({ children }) => {
    const [activeBtn, setActiveBtn] = useState("user-profile")
    const { dispatchUserSavedProducts } = useContext(userProductsDataContext)
    const navigate = useNavigate()
    const { user } = useAuth()
    const { userData } = user

    return (
        <div>
            <div className="profile-page-layout">
                <div className="profile-nav">
                    <NavLink to="/profile" key="profile" end className={({ isActive }) =>
                        isActive
                            ? "profile-tab active-profile-tab"
                            : "profile-tab"
                    }>
                        Profile
                    </NavLink>
                    <NavLink to="/profile/address" key="address" end className={({ isActive }) =>
                        isActive
                            ? "profile-tab active-profile-tab"
                            : "profile-tab"
                    }>
                        Address
                    </NavLink>
                    <NavLink to="/profile/orders" key="orders" end className={({ isActive }) =>
                        isActive
                            ? "profile-tab active-profile-tab"
                            : "profile-tab"
                    }>
                        Orders
                    </NavLink>
                </div>
                <div className="profile-content">
                    {children}
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export { Profile }