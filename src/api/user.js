import axios from "axios";
import { axiosOptions, backendURL, getUser } from "../../constants";
import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError";
import { showError, showSuccess } from "../utils/toasterMessage";

// Update user info
export const updateUserInfo = async (values) => {
    try 
    {
        const user = getUser();
        const response = await axios.put(`${backendURL}/user/${user?._id}`, values, { ...axiosOptions, headers:{ "Content-Type":"multipart/form-data" } });
        localStorage.setItem("user", JSON.stringify(ApiResponse(response).data)); // Keep UI in sync
        showSuccess(ApiResponse(response).message);
    } 
    catch (error) 
    {
        showError(ApiError(error).message);
    }
};

// Update user info
export const updatePassword = async (values, action) => {
    try 
    {
        const response = await axios.patch(`${backendURL}/user/changePassword`, values, axiosOptions);
        action.resetForm();
        showSuccess(ApiResponse(response).message);
    } 
    catch (error) 
    {
        showError(ApiError(error).message);
    }
};