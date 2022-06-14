import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/auth/auth-context"
import { userProductsDataContext } from "../../service/getUserProductsData"

export const UserProfileData = ({ userData }) => {
    const navigate = useNavigate()
    const { logout } = useAuth()

    const { dispatchUserSavedProducts } = useContext(userProductsDataContext)

    const userLogout = () => {
        logout()
        dispatchUserSavedProducts({
            type: "LOGOUT",
        })
    }

    return (
        <div>
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
        </div>
    )
}