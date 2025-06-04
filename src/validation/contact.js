import * as Yup from 'yup';

// Contact us form validation
export const contactFormValidation = Yup.object({
    name:Yup.string()
    .min(3, "Name must be at least 3 characters long")
    .max(12, "Name must not be longer than 15 characters")
    .required("Name name is required"),

    email:Yup.string()
    .lowercase()
    .email('Invalid email')
    .required("Email is required"),

    message:Yup.string()
    .required('Message is required')
    .min(20, "Message must be at least 20 characters long")
    .max(350, "Message must not be longer than 350 characters")
});