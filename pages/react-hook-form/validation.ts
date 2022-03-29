import * as Yup from 'yup';

export const formValidation = Yup.object({
    fName: Yup.string().trim().required('Required Full Name'),
    lName: Yup.string().trim().required('Required Last Name')
})