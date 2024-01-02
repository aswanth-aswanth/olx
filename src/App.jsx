import Home from "./pages/Home";
import Product from "./pages/Product";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useEffect, useContext } from "react";
import { AuthContext, FirebaseContext } from "./store/context";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CreatePage from "./pages/CreatePage";

export default function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  // console.log(user);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log(user);
        const uid = user.uid;
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Sell" element={<CreatePage />} />
    </Routes>
  );
}

// async function sample() {
//   // const db = getFirestore(app);
//   const citiesCol = collection(db, "products");
//   const citySnapshot = await getDocs(citiesCol);
//   console.log(citySnapshot);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());
//   console.log(cityList);
// }
// async function sample2() {
//   // const db = getFirestore(app);

//   try {
//     const docRef = await addDoc(collection(db, "products"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815,
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }
// async function deleteDoc() {
//   // const res = await  db.collection('cities').doc('eRMb5fAc2UXELI9sRVT9').delete();
//   const res = await deleteDoc(doc(db, "products", "eRMb5fAc2UXELI9sRVT9"));
//   console.log(res);
// }
// async function signup() {
//   const auth = getAuth();
//   createUserWithEmailAndPassword(auth, "aswanthndl@gmail.com", "123456")
//     .then((userCredential) => {
//       // Signed up
//       const user = userCredential.user;
//       console.log(user);
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorMessage, errorCode);
//       // ..
//     });
// }
// async function signin() {
//   const auth = getAuth();
//   signInWithEmailAndPassword(auth, 'aswanthndl@gmail.com', '123456')
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       console.log(user);
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorMessage,errorCode);
//     });

// }
