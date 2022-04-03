const signUpReducer = (state, action) => {
    switch (action.type) {
        case "SIGN_UP_NAME":
            return {
                ...state,
                name: action.payload.name,
            };

        case "SIGN_UP_EMAIL":
            return {
                ...state,
                email: action.payload.email,
            };

        case "SIGN_UP_PASSWORD":
            return {
                ...state,
                password: action.payload.password,
            };

        case "CONDITION":
            return {
                ...state,
                conditoinsAccept: action.payload.condition,
            };

        default:
            return state;
    }
};

export { signUpReducer };
