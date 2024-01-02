import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../store/context";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function List() {
  const { firebase } = useContext(FirebaseContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function callMe() {
      const db = getFirestore(firebase);
      const querySnapshot = await getDocs(collection(db, "products"));
      // console.log("useEffect snap : ", querySnapshot.docs);
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // });
      const allPost = querySnapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      console.log(allPost);
    }
    callMe();
  }, []);
  return (
    <div className=" max-w-7xl px-20 mx-auto">
      <h2 className=" text-2xl my-7">Fresh recommendations</h2>
      <div className="flex flex-wrap gap-4 justify-center shrink-0">
        <div className=" border-2 border-[#f2f2f2]black h-[266px] w-[264px] p-2 rounded-md"></div>
        <div className=" border-2 border-[#f2f2f2] h-[266px] w-[264px] p-2 rounded-md"></div>
        <div className=" border-2 border-[#f2f2f2]black h-[266px] w-[264px] p-2 rounded-md"></div>
        <div className=" border-2 border-[#f2f2f2]black h-[266px] w-[264px] p-2 rounded-md"></div>
        <div className=" border-2 border-[#f2f2f2]black h-[266px] w-[264px] p-2 rounded-md"></div>
        <div className=" border-2 border-[#f2f2f2]black h-[266px] w-[264px] p-2 rounded-md"></div>
        <div className=" border-2 border-[#f2f2f2]black h-[266px] w-[264px] p-2 rounded-md"></div>
        <div className=" border-2 border-[#f2f2f2]black h-[266px] w-[264px] p-2 rounded-md"></div>
        <div className=" border-2 border-[#f2f2f2]black h-[266px] w-[264px] p-2 rounded-md"></div>
        <div className=" border-2 border-[#f2f2f2]black h-[266px] w-[264px] p-2 rounded-md"></div>
        <div className=" border-2 border-[#f2f2f2]black h-[266px] w-[264px] p-2 rounded-md"></div>
        <div className=" border-2 border-[#f2f2f2]black h-[266px] w-[264px] p-2 rounded-md"></div>
        <div className=" border-2 border-[#f2f2f2]black h-[266px] w-[264px] p-2 rounded-md"></div>
        <div className=" border-2 border-[#f2f2f2]black h-[266px] w-[264px] p-2 rounded-md"></div>
        <div className=" border-2 border-[#f2f2f2]black h-[266px] w-[264px] p-2 rounded-md"></div>
        <div className=" border-2 border-[#f2f2f2]black h-[266px] w-[264px] p-2 rounded-md"></div>
      </div>
      <button className="block mx-auto justify-center rounded-md border-2 border-black p-2 py-3 mt-12 mb-28 font-bold">Load more</button>
    </div>
  );
}

export default List;
