
import { useContext } from "react";
import { TokenContext } from "../context/auth/token-context";

const useToken = () => useContext(TokenContext)

export { useToken }