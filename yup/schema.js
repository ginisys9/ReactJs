import * as yup from 'yup';
export const registerSchema = yup.object({
     /** validation for name */
      name:yup
             .string()
             .required('Name is required')
             .trim()
             .lowercase()
             .test(
                'noAdmin',
                'admin not allowed',
                value => value !=='admin'
             ),
     /** validation for email */
      email:yup
               .string()
               .when('age',{
                is:age => age>=25,
                then:value => value.email('Invalid Email')
                .required('Email is Required if age is 25 or above'),
                otherwise: value => value.notRequired()
               })
               .email('Invalid email')
               .required('Email is required')
               .test(
                'checkEmail',
                'Email alraedy exist',
                async value =>{
                    const res = await fetch(`https://jsonplaceholder.typicode.com/users?email=${value}`);
                    const data = await res.json()
                   return data.length === 0
                }
               ),
     /** validation for password */
     password:yup
                .string()
                .min(6,'password must be 6    character')
                .required(),
     confirmPaas:yup
                  .string()
                  .oneOf([yup.ref('password')],'password do not match'),
     age:yup
          .number()
          .min(18,'age must be 18')
          .required(),

    skills:yup
    .array()
    .of(yup.string())
    .min(2,'select at least 2 skills')
    .max(4,'select at most 4 skills')
})

