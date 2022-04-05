import axios from "axios";

const signupHandler = async (userData) => {
 
  try {
    const response = await axios.post(`/api/auth/signup`, userData);
    if (response.status === 200 || response.status === 201) {
      localStorage.setItem("authToken", response.data.encodedToken);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export { signupHandler };
