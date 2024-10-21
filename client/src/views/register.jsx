

import register_img from '../Assets/register/register_img.jpg'
import {Link} from 'react-router-dom'

export default function UserRegister() {
    return (
        <div className='  ' >

            <section className="bg-white">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                        <img
                            alt=""
                            src={register_img}
                            className="absolute inset-0 h-full w-full object-cover opacity-100%"
                        />


                    </section>

                    <main
                        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                    >
                        <div className="max-w-xl lg:max-w-3xl mx-auto">

                            <h1 className="mt-2  text-center text-2xl font-bold text-gray-900  ">
                                Register
                            </h1>
                            <form action="#" class="mt-8 grid grid-cols-6 gap-6">
                                <div class="col-span-6">
                                    <label for="FirstName" class="block text-xl font-medium text-gray-700">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        required
                                        id="FirstName"
                                        name="first_name"
                                        class="w-[100%] text-xl mt-1  rounded-md border-gray-200 bg-white text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div class="col-span-6">
                                    <label for="Email" class="block text-xl font-medium text-gray-700"> Email </label>

                                    <input
                                        type="email"
                                        required
                                        id="Email"
                                        name="email"
                                        class=" text-xl mt-1 w-full rounded-md border-gray-200 bg-white  text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="Password" class="block text-xl font-medium text-gray-700"> Password </label>

                                    <input
                                        type="password"
                                        required
                                        id="Password"
                                        name="password"
                                        class="text-xl mt-1 w-full rounded-md border-gray-200 bg-white  text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="PasswordConfirmation" class="block text-xl font-medium text-gray-700">
                                        Password Confirmation
                                    </label>

                                    <input
                                        type="password"
                                        required
                                        id="PasswordConfirmation"
                                        name="password_confirmation"
                                        class=" text-xl mt-1 w-full rounded-md border-gray-200 bg-white  text-gray-700 shadow-sm"
                                    />
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="Password" class="block text-xl font-medium text-gray-700"> Mobile </label>

                                    <input
                                        type="text"
                                        required
                                        id="Password"
                                        name="password"
                                        class="text-xl mt-1 w-full rounded-md border-gray-200 bg-white  text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="PasswordConfirmation" class="block text-xl font-medium text-gray-700">
                                        Gender
                                    </label>


                                    <select name="cars" id="cars" className='text-xl mt-1 w-full rounded-md border-gray-200 bg-white  text-gray-700 shadow-sm'>
                                        <option value="volvo">Male</option>
                                        <option value="saab">Female</option>
                                        <option value="audi">Others</option>
                                    </select>




                                    {/* <input
                                        type="password"
                                        required
                                        id="PasswordConfirmation"
                                        name="password_confirmation"
                                        class=" text-xl mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    /> */}
                                </div>

                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button
                                        className=" w-[100%] inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-xl font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                            <p class="mt-4 text-xl text-gray-500 sm:mt-0">
                                Already have an account?
                                <Link to='/userlogin'>Log in</Link>
                            </p>

                        </div>
                    </main>
                </div>
            </section>

        </div>
    );
}
