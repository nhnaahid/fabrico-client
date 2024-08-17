import { Link, useNavigate } from "react-router-dom";
import SmallButton from "../../components/Buttons/SmallButton";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
    const { logIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                // console.log(result.user);
                toast.success('User Login Successful.')
                navigate('/');
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                // console.log(result.user);
                toast.success('User Login Successful.')
                navigate('/');
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div className="w-full md:w-3/5 border py-5 mx-auto flex items-center justify-center">
            <form onSubmit={handleSubmit} className="grid w-4/5 mx-auto gap-2">
                <h1 className="font-bold text-xl">Account Login</h1>
                <div className="divider"></div>

                <label className="text-start">Email</label>
                <input className="border  rounded-lg p-2" type="email" name="email" id="1" placeholder="email" required />

                <label className="text-start">Password</label>
                <input className="border  rounded-lg p-2" type="password" name="password" id="2" placeholder="password" required />

                <input className="btn btn-sm border-emerald-600 mt-5" type="submit" value="Login" />

                <p className="mt-3">New User? <Link className="font-bold" to="/signup">Sign Up</Link></p>

                <div className="divider ">Or</div>

                <button onClick={handleGoogleLogin} className="btn btn-sm rounded-lg border border-emerald-600">Login with Google</button>

            </form>
        </div>
    );
};

export default Login;