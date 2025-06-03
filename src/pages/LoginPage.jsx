// import { useAuth } from '@/hooks/useAuth';
// import { useForm } from 'react-hook-form';
// import { useNavigate, useLocation } from 'react-router-dom';

// const LoginPage = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { login } = useAuth();

//   const from = location.state?.from?.pathname || '/dashboard';

//   const onSubmit = (data) => {
//     if (data.email && data.password) {
//       login('fake-jwt-token');
//       navigate(from, { replace: true });
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
//         <h2 className="text-2xl font-bold mb-4">Login</h2>

//         <div className="mb-4">
//           <label className="block mb-1">Email</label>
//           <input
//             type="email"
//             {...register('email', { required: 'Email is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1">Password</label>
//           <input
//             type="password"
//             {...register('password', { required: 'Password is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
//         </div>
//         <div className='flex justify-between'>
//           <p className='text-xs'>Remember me</p>
//           <p className='underline text-blue-900 text-xs'>Forgot Password?</p>

//         </div>

//         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;


import { useAuth } from '@/hooks/useAuth';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import loginImg from "../assets/login.jpg"

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from = location.state?.from?.pathname || '/dashboard';

  const onSubmit = (data) => {
    if (data.email && data.password) {
      login('fake-jwt-token');
      navigate(from, { replace: true });
    }
  };

  const handleSignUp = () => {
    navigate("/signup")
  }

  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100 p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div className='flex justify-between items-center text-sm mb-4'>
            <label className='flex items-center space-x-1'>
              <input type="checkbox" className="form-checkbox" />
              <span>Remember me</span>
            </label>
            <p className='underline text-blue-600 cursor-pointer'>Forgot Password?</p>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded mb-3">
            Login
          </button>

          <p className="text-sm text-center">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up here
            </Link>
          </p>
        </form>
      </div>

      {/* Right: Image */}
      <div className="hidden md:block">
        <img
          src={loginImg}
          alt="ShopWave"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default LoginPage;
