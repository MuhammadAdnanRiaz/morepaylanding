'use client'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Image from "next/image";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Role } from "@/app/services/types";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";


interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    password: string;
    confirmPassword: string;
    referral?: string;
}

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().required('Email is required').email('Invalid email address'),
    role: Yup.string().required('Role is required'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: Yup.string()
        .required('Confirm password is required')
        .oneOf([Yup.ref('password')], 'Passwords do not match'),
    referral: Yup.string().optional(),
});


interface RegisterAuthFormProps {
    roles: Role[];
}

export default function RegisterAuthForm({ roles }: RegisterAuthFormProps) {
    const [parent] = useAutoAnimate();
    const searchParams = useSearchParams()

    const referralCode = searchParams.get('referral_code')

    console.log('referecl code', referralCode)

    const { register, handleSubmit, watch, formState: { errors }, getValues, setValue } = useForm<FormData>({
        resolver: yupResolver(validationSchema),
    });

    useEffect(() => {
        if (referralCode && getValues('referral')?.trim() === '') {
            setValue('referral', referralCode.toString())
        }
    }, [referralCode, setValue, getValues])

    const onSubmit = (data: FormData) => {
        // Handle form submission, e.g., send data to backend
        console.log(data);
    };
    return (
        <section className="font-display bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <Image className="w-8 h-8 mr-2 text-white rounded-full" src="/img/footer_logo.png" alt="footer_logo" width={40} height={40} />
                    Morepay
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign up
                        </h1>
                        <form ref={parent} className="space-y-4 md:space-y-2" onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <div>
                                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        {...register("firstName", { required: "First name is required" })}
                                        className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.firstName ? 'border-red-500' : ''}`}
                                        placeholder="John"
                                    />
                                    <div className={`mt-1 min-h-[0.5rem] transition-all duration-300 ${errors.firstName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        {...register("lastName", { required: "Last name is required" })}
                                        className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.lastName ? 'border-red-500' : ''}`}
                                        placeholder="Doe"
                                    />
                                    <div className={`mt-1 min-h-[0.5rem] transition-all duration-300 ${errors.lastName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                                        className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                                        placeholder="name@company.com"
                                    />
                                    <div className={`mt-1 min-h-[0.5rem] transition-all duration-300 ${errors.email ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Role
                                    </label>
                                    <select
                                        id="role"
                                        {...register("role", { required: "Role is required" })}
                                        className={`bg-gray-50 h-[46px] border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.role ? 'border-red-500' : ''}`}
                                    >
                                        <option value="">Select Role</option>
                                        {roles.map((role) => (
                                            <option key={role.id} value={role.name}>{role.name}</option>
                                        ))}
                                    </select>
                                    <div className={`mt-1 min-h-[0.5rem] transition-all duration-300 ${errors.role ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                        {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters long" } })}
                                        className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.password ? 'border-red-500' : ''}`}
                                        placeholder="••••••••"
                                    />
                                    <div className={`mt-1 min-h-[0.5rem] transition-all duration-300 ${errors.password ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        {...register("confirmPassword", { required: "Confirm password is required", validate: (value) => value === watch("password") || "Passwords do not match" })}
                                        className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                                        placeholder="••••••••"
                                    />
                                    <div className={`mt-1 min-h-[0.5rem] transition-all duration-300 ${errors.confirmPassword ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="referral" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Referral
                                </label>
                                <input
                                    type="text"
                                    id="referral"
                                    {...register("referral")}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Optional"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full text-white bg-deep-forest-green-600 hover:bg-deep-forest-green-700 focus:ring-4 focus:outline-none focus:ring-deep-forest-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-deep-forest-green-600 dark:hover:bg-deep-forest-green-700 dark:focus:ring-deep-forest-green-800"
                            >
                                Sign Up
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account?{" "}
                                <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Sign In
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}