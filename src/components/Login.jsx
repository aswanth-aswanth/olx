import { useState, useContext } from "react";
import Logo from "../assets/olx-logo.png";
import { FirebaseContext } from "../store/context";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("I am logged in ");
        console.log("user data : ", user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex h-screen items-center justify-center">
        <form action="#" onSubmit={handleSubmit} className="rounded-md border-2 border-black min-w-[340px] px-4 py-2">
          <img width="200px" height="200px" src={Logo}></img>
          <label htmlFor="fname">Email</label>
          <br />
          <input onChange={(e) => setEmail(e.target.value)} className="w-full border-b-2 border-black focus:outline-none" type="email" id="phone" name="email"/>
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input onChange={(e) => setPassword(e.target.value)} className="w-full border-b-2 border-black focus:outline-none" type="password" id="lname" name="password"/>
          <br />
          <br />
          <button className="rounded-md block text-center bg-slate-800 text-white py-4 w-full">Login</button>
          <button onClick={()=>navigate("/signup")} className="rounded-md block text-center py-2 w-full">Signup</button>
        </form>
      </div>
    </div>
  );
}
