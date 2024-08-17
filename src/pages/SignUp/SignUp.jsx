import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const SignUp = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const userInfo = {
            name,
            email,
            photo,
            role: 'user'
        }
        // console.log(userInfo);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/');
                toast.success('User Registration Successful.');
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    const handleGoogleSignUp = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                toast.success('User Registration Successful.')
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }

    return (
        <div className="w-full md:w-3/5 py-5 border mx-auto flex items-center justify-center">
            <form onSubmit={handleSubmit} className="grid w-4/5 mx-auto gap-2">
                <h1 className="font-bold text-xl">Account Registration</h1>
                <div className="divider"></div>

                <label className="text-start">Name</label>
                <input className="border rounded-lg p-2" type="text" name="name" id="3" placeholder="name" required />

                <label className="text-start">Email</label>
                <input className="border rounded-lg p-2" type="email" name="email" id="4" placeholder="email" required />

                <label className="text-start">Photo URL</label>
                <input className="border rounded-lg p-2" type="text" name="photo" id="5" placeholder="photo url" required />

                <label className="text-start">Password</label>
                <input className="border rounded-lg p-2" type="password" name="password" id="6" placeholder="password" required />

                <input className="btn btn-sm mt-5 border-emerald-500" type="submit" value="Sign Up" />

                <p className="mt-3">Old User? <Link className="font-bold" to="/login">Login</Link></p>

                <div className="divider">Or</div>

                <button onClick={handleGoogleSignUp} className="btn btn-sm rounded-lg border border-emerald-600">Signup with Google</button>

            </form>
        </div>
    );
};

export default SignUp;