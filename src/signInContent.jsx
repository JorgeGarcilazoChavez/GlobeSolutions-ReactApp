import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth/AuthContext";

function SignInContent(){
    const navigate = useNavigate();
    const { login } = useAuth();

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (!form.checkValidity()) {
        form.reportValidity();
        return;
        }

        login();
        navigate("/dashboard");
    };


    return (<div className="bg-blue-900 text white m-10 rounded-lg font-['Google_Sans'] p-10 text-center ">
        
        <h1 className="text-pink-500 font-medium text-5xl border-b-2 border-pink-300 p-5 mb-10">Sign In</h1>
        <div className="flex justify-center mb-8">
        <h1 className="text-pink-400 font-medium text-3xl">Don't have an account yet? <Link to={'/signup'}><button className="text-cyan-100 font-medium text-3xl mb-10 hover:text-pink-300 hover:shadow-xl/50 text-3xl rounded-full p-2">Sign Up</button></Link></h1>
        </div>
        
        <form onSubmit={handleSubmit} className="text-2xl text-cyan-300 flex flex-col gap-4">
                <input required type="email" className="bg-slate-900 inset-shadow-sm/60 rounded-xl p-2 w-full max-w-sm mx-auto focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Email"/>
                <input required type="password" className="bg-slate-900 inset-shadow-sm/60 rounded-xl p-2 w-full max-w-sm mx-auto focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Password"/>
                <button type="submit" className="text-cyan-100 w-full max-w-sm mx-auto hover:shadow-xl/50 text-3xl rounded-full p-2">Submit</button>
        </form>

        
    </div>)
}

function SignUpContent(){
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [pwError, setPwError] = useState("");

    const navigate = useNavigate();
    const { login } = useAuth();

    const handlePasswordChange = (e) => {
        const val = e.target.value;
        setPassword(val);

        if (val.length < 8) setPwError("Password must be at least 8 characters.");
        else if (confirm && val !== confirm) setPwError("Passwords do not match.");
        else setPwError("");
    };

    const handleConfirmChange = (e) => {
        const val = e.target.value;
        setConfirm(val);

        if (password && password !== val) setPwError("Passwords do not match.");
        else if (password.length < 8) setPwError("Password must be at least 8 characters.");
        else setPwError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

     if (!form.checkValidity()) {
        form.reportValidity();
        return;
        }

        if (password.length < 8 || password !== confirm) return;

        login();
        navigate("/dashboard");
    };
    
    return(
        
        <div className="bg-blue-900 text white m-10 rounded-lg font-['Google_Sans'] p-10 text-center ">
        <h1 className="text-pink-500 font-medium text-5xl border-b-2 border-pink-300 p-5 mb-10">Sign Up</h1>
        <form onSubmit={handleSubmit} className="text-2xl text-cyan-300 flex flex-col gap-4">
            <input required className="bg-slate-900 inset-shadow-sm/60 rounded-xl p-2 w-full max-w-sm mx-auto focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Name"/>
            <input required className="bg-slate-900 inset-shadow-sm/60 rounded-xl p-2 w-full max-w-sm mx-auto focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Last Name"/>
            <input required type="number" className="bg-slate-900 inset-shadow-sm/60 rounded-xl p-2 w-full max-w-sm mx-auto focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Phone Number"/>
            <input required type="email" className="bg-slate-900 inset-shadow-sm/60 rounded-xl p-2 w-full max-w-sm mx-auto focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Email"/>
            <input required id="p1" type="password" onChange={handlePasswordChange} className="bg-slate-900 inset-shadow-sm/60 rounded-xl p-2 w-full max-w-sm mx-auto focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Password"/>
            <input required id="p2" type="password" onChange={handleConfirmChange} className="bg-slate-900 inset-shadow-sm/60 rounded-xl p-2 w-full max-w-sm mx-auto focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Confirm Password"/>
            {pwError && <p className="text-red-400">{pwError}</p>}
            <button type="submit" className="text-cyan-100 w-full max-w-sm mx-auto hover:shadow-xl/50 text-3xl rounded-full p-2">Submit</button>
        </form>
        </div>
    )
}

export {SignInContent, SignUpContent}