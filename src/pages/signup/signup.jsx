import { useState } from "react";
import { signupHandler } from "../../api-request/signup-api";
import { useSignUp } from "../../context/signup-context/signup-context";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const SignUpPage = () => {
    let navigate = useNavigate()
    const [validation, setvalidation] = useState({
        name: false,
        email: false,
        password: false,
        checkbox: false,
    });

    const { signupReducerState, signUpReducerDispatch } = useSignUp();
    
    const sendDataToSignInApi = () => {
        signupHandler(signupReducerState);
    };

    return (
        <main>
            <div className="modal-container  signup-position">
                <div className="signup-wrapper flex-col ">
                    <div>
                        <h2 className="text-center">Signup</h2>
                    </div>
                    <div className="flex-col">
                        <label htmlFor="name">Name</label>
                        <input
                            type="name"
                            id="name"
                            value="test User"
                            className="fs-sm input-padding"
                            onChange={(e) => {
                                signUpReducerDispatch({
                                    type: "SIGN_UP_NAME",
                                    payload: {
                                        name: e.target.value,
                                    },
                                });
                            }}
                            required
                        />
                    </div>

                    <div className="flex-col">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            value={`a${Math.trunc(Math.random()*100000)}@gmail.com`}
                            className="fs-sm input-padding"
                            onChange={(e) => {
                                signUpReducerDispatch({
                                    type: "SIGN_UP_EMAIL",
                                    payload: {
                                        email: e.target.value,
                                    },
                                });
                            }}
                            required
                        />
                    </div>
                    <div className="flex-col">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value="111111"
                            className="fs-sm input-padding"
                            onChange={(e) => {
                                signUpReducerDispatch({
                                    type: "SIGN_UP_PASSWORD",
                                    payload: {
                                        password: e.target.value,
                                    },
                                });
                            }}
                            required
                        />
                    </div>

                    <div className="flex-space-between p-0">
                        <span>
                            <label
                                htmlFor="remember-me"
                                onChange={(e) => {
                                    signUpReducerDispatch({
                                        type: "CONDITION",
                                        payload: {
                                            condition: e.target.checked,
                                        },
                                    });
                                }}
                            >
                                <input type="checkbox" id="remember-me" required />{" "}
                                <span>I accept all Terms & Conditions</span>
                            </label>
                        </span>
                    </div>

                    <div>
                        <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={() => {
                                    sendDataToSignInApi();
                                    navigate(-1)
                                }}
                            >
                                Create New Account
                            </button>
                    </div>
                    
                </div>
            </div>
        </main>
    );
};

export default SignUpPage;
