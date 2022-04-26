import { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { signupHandler, loginHandler } from "../../api-request/auth-api";
// import {userProductsDataContext} from "../../service/getUserProductsData"
export const authContext = createContext({})

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({
        encodedToken: '',
        userData: {}
    })

    const navigate = useNavigate()

    const userSignUp = async ({ email, password, name }, location) => {
        const data = await signupHandler(email, password, name)
        localStorage.setItem(
            'userHasLogged',
            JSON.stringify({ token: data?.encodedToken, user: data?.createdUser })
        );
        setUser({
            encodedToken: data?.encodedToken,
            userData: data?.createdUser
        })
        if (location?.state) {
            navigate(location?.state?.from?.pathname)
        } else {
            navigate("/")
        }
    }

    const userlogin = async ({ email, password }, location) => {
        const data = await loginHandler(email, password)
        localStorage.setItem(
            'userHasLogged',
            JSON.stringify({ token: data?.encodedToken, user: data?.foundUser })
        );
        setUser({
            encodedToken: data?.encodedToken,
            userData: data?.foundUser
        })
        if (location.state) {
            navigate(location?.state?.from?.pathname)
        } else {
            navigate("/")
        }
    }


    const removeData = () => {
        setUser({
            encodedToken: '',
            userData: {}
        })
    }

    const getLocalData = async () => {
        const localStrogeItem = await { ...JSON.parse(localStorage.getItem("userHasLogged")).user }
        userSignUp({
            email: localStrogeItem.email,
            password: localStrogeItem.password,
            name: localStrogeItem.name
        })
    }

    useEffect(() => {
        if ((JSON.parse(localStorage.getItem("userHasLogged"))?.token) && (!user.encodedToken)) {
            getLocalData()
        }
    }, [])


    return <authContext.Provider value={{ userSignUp, removeData, userlogin, userData: user.userData, token: user?.encodedToken }}>
        {children}
    </authContext.Provider>
}

const useAuth = () => useContext(authContext)
export { useAuth, AuthProvider }