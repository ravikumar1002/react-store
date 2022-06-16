import axios from "axios";

const getAddressFromServer = async (authToken) => {
  try {
    const response = await axios.get("/api/user/address", {
      headers: { authorization: authToken },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.error(
      "getAddressFromServer : Error in fetching address details",
      e
    );
  }
};

const addAddressInServer = async (authToken, address) => {
  try {
    const response = await axios.post(
      "/api/user/address",
      { address },
      {
        headers: { authorization: authToken },
      }
    );
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.error("addAddressInServer : Error in adding address", e);
  }
};

const updateAddressInServer = async (authToken, id, address) => {
  try {
    const response = await axios.post(
      `/api/user/address/${id}`,
      { address },
      {
        headers: { authorization: authToken },
      }
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.error("updateAddressInServer : Error in updating address", e);
  }
};

const removeAddressFromServer = async (authToken, id) => {
  try {
    const response = await axios.delete(`/api/user/address/${id}`, {
      headers: { authorization: authToken },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.error("removeAddressFromServer : Error in removing address", e);
  }
};
export {
  getAddressFromServer,
  addAddressInServer,
  updateAddressInServer,
  removeAddressFromServer,
};
