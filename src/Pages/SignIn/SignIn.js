import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import universeIcon from '../../Assets/Images/ICONS/ICON/app.png';
import signinImg from '../../Assets/Images/Image/Ipad.jpg';
import { FBaseAuthContext } from '../../Context/FirebaseAuthContext';
// import useRoleCheck from '../../Hook/CheckUserRole/CheckUserRole';

const SignIn = () => {
  window.scrollTo({ top: 0, left: 0 });
  const { methodSignIn, methodSendPasswordResetEmail } =
    useContext(FBaseAuthContext);
  // const [userRole] = useRoleCheck(currentUser?.email);
  const [resetEmail, setResetEmail] = useState('');
  const [modalError, setModalError] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlerOnSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    methodSignIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        form.reset();
        setError('');
        // if (userRole === 'admin' || userRole === 'super-admin') {
        navigate('/dashboard');
        // } else {
        // navigate('/universe');
        // }

        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage === 'Firebase: Error (auth/wrong-password).') {
          setError('Wrong Password...!!!');
        }
        console.error(error);
      });
  };
  const handlerModalResetEmail = (e) => {
    const email = e.target.value;
    setResetEmail(email);
  };

  const handlerResetPassword = () => {
    methodSendPasswordResetEmail(resetEmail)
      .then(() => {
        // Email sent.
        if (resetEmail === '' || resetEmail === null) {
          toast.error('Please enter your email!');
        } else {
          setResetEmail('');
          toast.success(
            ' Email sent. Please check your email for password reset link'
          );
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setModalError(errorMessage);
        console.error(error);
      });
  };
  return (
    <>
      {/* Sign In Container */}
      <div className='signin-container'>
        <section className=' grid grid-cols-1 lg:grid-cols-2'>
          <div className='w-full hidden lg:block'>
            <img
              alt='Welcome'
              src={signinImg}
              className='w-full h-screen object-cover object-center'
            />
          </div>
          <div className='w-8/12 h-full flex flex-col justify-center mx-auto mt-10 lg:mt-0 '>
            <div className='flex flex-col items-center justify-center text-center mb-5'>
              <img src={universeIcon} alt='' className='w-20 rounded-2xl' />
              <p className='mt-4 text-3xl font-bold text-[#0A2131FF]'>
                Sign In
              </p>
            </div>

            <form
              className=''
              onSubmit={(e) => {
                handlerOnSubmit(e);
              }}
            >
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='block w-full p-2 text-gray-900 border border-[#1B1464FF] rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 '
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Password
                </label>
                <input
                  type='text'
                  name='password'
                  id='password'
                  className='block w-full p-2 text-gray-900 border border-[#1B1464FF] rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 '
                  required
                />
              </div>

              <div className='flex items-center justify-start -mt-2'>
                <p className='text-red-600 text-[0.8rem] font-medium text-center'>
                  {error}
                </p>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    className='mr-2 checkbox checkbox-xs border-[#1B1464FF] rounded-none'
                  />
                  <p>Keep me signed in</p>
                </div>
                {/* Modal Trigger Button */}
                <label
                  htmlFor='my-modal-3'
                  className='font-thin text-blue-600 text-sm  hover:link '
                >
                  Forgot Password?
                </label>
                {/* ______________ */}
              </div>

              <div className='flex flex-col items-center justify-center mt-10'>
                <button
                  type='submit'
                  className='text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-5'
                >
                  Sign In
                </button>
                <h1>
                  Don't have an account?{' '}
                  <Link to='/signup' className='font-bold'>
                    Sign Up
                  </Link>
                </h1>
              </div>
            </form>
          </div>
        </section>
      </div>
      {/* Modal Container */}
      <input type='checkbox' id='my-modal-3' className='modal-toggle' />
      <div className='modal '>
        <div className='modal-box relative rounded shadow-2xl '>
          <div className=' p-8 border shadow-inner shadow-gray-200'>
            <label
              htmlFor='my-modal-3'
              className='btn btn-sm bg-gray-800 hover:bg-gray-700 absolute right-2 top-2'
            >
              ✕
            </label>
            <h3 className='text-lg font-bold underline underline-offset-2 italic'>
              Enter Your Email:
            </h3>
            <p className='text-red-600 font-semibold text-center py-4'>
              {modalError}
            </p>
            <div className='flex flex-col mb-5'>
              <div className='flex relative '>
                <span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
                  <svg
                    width='15'
                    height='15'
                    fill='currentColor'
                    viewBox='0 0 1792 1792'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z'></path>
                  </svg>
                </span>
                <input
                  type='email'
                  className=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:border-gray-300 focus:ring-0 '
                  placeholder='Your email'
                  onChange={(e) => {
                    handlerModalResetEmail(e);
                  }}
                />
              </div>
            </div>

            <div className='modal-action'>
              <label
                htmlFor='my-modal-3'
                className='py-2 px-6 rounded bg-gray-700 hover:bg-gray-600 text-white border-blue-800 mx-1'
                onClick={() => {
                  handlerResetPassword();
                }}
              >
                Confirm
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* ------------- */}
    </>
  );
};

export default SignIn;
