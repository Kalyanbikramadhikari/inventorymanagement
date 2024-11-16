// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate: 
// github: https://github.com/Kalyanbikramadhikari



import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAdminLoginMutation } from '../store/APIFeatures/AccountApi';
import { useDispatch } from 'react-redux';
import { getAdminDetail } from '../store/reducerSlices/AdminSlice';

const SignInForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        usernameemail: '',

        password: '',
    });
    const [rememberMe, setRememberMe] = useState(false);
    const [adminLogin, {isLoading, isSuccess, data}]= useAdminLoginMutation()
    // Check localStorage for saved user data when the component mounts
    useEffect(() => {
        const savedUser = localStorage.getItem('userData');
        if (savedUser) {
            const parsedUser = JSON.parse(savedUser);
            setFormData({
                usernameemail: parsedUser.usernameemail,
                password: parsedUser.password,
            });
            setRememberMe(true);
        }else{
            setFormData({
                usernameemail:'',
                password:''
            })
        }
    }, []);

    useEffect(()=>{
        if(isSuccess){
            navigate('/')
        }
    })
    const handleRememberMeChange = () => {
        setRememberMe((prev) => !prev);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        // Handle form submission logic
        console.log('Form submitted:', formData);
        const loginData = await adminLogin({'username':formData.usernameemail, 'password':formData.password});
        console.log('loginData', loginData)

        // debugger
        dispatch(getAdminDetail(loginData.data))

        if (rememberMe) {
            // Save user data to localStorage
            localStorage.setItem('userData', JSON.stringify(formData));
        } else {
            // Remove from localStorage if "Remember Me" is unchecked
            localStorage.removeItem('userData');
        }
        // navigate('/')
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-12 px-20 font-roboto">
            <div className="w-full  flex rounded-[5px]-lg  overflow-hidden">
                {/* Left side - Blue section */}
                <div className="  text-white hidden md:block relative w-1/2   ">
                    <div className=" flex w-full  h-[95vh]">
                        <img src="/assets/images/login.png" alt="" className='w-full' />
                    </div>
                    <div className="h-full flex flex-col justify-center items-start absolute top-0  w-full p-12 xl:p-20 2xl:p-24  ">
                        <h1 className="text-[42px] font-extrabold ">
                            Get Started with Your
                        </h1>
                        <h1 className="text-[42px] font-extrabold ">
                            Admin Account
                        </h1>
                        <p className="text-blue-100 text-[18px] font-normal">
                            Sign up to streamline your business management.
                        </p>
                    </div>
                </div>

                {/* Right side - Form section */}
                <div className="  bg-white flex justify-center items-center p-8 md:w-1/2">
                    <div className='w-[566px] '>
                        <div className="flex justify-end space-x-4 mb-8 p-1 bg-[#ECF0FF] rounded-[9px] ">
                            <button className="bg-blue-600 text-white px-4 py-4 rounded-[5px]   text-[16px] w-1/2">Sign In</button>

                            <Link to='/register' className='w-1/2 '>
                                <button className="text-gray-600 hover:text-gray-800 h-full w-full flex items-center justify-center text-[16px] ">Sign Up</button>

                            </Link>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6 ">
                            <div className='flex flex-col gap-2'>
                                <label className="flex justify-start text-[16px] font-medium text-gray-700 mb-1 ">
                                    Username/ Email
                                </label>
                                <input
                                    type="text"
                                    name="usernameemail"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-3 outline-none  py-3 shadow-md border border-[#A3C7F6] text-[14px] rounded-[5px] focus:outline-none "
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>





                            <div className='flex flex-col gap-2'>
                                <label className="flex justify-start text-[16px] font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-3 outline-none  py-3 shadow-md border border-[#A3C7F6] text-[14px] rounded-[5px] focus:outline-none "
                                    placeholder="Enter Password"
                                    required
                                />

                            </div>

                            <div className='flex justify-between'>
                                <div className="flex items-center space-x-3">
                                    <input type="checkbox" name="" value="" checked={rememberMe} onChange={handleRememberMeChange} />
                                    <span className='text-[16px] '>Remember Me</span>
                                </div>
                                <div className="flex">
                                    <span className='text-[16px] text-[#E81A1D] font-roboto'>Forgot Password ?</span>
                                </div>
                            </div>



                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-3 rounded-[5px] hover:bg-blue-700 transition-colors"
                            >
                                Login
                            </button>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;