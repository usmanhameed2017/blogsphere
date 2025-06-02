import axios from "axios";
import { axiosOptions, backendURL } from "../../constants";
import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError";

// Fetch all blogs
export const fetchAllBlogs = async () => {
    try 
    {
        const response = await axios.get(`${backendURL}/blog`, axiosOptions);
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
        const response = await axios.get(`${backendURL}/blog/recentBlogs`, axiosOptions);
        return ApiResponse(response).data;
    } 
    catch (error) 
    {
        return ApiError(error);
    }
};

// Fetch single blog
export const fetchSingleBlog = async (id) => {
    try 
    {
        const response = await axios.get(`${backendURL}/blog/${id}`, axiosOptions);
        return ApiResponse(response).data;
    } 
    catch (error) 
    {
        return ApiError(error);
    }
};