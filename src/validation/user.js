import * as Yup from 'yup';
import { allowedImageTypes } from '../../constants';

export const loginValidation = Yup.object({
    username:Yup.string()
    .required('Username is required'),

    password:Yup.string()
    .required('Password is required')
});

// Image type checker
const imageTypeChecker = (value) => !value || allowedImageTypes.includes(value?.type);

// Image size checker
const imageSizeChecker = (value) => !value || value.size && value.size <= 5000000


export const signupValidation = Yup.object({
    fname:Yup.string()
    .min(3, "First name must be at least 3 characters long")
    .max(12, "First name must not be longer than 12 characters")
    .required("First name is required"),

    lname:Yup.string()
    .min(3, "Last name must be at least 3 characters long")
    .max(12, "Last name must not be longer than 12 characters")
    .required("Last name is required"),

    age:Yup.number()
    .min(18, "Age must be greater than or equal to 18")
    .max(50, "Age must not be greater than 50")
    .required("Age is required"),

    gender:Yup.string()
    .required("Gender is required"),

    email:Yup.string()
    .lowercase()
    .email('Invalid email')
    .required("Email is required"),

    username:Yup.string()
    .lowercase()
    .required('Username is required'),

    password:Yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Enter strong password")
    .required('Password is required'),

    cpassword:Yup.string()
    .oneOf([Yup.ref('password'), null], "Password & confirm password must be identical")
    .required('Confirm password is required'),
    
    profile_image:Yup.mixed()
    .test('type', "Invalid image format! Only 'png', 'jpg', 'jpeg', 'webp' 'gif' are allowed", imageTypeChecker)
    .test('size', "Image size must not be larger than 5MB", imageSizeChecker)
});

// Update user validation
export const updateUserValidation = Yup.object({
    fname:Yup.string()
    .min(3, "First name must be at least 3 characters long")
    .max(12, "First name must not be longer than 12 characters")
    .required("First name is required"),

    lname:Yup.string()
    .min(3, "Last name must be at least 3 characters long")
    .max(12, "Last name must not be longer than 12 characters")
    .required("Last name is required"),

    age:Yup.number()
    .min(18, "Age must be greater than or equal to 18")
    .max(50, "Age must not be greater than 50")
    .required("Age is required"),

    gender:Yup.string()
    .required("Gender is required"),

    email:Yup.string()
    .lowercase()
    .email('Invalid email')
    .required("Email is required"),

    username:Yup.string()
    .lowercase()
    .required('Username is required'),
    
    profile_image:Yup.mixed()
    .test('type', "Invalid image format! Only 'png', 'jpg', 'jpeg', 'webp' 'gif' are allowed", imageTypeChecker)
    .test('size', "Image size must not be larger than 5MB", imageSizeChecker)
});