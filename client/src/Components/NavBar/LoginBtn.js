import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex items-center gap-11">
      <button className="w-36 h-14 outline-none border rounded-3xl font-medium cursor-pointer text-orange-500 bg-white active:bg-slate-100 ">
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
};

export default Login;
