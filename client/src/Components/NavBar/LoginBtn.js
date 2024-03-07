import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex items-center gap-11">
      {localStorage.getItem("auth-token") ? (
        <button
          className="w-36 h-14 outline-none border rounded-3xl font-medium cursor-pointer text-orange-500 bg-white active:bg-slate-100"
          onClick={() => {
            localStorage.removeItem("auth-token");
            window.location.replace("/");
          }}
        >
          Logout
        </button>
      ) : (
        <Link to="/login">
          <button className="w-36 h-14 outline-none border rounded-3xl font-medium cursor-pointer text-orange-500 bg-white active:bg-slate-100 ">
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default Login;
