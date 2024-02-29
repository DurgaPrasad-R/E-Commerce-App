const LoginSignup = () => {
  return (
    // signup form styled with tailwindcss
    <div className="flex justify-center items-center h-screen font-pops">
      <div className="w-96">
        <h1 className="text-4xl font-bold text-center mb-8">Sign Up</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Your Name</label>
            <input
              type="text"
              className="w-full border-2 border-gray-300 p-2 name"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border-2 border-gray-300 p-2 email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full border-2 border-gray-300 p-2 password"
              placeholder="Your Password"
            />
          </div>
          <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Continue
          </button>
          <p className="mt-4">
            Already have an account?{" "}
            <span className="text-red-500">Login Here</span>
          </p>
          <div className="mt-4">
            <input type="checkbox" className="mr-2" required />
            <label className="text-gray-700">
              I agree to the terms and conditions
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginSignup;
