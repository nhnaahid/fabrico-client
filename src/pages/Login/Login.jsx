import { Link } from "react-router-dom";
import SmallButton from "../../components/Buttons/SmallButton";

const Login = () => {
    return (
        <div className="w-full md:w-3/5 border py-5 mx-auto flex items-center justify-center">
            <form className="grid w-4/5 mx-auto gap-2">
                <h1 className="font-bold text-xl">Account Login</h1>
                <div className="divider"></div>

                <label className="text-start">Email</label>
                <input className="border  rounded-lg p-2" type="email" name="email" id="" placeholder="email" required />

                <label className="text-start">Password</label>
                <input className="border  rounded-lg p-2" type="password" name="password" id="" placeholder="password" required />

                <input className="btn btn-sm border-emerald-600 mt-5" type="submit" value="Login" />

                <p className="mt-3">New User? <Link className="font-bold" to="/signup">Sign Up</Link></p>

                <div className="divider ">Or</div>

                <SmallButton name="Login with Google"></SmallButton>

            </form>
        </div>
    );
};

export default Login;