import { createContext, useContext, useReducer } from "react";
import { signUpReducer } from "../../reducer/signup-reducer/signup-reducer";

const signupContext = createContext();

const SignUpProvider = ({ children }) => {
    const signUpInitialValue = {
        name: "",
        email: "",
        password: "",
        conditoinsAccept: false,
    };

    const [signupReducerState, signUpReducerDispatch] = useReducer(
        signUpReducer,
        signUpInitialValue
    );

    return (
        <signupContext.Provider
            value={{ signupReducerState, signUpReducerDispatch }}
        >
            {children}
        </signupContext.Provider>
    );
};

const useSignUp = () => useContext(signupContext);

export { useSignUp, SignUpProvider };
