import axios from "axios";
import { backendURL } from "../../constants";
import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError";

// Fetch all blogs
export const fetchAllBlogs = async () => {
    try 
    {
        const response = await axios.get(`${backendURL}/blog`);
        return ApiResponse(response).data;
    } 
    catch (error) 
    {
        return ApiError(error);
    }
};

// Fetch recent blogs
export const fetchRecentBlogs = async () => {
    try 
    {
        const response = await axios.get(`${backendURL}/blog/recentBlogs`);
        return ApiResponse(response).data;
    } 
    catch (error) 
    {
        return ApiError(error);
    }
};