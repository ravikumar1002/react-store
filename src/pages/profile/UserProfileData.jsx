import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/auth/auth-context"
import { userProductsDataContext } from "../../service/getUserProductsData"
import "./user-profile-data.css"

export const UserProfileData = () => {
    const navigate = useNavigate()
    const { logout } = useAuth()
    const { user } = useAuth()
    const { userData } = user

    const { dispatchUserSavedProducts } = useContext(userProductsDataContext)

    const userLogout = () => {
        logout()
        dispatchUserSavedProducts({
            type: "LOGOUT",
        })
    }

    return (
        <div className="profile-wrapper">
            <div>
                <h2 className="">User profile</h2>
            </div>
            <div className="mt-1 ">
                <p className="mt-1"> <span className="fw-700">Name: </span><span>{userData.name}</span></p>
                <p className="mt-1"><span className="fw-700">Email: </span><span>{userData.email}</span></p>
            </div>

            <div className="mt-1 ">
                <button className="btn-sm border-squre btn-danger" onClick={() => {
                    userLogout()
                    navigate("/")
                }} >
                    Logout
                </button>
            </div>
        </div>
    )
}