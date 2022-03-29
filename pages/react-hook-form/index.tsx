import { FieldValues, useForm } from 'react-hook-form';
import NavBar from '../../components/NavBar';
import { formValidation } from './validation';
import { yupResolver } from '@hookform/resolvers/yup';

const RaectHookForm = () => {
  const formSchema = formValidation;
  const formOptions: FieldValues = {
    //This function allows you to use any external validation library such as Yup,
    resolver: yupResolver(formSchema),
    mode: 'onChange',
  };

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => {
    reset();
    console.log(data);
  };
  return (
    <>
      <NavBar />

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fName">FIRST NAME</label>
        <br />
        <input
          {...register('fName')}
          type="text"
          name="fName"
          id="fName"
          placeholder="ENTER YOUR FIRST NAME"
        />
        {errors.fName && (
          <div style={{ color: 'red' }}>First Name Required</div>
        )}
        <br />
        <br />
        <label htmlFor="lName">LAST NAME</label>
        <br />
        <input
          {...register('lName')}
          type="text"
          name="lName"
          id="lName"
          placeholder="ENTER YOUR LAST NAME"
        />
        {errors.lName && <div style={{ color: 'red' }}>Last Name Reuired</div>}
        <br />
        <br />

        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};

export default RaectHookForm;
