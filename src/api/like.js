import axios from "axios";
import { axiosOptions, backendURL } from "../../constants";
import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError";

// Like on blog
export const likeOnBlog = async (blogID) => {
    if(!blogID) return null;
    try 
    {
        const response = await axios.post(`${backendURL}/like/blog`, { blogID:blogID }, axiosOptions);
        return ApiResponse(response).message;
    } 
    catch (error) 
    {
        return ApiError(error).message;
    }
};