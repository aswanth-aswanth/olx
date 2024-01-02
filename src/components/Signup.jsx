import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/olx-logo.png";
import { FirebaseContext } from "../store/context";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  // const history=useHistory();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: username,
      });

      // Profile updated!
      console.log("Profile updated");

      // Assuming db is your Firestore instance, make sure to import it
      const db = getFirestore(firebase);
      await setDoc(doc(db, "users", userCredential.user.uid), {
        username: username,
        id: userCredential.user.uid,
        phone: phone,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };
  return (
    <div>
      <div className="flex h-screen items-center justify-center">
        <form action="#" onSubmit={handleSubmit} className="rounded-md border-2 border-black min-w-[340px] px-4 py-2">
          <img className="mx-auto" width="200px" height="200px" src={Logo}></img>
          <label htmlFor="fname">Username</label>
          <br />
          <input onChange={(e) => setUsername(e.target.value)} className="w-full border-b-2 border-black focus:outline-none" type="text" id="fname" name="name" />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input onChange={(e) => setEmail(e.target.value)} className="w-full border-b-2 border-black focus:outline-none" type="email" id="phone" name="email" />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input onChange={(e) => setPhone(e.target.value)} className="w-full border-b-2 border-black focus:outline-none" type="number" id="password" name="phone" />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input onChange={(e) => setPassword(e.target.value)} className="w-full border-b-2 border-black focus:outline-none" type="password" id="lname" name="password" />
          <br />
          <br />
          <button className="rounded-md block text-center bg-slate-800 text-white py-4 w-full">Signup</button>
          <button onClick={() => navigate("/login")} className="rounded-md block text-center py-2 w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
