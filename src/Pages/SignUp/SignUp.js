import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import * as FAIcons from 'react-icons/fa';
import * as TBIcons from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import universeIcon from '../../Assets/Images/ICONS/ICON/app.png';
import signupImg from '../../Assets/Images/Image/Ipad.jpg';
import { uploadImageHandler } from '../../Components/UploadImage/UploadImage';
import { FBaseAuthContext } from '../../Context/FirebaseAuthContext';

const SignUp = () => {
  // window.scrollTo({ top: 0, left: 0 });
  const { methodCreateUser, methodUpdateProfile, methodSignOut } =
    useContext(FBaseAuthContext);
  const [error, setError] = useState('');
  const [errorMatchPass, setErrorMatchPass] = useState('');
  const [errorMatchEmail, setErrorMatchEmail] = useState('');
  const [errorPatternPass, setErrorPatternPass] = useState('');
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setPreview(URL.createObjectURL(event.target.files[0]));
  };

  const handlerOnSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const fullName = form.first_name.value + ' ' + form.last_name.value;
    const phoneNumber = form.phone_number.value;
    const email = form.email.value;
    const newPassword = form.new_password.value;
    const confirmPassword = form.confirm_password.value;
    const profileImg = form.profileImg.files[0];
    let profileImgUrl = '';
    // console.log(fullName, phoneNumber, identity, email, profileImg);

    if (profileImg) {
      console.log('image');
      const formData = new FormData();
      formData.append('file', profileImg);
      formData.append('upload_preset', 'image_upload_preset');
      formData.append('cloud_name', 'cloudhosting');
      console.log(formData);

      // fetch('https://api.cloudinary.com/v1_1/cloudhosting/image/upload', {
      // 	method: 'POST',
      // 	body: formData
      // })
      // .then((res) => res.json())
      // axios
      // 	.post('https://api.cloudinary.com/v1_1/cloudhosting/image/upload', formData)
      // 	.then((res) => {
      // 		console.log(res);
      // 		if (res.status === 200) {

      uploadImageHandler(formData)
        .then((data) => {
          console.log(data);
          profileImgUrl = data;
          console.log(profileImgUrl);
          if (newPassword !== confirmPassword) {
            setErrorMatchPass("*Password didn't match");
            console.log(newPassword, confirmPassword);
          } else {
            setErrorMatchPass('');
            const password = confirmPassword;
            if (fullName && phoneNumber && email && password && profileImgUrl) {
              methodCreateUser(email, password)
                .then((userCredential) => {
                  const user = userCredential.user;
                  setError('');
                  form.reset();
                  handlerOnUpdateProfile(fullName, profileImgUrl);
                  handlerOnLogout();
                  saveUserDataToDatabase(
                    fullName,
                    phoneNumber,
                    email,
                    profileImgUrl
                  );
                  console.log(user);
                })
                .catch((error) => {
                  const errorMessage = error.message;
                  if (
                    errorMessage ===
                    'Firebase: Error (auth/email-already-in-use).'
                  ) {
                    const signUpError = '*Email already existed*';
                    setError(signUpError);
                  }
                  // setLoading(false);
                  console.error(error);
                });
            }
          }
        })

        .catch((error) => {
          console.log(error);
        });

      // const imageHostKey = process.env.REACT_APP_imgbb_api_key;
    } else {
      console.log('img');
      if (newPassword !== confirmPassword) {
        setErrorMatchPass("*Password didn't match");
        console.log(newPassword, confirmPassword);
      } else {
        console.log('ok');
        setErrorMatchPass('');
        const password = confirmPassword;
        if (fullName && phoneNumber && email && password) {
          methodCreateUser(email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              setError('');
              form.reset();
              handlerOnUpdateProfile(fullName, profileImgUrl);
              handlerOnLogout();
              saveUserDataToDatabase(fullName, phoneNumber, email);
              console.log(user);
            })
            .catch((error) => {
              const errorMessage = error.message;
              if (
                errorMessage === 'Firebase: Error (auth/email-already-in-use).'
              ) {
                const signUpError = '*Email already existed*';
                setError(signUpError);
              }
              // setLoading(false);
              console.error(error);
            });
        }
      }
    }
    // console.log(fullName, phoneNumber, identity, email, newPassword, confirmPassword, profileImg);
  };
  const handlerOnEmail = (e) => {
    const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!emailRegEx.test(e.target.value)) {
      setErrorMatchEmail('*Please enter a valid email address*');
      return;
    }
    setErrorMatchEmail('');
  };

  const handlerOnPassword = (e) => {
    if (!/(?=.*[A-Z])/.test(e.target.value)) {
      setErrorPatternPass('*Password should contain at least one upper case*');
      return;
    } else {
      setErrorPatternPass('');
    }
    if (!/(?=.*[a-z])/.test(e.target.value)) {
      setErrorPatternPass('*Password should contain at least one lower case*');
      return;
    } else {
      setErrorPatternPass('');
    }
    if (!/(?=.*?[0-9])/.test(e.target.value)) {
      setErrorPatternPass('*Password should contain at least one digit*');
      return;
    } else {
      setErrorPatternPass('');
    }
    if (!/(?=.*?[!@#$&*~])/.test(e.target.value)) {
      setErrorPatternPass(
        '*Password should contain at least one Special character*'
      );
      return;
    } else {
      setErrorPatternPass('');
    }
    if (!/.{6,}/.test(e.target.value)) {
      setErrorPatternPass('*Password Must be at least 6 characters in length*');
      return;
    } else {
      setErrorPatternPass('');
    }
    setErrorPatternPass('');
  };

  const saveUserDataToDatabase = async (
    fullName,
    phoneNumber,
    email,
    profileImgUrl
  ) => {
    try {
      const userData = {
        name: fullName,
        phoneNumber: phoneNumber,
        email: email,
        profileImage: profileImgUrl
      };
      const res = await fetch('https://server-tars-universe.vercel.app/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      const data = await res.json();
      console.log(data);
      if (data) {
        toast.success('Your account has been created successfully. ');
        navigate('/signin');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlerOnUpdateProfile = (fullName, imgUrl) => {
    methodUpdateProfile(fullName, imgUrl)
      .then(() => {})
      .catch(() => {});
  };
  const handlerOnLogout = () => {
    methodSignOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      {/* Signup Container */}
      <div className='signup-container'>
        <section className=' grid grid-cols-1 lg:grid-cols-2 '>
          <div className='hidden lg:block'>
            <img
              alt='Welcome'
              src={signupImg}
              className='w-full h-screen object-cover object-center '
            />
          </div>
          <div className=' overflow-y-scroll'>
            <div className='w-8/12 h-screen flex flex-col mx-auto pt-12'>
              <form
                className=''
                onSubmit={(e) => {
                  handlerOnSubmit(e);
                }}
              >
                <div className=' relative flex flex-col items-center justify-center text-center mb-28'>
                  <img src={universeIcon} alt='' className='w-20 rounded-2xl' />
                  <p className='mt-2 mb-10 text-3xl font-bold text-[#0A2131FF]'>
                    Sign Up
                  </p>

                  {/* Profile Picture */}
                  <div className='absolute top-40 flex items-center justify-center'>
                    <label
                      for='dropzone-file'
                      className='relative flex flex-col items-center justify-center w-20 h-20  border-2 border-gray-300 cursor-pointer bg-gray-50 hover:bg-gray-100  rounded-full'
                    >
                      <div className='flex flex-col items-center justify-center'>
                        <FAIcons.FaRegUser className='text-4xl text-gray-300' />
                      </div>
                      <div className='z-30 absolute top-[3.3rem] right-0'>
                        <TBIcons.TbCameraPlus className='text-gray-400 ' />
                      </div>
                      <input
                        id='dropzone-file'
                        type='file'
                        accept='image/*'
                        name='profileImg'
                        className='hidden'
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>

                  {preview && (
                    <div className=' absolute top-40 flex items-center justify-center'>
                      <label
                        for='dropzone-file'
                        className='flex flex-col items-center justify-center w-20 h-20 cursor-pointer bg-gray-300 hover:bg-gray-100  rounded-full'
                      >
                        <div className='flex flex-col items-center justify-center rounded-full bg-gray-800'>
                          <img
                            src={preview}
                            alt='Image_Photo'
                            className='w-20 h-20 rounded-full object-cover object-center'
                          />
                        </div>
                      </label>
                    </div>
                  )}
                </div>
                <div className='grid gap-6 mb-4 grid-cols-1 md:grid-cols-2'>
                  <div>
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900'
                    >
                      First Name
                    </label>
                    <input
                      type='text'
                      name='first_name'
                      className='block w-full p-2 text-gray-900 border border-[#1B1464FF] rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 '
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='last_name'
                      className='block mb-2 text-sm font-medium text-gray-900'
                    >
                      Last name
                    </label>
                    <input
                      type='text'
                      name='last_name'
                      className='block w-full p-2 text-gray-900 border border-[#1B1464FF] rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 '
                      required
                    />
                  </div>
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='phone_number'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    name='phone_number'
                    className='block w-full p-2 text-gray-900 border border-[#1B1464FF] rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 '
                    required
                  />
                </div>

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
                    className='block w-full p-2 text-gray-900 border border-[#1B1464FF] rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 '
                    required
                    onChange={(e) => {
                      handlerOnEmail(e);
                    }}
                  />
                  <div className='flex items-center justify-start'>
                    <p className='text-red-600 text-[0.8rem] font-medium'>
                      {errorMatchEmail}
                    </p>
                  </div>
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Create New Password
                  </label>
                  <input
                    type='text'
                    name='new_password'
                    className='block w-full p-2 text-gray-900 border border-[#1B1464FF] rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 '
                    required
                    onChange={(e) => {
                      handlerOnPassword(e);
                    }}
                  />

                  <div className='flex items-center justify-start'>
                    <p className='text-red-600 text-[0.8rem] font-medium'>
                      {errorPatternPass}
                    </p>
                  </div>
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='confirm_password'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Repeat New Password
                  </label>

                  <input
                    type='text'
                    name='confirm_password'
                    className='block w-full p-2 text-gray-900 border border-[#1B1464FF] rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 '
                    required
                  />
                </div>
                <div className='flex items-center mb-6 -mt-6'>
                  <div className='flex items-center justify-center mt-2'>
                    <p className='text-red-600 text-[0.8rem] font-medium text-center'>
                      {errorMatchPass}
                      {error}
                    </p>
                  </div>
                </div>
                <div className='flex flex-col items-center justify-center mt-10'>
                  <button
                    type='submit'
                    className='text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-3'
                  >
                    Sign Up
                  </button>

                  <h1>
                    Already have an account?{' '}
                    <Link to='/signin' className='font-bold'>
                      Sign In
                    </Link>
                  </h1>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;
