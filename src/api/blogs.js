import axios from "axios";
import { backendURL } from "../../constants";
import { ApiResponse } from "../utils/ApiResponse";

export const fetchAllBlogs = async () => {
    try 
    {
        const response = await axios.get(`${backendURL}/blog`);
        return ApiResponse(response);
    } 
    catch (error) 
    {
        return error;
    }
};