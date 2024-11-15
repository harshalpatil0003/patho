
import register_img from '../Assets/register/register_img.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserRegister() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
        gender: "",
        passwordConfirmation: ""
    });

    const registerUser = async (e) => {
        e.preventDefault();

        const { name, email, password, mobile, gender, passwordConfirmation } = user;
         if (!name || !email || !password || !mobile || !gender) {
            toast.error("All Fields Are Required")
            return
        }

        const emailvalidation = email.match(/^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i)
        if (!emailvalidation) {
            toast.error("Invalid Email Id")
            return
        }
        const phonevalidation = mobile.match(/^([789]\d{9})$/)
        if (!phonevalidation) {
            toast.error("Invalid Mobile Number")
            return 
        }
        const strongpassword = password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/)
        if (!strongpassword) {
            toast.error("Password should contain 'Lower Letter(a-z)', 'Uppercase Letter(A-Z)' and at least one 'digit (0-9)'")
            return 
        }
        // Validate that passwords match
        if (password !== passwordConfirmation) {
            toast.error('Passwords does not match.');
            return;
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/RegisterUsers`, {
                name: name,
                email: email,
                password: password,
                mobile: mobile,
                gender: gender
            });

            if (response.data.success) {
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message || 'Failed To Register.');
            }

            // Clear the form
            setUser({
                name: "",
                email: "",
                password: "",
                mobile: "",
                gender: "",
                passwordConfirmation: "" // Clear password confirmation
            });
        } catch (error) {
            console.error('Registration error:', error); // Log error for debugging
            toast.error('User  already exists with this email');
        }
    };

    return (
        <div className=''>
            <section className="bg-white">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                        <img
                            alt=""
                            src={register_img}
                            className="absolute inset-0 h-full w-full object-cover opacity-100%"
                        />
                    </section>

                    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                        <div className="max-w-xl lg:max-w-3xl mx-auto">
                            <h1 className="mt-2 text-center text-2xl font-bold text-gray-900">
                                Register
                            </h1>
                            <form onSubmit={registerUser} className="mt-8 grid grid-cols-6 gap-6">
                                <div className="col-span-6">
                                    <label htmlFor="FirstName" className="block text-xl font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="FirstName"
                                        name="first_name"
                                        value={user.name}
                                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                                        className="w-[100%] text-xl mt-1 rounded-md border-gray-200 bg-white text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="Email" className="block text-xl font-medium text-gray-700"> Email </label>
                                    <input
                                        type="email"
                                        id="Email"
                                        name="email"
                                        value={user.email}
                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                        className="text-xl mt-1 w-full rounded-md border-gray-200 bg-white text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="Password" className="block text-xl font-medium text-gray-700"> Password </label>
                                    <input
                                        type="password"
                                        id="Password"
                                        name="password"
                                        value={user.password}
                                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                                        className="text-xl mt-1 w-full rounded-md border-gray-200 bg-white text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="PasswordConfirmation" className="block text-xl font-medium text-gray-700">
                                        Password Confirmation
                                    </label>
                                    <input
                                        type="password"
                                        id="PasswordConfirmation"
                                        name="passwordConfirmation" // Changed to match state
                                        value={user.passwordConfirmation}
                                        onChange={(e) => setUser({ ...user, passwordConfirmation: e.target.value })} // Handle password confirmation
                                        className="text-xl mt-1 w-full rounded-md border-gray-200 bg-white text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="Mobile" className="block text-xl font-medium text-gray-700"> Mobile </label>
                                    <input
                                        type="text"
                                        id="Mobile"
                                        name="Mobile"
                                        value={user.mobile}
                                        onChange={(e) => setUser({ ...user, mobile: e.target.value })}
                                        className="text-xl mt-1 w-full rounded-md border-gray-200 bg-white text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="gender" className="block text-xl font-medium text-gray-700">
                                        Gender
                                    </label>
                                    <select
                                        name="gender"
                                        value={user.gender}
                                        onChange={(e) => setUser({ ...user, gender: e.target.value })}
                                        id="gender"
                                        className='text-xl mt-1 w-full rounded-md border-gray-200 bg-white text-gray-700 shadow-sm'
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>

                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button
                                        type="submit"
                                        className="w-[100%] inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-xl font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                            <p className="mt-4 text-xl text-gray-500 sm:mt-0">
                                Already have an account?
                                <Link to='/userlogin'> Log in</Link>
                            </p>
                        </div>
                    </main>
                </div>

            </section>
            
            <ToastContainer 
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition:bounce
            />
        </div>
    );
}

export default UserRegister;