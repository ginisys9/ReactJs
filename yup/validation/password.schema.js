import * as yup from 'yup';
export const passwordSchema = yup
                        .string()
                        .min(6,'minimum 6 character')
                        .matches(/[A-Z]/,'at 1 uppsecase letter')
                        .matches(/[0-9]/,'at least one number')
                        .required('password is required')