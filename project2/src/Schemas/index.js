import * as Yup from 'yup'
export const signUpSchema =  Yup.object({
    email:Yup.string().email().required("Please enter you email"),
    company:Yup.string().min(2).max(8).required("Please enter Company name"),
    password:Yup.string().min(6).required("Please enter your password"),
    checkbox:Yup.bool().oneOf([true],"Please confirm Terms and Conditions")
})