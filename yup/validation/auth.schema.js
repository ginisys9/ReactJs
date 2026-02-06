import * as yup from 'yup';
import { emailSchema } from './email.schema';
import { passwordSchema } from './password.schema';

export const logInShema = yup.object({
     email: emailSchema,
     password:passwordSchema
})
export const registerSchema = yup.object({
     name:yup.string().required('Name is required'),
     email:emailSchema,
     password:passwordSchema,
     confirmPassword:yup
                .string()
                .oneOf([yup.ref('password')],'passoword do not match')
                .required()


     
})