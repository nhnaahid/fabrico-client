import { Link } from "react-router-dom";
import SmallButton from "../../components/Buttons/SmallButton";

const SignUp = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        console.log(name, email, photo);
    }
    return (
        <div className="w-full md:w-3/5 py-5 border mx-auto flex items-center justify-center">
            <form onSubmit={handleSubmit} className="grid w-4/5 mx-auto gap-2">
                <h1 className="font-bold text-xl">Account Registration</h1>
                <div className="divider"></div>

                <label className="text-start">Name</label>
                <input className="border rounded-lg p-2" type="text" name="name" id="" placeholder="name" required />

                <label className="text-start">Email</label>
                <input className="border rounded-lg p-2" type="email" name="email" id="" placeholder="email" required />

                <label className="text-start">Photo URL</label>
                <input className="border rounded-lg p-2" type="text" name="photo" id="" placeholder="photo url" required />

                <label className="text-start">Password</label>
                <input className="border rounded-lg p-2" type="password" name="password" id="" placeholder="password" required />

                <input className="btn btn-sm mt-5 border-emerald-500" type="submit" value="Sign Up" />

                <p className="mt-3">Old User? <Link className="font-bold" to="/login">Login</Link></p>

                <div className="divider">Or</div>

                <SmallButton name="Sign up with Google"></SmallButton>

            </form>
        </div>
    );
};

export default SignUp;