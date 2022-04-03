import axios from "axios";

const getCategory = async () => {
    try {
        const response = await axios.get(`/api/categories`);
        if ((response.status === 200) || (response.status === 201)) {
            return response.data;
        } else {
            throw new Error();
        }
    } catch (e) {
        console.log("Error", e);
    }
};

export {getCategory}