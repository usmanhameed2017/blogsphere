export const ApiError = (error) => {
    const data = error.response.data;
    const message = error.response.data.message;
    return { data, message };
};