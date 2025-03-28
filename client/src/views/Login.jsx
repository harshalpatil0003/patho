import { useState } from 'react';
import Login_img from '../Assets/login/userlogin.jpg';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function UserLogin() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const Login = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        const { email, password } = user;
        if (!email || !password) {
            toast.error('Invalid credentials!');
            return; // Exit early if fields are empty
        }

        try {
            console.log('Sending request with email:', email, 'and password:', password);
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/loginUsers`, {
                email: email,
                password: password
            });
            console.log('API Response:', response.data);
            if (response.data.success) {
                toast.success(response.data.message);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.data));
                toast.loading('Redirecting to Dashboard...');
                setTimeout(() => {
                    window.location.href = '/UserPanel';
                }, 3000);
            } else {
                toast.error(response.data.message); // Use message from API if available
            }
        } catch (error) {
            // Handle errors that occur during the API call
            toast.error('Invalid Credentials!');
            console.error("Login error:", error); // Log the error for debugging
        }
    };

    return (
        <div>
            <section className="bg-white">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                        <img
                            alt=""
                            src={Login_img}
                            className="absolute inset-0 h-full w-full object-cover opacity-100%"
                        />
                    </section>

                    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                        <div className="max-w-xl lg:max-w-3xl mx-auto">
                            <h1 className="mt-2 text-center text-2xl font-bold text-gray-900">
                                Login
                            </h1>
                            <form onSubmit={Login} className="mt-8 grid grid-cols-6 gap-6 mx-auto">
                                <div className="col-span-6">
                                    <label htmlFor="Email" className="block text-xl font-medium text-gray-700"> Email </label>
                                    <input
                                        type="email"
                                        id="Email"
                                        value={user.email} // Access email from user state
                                        onChange={(e) => setUser({ ...user, email: e.target.value })} // Update only email
                                        name="email"
                                        className="mt-1 w-[100%] text-xl rounded-md border-gray-200 bg-white text-gray-700 shadow-sm md:w-[400px]"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="Password" className="block text-xl font-medium text-gray-700"> Password </label>
                                    <input
                                        type="password"
                                        id="Password"
                                        value={user.password} // Access password from user state
                                        onChange={(e) => setUser({ ...user, password: e.target.value })} // Update only password
                                        name="password"
                                        className="mt-1 w-[100%] text-xl rounded-md border-gray-200 bg-white text-gray-700 shadow-sm md:w-[400px]"
                                    />
                                </div>

                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button
                                        type="submit" // Change to type submit
                                        className="w-[100%] inline-block shrink-0 rounded-md border border-cyan-600 bg-cyan-800 px-12 py-3 text-xl font-medium text-white transition hover:bg-transparent hover:text-cyan-600 focus:outline-none focus:ring active:text-cyan-500 md:w-[400px]">
                                        Login
                                    </button>
                                </div>
                            </form>
                            <p className="mt-4 text-xl text-gray-500 sm:mt-0">
                                Don't have an account?
                                <Link to="/userregister"> Sign up</Link>
                            </p>
                        </div>
                    </main>
                </div>
            </section>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                theme="dark"

            />
        </div>
    );
}