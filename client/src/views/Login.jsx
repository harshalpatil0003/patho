
import Login_img from '../Assets/login/userlogin.jpg'
export default function UserLogin() {
    return (
        <div className='  ' >

            <section className="bg-white">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                        <img
                            alt=""
                            src={Login_img}
                            className="absolute inset-0 h-full w-full object-cover opacity-100%"
                        />


                    </section>

                    <main
                        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                    >
                        <div className="max-w-xl lg:max-w-3xl mx-auto">

                            <h1 className="mt-2  text-center text-2xl font-bold text-gray-900  ">
                                Login
                            </h1>
                            <form action="#" className="mt-8 grid grid-cols-6 gap-6 block mx-auto">


                                <div className="col-span-6">
                                    <label htmlFor="Email" className="block text-xl font-medium text-gray-700"> Email </label>

                                    <input
                                        type="email"
                                        id="Email"
                                        name="email"
                                        className="mt-1 w-[100%] text-xl rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm md:w-[400px]"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="Password" className="block text-xl font-medium text-gray-700"> Password </label>

                                    <input
                                        type="password"
                                        id="Password"
                                        name="password"
                                        className="mt-1 w-[100%] text-xl rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm  md:w-[400px]"
                                    />
                                </div>

                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button
                                        className=" w-[100%] inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-xl font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 md:w-[400px]"
                                    >
                                        Login
                                    </button>
                                </div>


                            </form>
                            <p className="mt-4 text-xl text-gray-500 sm:mt-0">
                                Don't have account?
                                <a href="#" className="text-gray-700 underline"> Sign up</a>.
                            </p>
                        </div>
                    </main>
                </div>
            </section>

        </div>
    );
}
