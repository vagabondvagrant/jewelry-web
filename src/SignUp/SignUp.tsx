
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';

interface SignUpFormData {
  name: string;
  password: string;
}

interface SignUpFormProps {
  onLogin: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }, 
  } = useForm<SignUpFormData>();

  const [showPassword, setShowPassword] = useState<boolean | undefined>(false); // Change type to boolean | undefined

  const defaultName = 'Blud Dissentious';
  const defaultPassword = 'Dissentious_V5';

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    if (data.name === defaultName && data.password === defaultPassword) {
      onLogin();
      toast.success('Login successful!', { position: 'top-right' });
    } else {
      toast.error('Invalid credentials. Please check your name and password.', {
        position: 'top-right',
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="bg-gray-900 flex flex-col justify-center items-center h-screen opacity-90">
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-white text-lg mb-8 text-center">
          It is just a sample page. You won't be able to log in if you change the username or password.
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name" className="text-white">
            Name
          </label>
          <input
            id="name"
            {...register('name', {
              required: 'Name is required',
              pattern: {
                value: /^Blud Dissentious$/,
                message: 'Invalid name',
              },
            })}
            type="text"
            defaultValue={defaultName}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            autoComplete="username" // Add autocomplete attribute
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>

        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-sm font-medium text-white">
            Password
          </label>
          <input
            id="password"
            {...register('password', {
              required: 'Password is required',
              pattern: {
                value: /^Dissentious_V5$/,
                message: 'Invalid password',
              },
            })}
            type={showPassword ? 'text' : 'password'}
            defaultValue={defaultPassword}
            className="mt-1 p-2 w-full border border-gray-300 rounded pr-10"
            autoComplete="current-password" // Add autocomplete attribute
          />
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
          </div>
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </div>

        <button
          type="submit"
          className="bg-gray-700 text-white py-2 px-4 rounded-full hover:opacity-70 hover:text-white"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
