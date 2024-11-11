"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface FormData {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false, // Prevent automatic redirect
      email: data.email,
      password: data.password,
    });

    setLoading(false);

    if (result?.ok) {
      // Redirect to /home if login was successful
      router.push("/dashboard");
    } else if (result?.error) {
      // Show error message from backend if login failed
      toast.error(result.error, {});
    }
  };

  return (
    <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5 font-display">
      <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
        <div className="flex items-center justify-center w-full lg:p-12">
          <div className="flex items-center xl:p-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl"
            >
              <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                Sign In
              </h3>
              <p className="mb-4 text-grey-700">
                Enter your email and password
              </p>
              <a className="flex border cursor-pointer items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-gray-900 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:ring-gray-300">
                <img
                  className="h-5 mr-2"
                  src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                  alt=""
                />
                Sign in with Google
              </a>
              <div className="flex items-center mb-3">
                <hr className="h-0 border-b border-solid border-grey-500 grow" />
                <p className="mx-4 text-grey-600">or</p>
                <hr className="h-0 border-b border-solid border-grey-500 grow" />
              </div>
              <label
                htmlFor="email"
                className="mb-2 text-sm text-start text-grey-900"
              >
                Email*
              </label>
              <div className="relative mb-4">
                <input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  {...register("email")}
                  className="flex border items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                />
                {errors.email && (
                  <p className="text-red-500 absolute left-0 bottom-0 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <label
                htmlFor="password"
                className="mb-2 text-sm text-start text-grey-900"
              >
                Password*
              </label>
              <div className="relative mb-4">
                <input
                  id="password"
                  type="password"
                  {...register("password")}
                  placeholder="Enter a password"
                  className="flex border items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                />
                {errors.password && (
                  <p className="absolute bottom-0 left-0 text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="flex flex-row justify-between mb-8">
                <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    defaultValue=""
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 bg-white border-2 rounded-sm border-grey-500 peer peer-checked:border-0 peer-checked:bg-purple-blue-500">
                    <img
                      className=""
                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
                      alt="tick"
                    />
                  </div>
                  <span className="ml-3 text-sm font-normal text-grey-900">
                    Keep me logged in
                  </span>
                </label>
                <a
                  href="javascript:void(0)"
                  className="mr-4 text-sm font-medium text-purple-blue-500"
                >
                  Forget password?
                </a>
              </div>
              <button className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl bg-deep-forest-green-600 hover:bg-deep-forest-green-700 focus:ring-4 focus:ring-deep-forest-green-100 ">
                {loading ? "Signing in..." : "Sign In"}
              </button>
              <p className="text-sm leading-relaxed text-grey-900">
                Not registered yet?{" "}
                <a
                  href="javascript:void(0)"
                  className="font-bold text-grey-700"
                >
                  Create an Account
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>

    // <section className="font-display bg-gray-50 dark:bg-gray-900">
    //   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    //     <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    //       <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
    //         <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
    //           Sign in
    //         </h1>
    //         <form
    //           onSubmit={handleSubmit(onSubmit)}
    //           className="space-y-4 md:space-y-6"
    //         >
    //           <div>
    //             <label
    //               htmlFor="email"
    //               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //             >
    //               Email
    //             </label>
    //             <input
    //               type="email"
    //               id="email"
    //               {...register("email")}
    //               className={`bg-gray-50 border ${errors.email ? "border-red-500" : "border-gray-300"} text-gray-900 rounded-lg block w-full p-2.5`}
    //               placeholder="name@company.com"
    //             />
    //             {errors.email && (
    //               <p className="text-red-500 text-sm mt-1">
    //                 {errors.email.message}
    //               </p>
    //             )}
    //           </div>

    //           <div>
    //             <label
    //               htmlFor="password"
    //               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //             >
    //               Password
    //             </label>
    //             <input
    //               type="password"
    //               id="password"
    //               {...register("password")}
    //               className={`bg-gray-50 border ${errors.password ? "border-red-500" : "border-gray-300"} text-gray-900 rounded-lg block w-full p-2.5`}
    //               placeholder="••••••••"
    //             />
    //             {errors.password && (
    //               <p className="text-red-500 text-sm mt-1">
    //                 {errors.password.message}
    //               </p>
    //             )}
    //           </div>

    //           <button
    //             type="submit"
    //             className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    //             disabled={loading}
    //           >
    //             {loading ? "Signing in..." : "Sign In"}
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
