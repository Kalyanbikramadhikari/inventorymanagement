import React, { useState } from 'react';
import { Link } from "react-router-dom";

import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [passwordStrength, setPasswordStrength] = useState('');
    const [atleastEightChar, setAtlestEightChar] = useState(false)
    const [containsNumberSymbol, setContainsNumberSymbol] = useState(false)
    // const [containsNameEmail, setContainsNameEmail] = useState('')

    const checkPasswordStrength = (password) => {
        console.log('password', password)
        const hasMinLength = password.length >= 8;
        setAtlestEightChar(hasMinLength)

        const hasNumber = /\d/.test(password);
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const hasNumberOrSymbol = hasNumber || hasSymbol
        setContainsNumberSymbol(hasNumberOrSymbol)
        const hasNameOrEmail = password.toLowerCase().includes(formData.fullName.toLowerCase()) ||
            password.toLowerCase().includes(formData.email.toLowerCase());
        // setContainsNameEmail(hasNameOrEmail)

        if (hasMinLength && hasNumber && hasSymbol) return 'Strong';
        if (hasMinLength && (hasNumber || hasSymbol)) return 'Medium';
        if (hasNameOrEmail) return 'Weak';
        return 'Weak';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (name === 'password') {
            setPasswordStrength(checkPasswordStrength(value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen  flex items-center justify-center p-12 px-20 font-roboto">
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
                <div className="  bg-white flex justify-center  p-8 md:w-1/2">
                    <div className='w-[566px] '>
                        <div className="flex justify-end space-x-4 mb-8 p-1 bg-[#ECF0FF] rounded-[9px]">
                            <Link to='/login' className='w-1/2 '>

                                <button className="text-gray-600 hover:text-gray-800 w-1/2 h-full text-[16px]">Sign In</button>
                            </Link>
                            <button className="bg-blue-600 text-white px-4 py-4 rounded-[5px] w-1/2 text-[16px]">Sign Up</button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6 ">
                            <div className='flex flex-col gap-2'>
                                <label className="flex justify-start text-[16px] font-medium text-gray-700 mb-1 ">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-3 outline-none  py-3 shadow-md text-[14px] border border-[#A3C7F6] rounded-[5px] focus:outline-none "
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className="flex justify-start text-[16px] font-medium text-gray-700 mb-1">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="w-full px-3 outline-none  py-3 shadow-md text-[14px] border border-[#A3C7F6] rounded-[5px] focus:outline-none "
                                    placeholder="Enter username"
                                    required
                                />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className="flex justify-start text-[16px] font-medium text-gray-700 mb-1">
                                    Email Id
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 outline-none  py-3 shadow-md text-[14px] border border-[#A3C7F6] rounded-[5px] focus:outline-none "
                                    placeholder="Enter your email address"
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
                                    className="w-full px-3 outline-none  py-3 shadow-md text-[14px] border border-[#A3C7F6] rounded-[5px] focus:outline-none "
                                    placeholder="Enter Password"
                                    required
                                />
                                <div className="mt-1 flex flex-col items-start">
                                    <span className="text-[14px] text-gray-500">
                                        {
                                            formData.password ? (
                                                <>
                                                    {
                                                        passwordStrength === 'Strong' || passwordStrength === 'Medium' ? (
                                                            <span className='text-green-950'><DoneIcon /></span>
                                                        ) : (
                                                            <span className='text-red-700'><CloseIcon /></span>
                                                        )
                                                    }
                                                </>
                                            ):(
                                                <span className='opacity-50'><DoneIcon /></span>
                                                
                                            )
                                        }
                                        Password Strength: {passwordStrength}
                                    </span>
                                    <ul className="text-[14px] text-gray-500 flex flex-col items-start ">
                                        {/* <li>
                                        {console.log(containsNameEmail)}

                                            {
                                                containsNameEmail || containsNameEmail ? (
                                                    <span className='text-red-700'><CloseIcon  /></span>
                                                ) : (
                                                    <span className='text-green-950'><DoneIcon /></span>
                                                )

                                            }Cannot contain your name or email address</li> */}
                                        <li>
                                            {

                                                formData.password ? (
                                                    <>
                                                        {
                                                            atleastEightChar || atleastEightChar ? (
                                                                <span className='text-green-950'><DoneIcon /></span>
                                                            ) : (
                                                                <span className='text-red-700'><CloseIcon /></span>
                                                            )

                                                        }
                                                    </>
                                                ):(
                                                    <span className='opacity-50'><DoneIcon /></span>
                                                    
                                                )
                                            
                                            }
                                            At least 8 characters</li>

                                        <li>
                                            {
                                                formData.password ? (
                                                    <>
                                                        {
                                                            containsNumberSymbol || containsNumberSymbol ? (
                                                                <span className='text-green-950'><DoneIcon /></span>
                                                            ) : (
                                                                <span className='text-red-700'><CloseIcon /></span>
                                                            )

                                                        }
                                                    </>
                                                ):(
                                                    <span className='opacity-50'><DoneIcon /></span>
                                                    
                                                )
                                            }

                                            Contains a number or symbol</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className="flex justify-start text-[16px] font-medium text-gray-700 mb-1">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full px-3 outline-none  py-3 shadow-md text-[14px] border border-[#A3C7F6] rounded-[5px] focus:outline-none "
                                    placeholder="Enter Password"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-[5px] hover:bg-blue-700 transition-colors"
                            >
                                Create Account
                            </button>

                            <p className="text-[16px] text-gray-500 text-center">
                                By signing up to create an account I accept Company's{' '}
                                <a href="#" className="text-blue-600 hover:underline">
                                    Terms of use
                                </a>{' '}
                                &{' '}
                                <a href="#" className="text-blue-600 hover:underline">
                                    Privacy Policy
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;