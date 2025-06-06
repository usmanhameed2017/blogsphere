import * as Yup from 'yup';
import { allowedImageTypes } from '../../constants';

// Image type checker
const imageTypeChecker = (value) => !value || allowedImageTypes.includes(value?.type);

// Image size checker
const imageSizeChecker = (value) => !value || value.size && value.size <= 5000000

// Update blog validation
export const addBlog = Yup.object({
    title:Yup.string()
    .min(5, "Blog title must be at least 5 characters long")
    .max(50, "Blog title must not be longer than 30 characters")
    .required("Blog title is required"),

    description:Yup.string()
    .min(20, "Blog description must be at least 20 characters long")
    .max(3000, "Blog description must not be longer than 3000 characters")
    .required("Blog description is required"),
    
    coverImage:Yup.mixed()
    .test('type', "Invalid image format! Only 'png', 'jpg', 'jpeg', 'webp' 'gif' are allowed", imageTypeChecker)
    .test('size', "Image size must not be larger than 5MB", imageSizeChecker)
});