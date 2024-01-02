import { useContext, useState } from "react";
import { FirebaseContext, AuthContext } from "../store/context";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const date = new Date();
  const navigate=useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const storage = getStorage();
    const storageRef = ref(storage, `/image/${image.name}`);

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, image).then(async (snapshot) => {
      console.log("Uploaded a blob or file!");
      // console.log("snapshot : ", snapshot.ref);
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log("downloaded url : ",downloadURL)
      const db = getFirestore(firebase);
      const docRef = await addDoc(collection(db, "products"), {
        name,
        category,
        price,
        url:downloadURL,
        userId: user.uid,
        createdAt: date.toDateString(),
      });
      console.log("Document written with ID: ", docRef.id);
      navigate("/");
    }).catch((err)=>{
      console.log(err);
    });
  }

  return (
    <div className="flex items-center justify-center py-8">
      <form className="rounded-md border-2 border-black min-w-[340px] px-8 py-6">
        <label htmlFor="fname">Name</label>
        <br />
        <input onChange={(e) => setName(e.target.value)} className="w-full border-b-2 border-black focus:outline-none" type="text" id="fname" name="Name" />
        <br />
        <label htmlFor="category">Category</label>
        <br />
        <input onChange={(e) => setCategory(e.target.value)} className="w-full border-b-2 border-black focus:outline-none" type="text" id="category" name="category" />
        <br />
        <label htmlFor="price">Price</label>
        <br />
        <input onChange={(e) => setPrice(e.target.value)} className="w-full border-b-2 border-black focus:outline-none" type="number" id="price" name="Price" />
        <br />
        {/* </form> */}
        <br />
        <img alt="Posts" className=" w-32 h-32" src={image ? URL.createObjectURL(image) : ""}></img>
        {/* <form> */}
        <br />
        <input onChange={(e) => setImage(e.target.files[0])} type="file" />
        <br />
        <button onClick={handleSubmit} className="rounded-md my-4 block text-center bg-slate-800 text-white py-4 w-full">
          upload and Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
