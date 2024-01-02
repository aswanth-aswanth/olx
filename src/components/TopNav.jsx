import { useContext } from "react";
import SellButton from "../assets/SellButton";
import { AuthContext } from "../store/context";
import { signOut } from "firebase/auth";
import { FirebaseContext } from "../store/context";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

function TopNav() {
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();
  function signout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("signout success");
        navigate('/login');
        // code for redirect user to Log-in page
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <header className=" bg-[#f2f2f2] z-10 p-2 px-4 sticky top-0">
      <div className=" max-w-7xl mx-auto   flex items-center justify-between">
        <div>
          <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd">
            <path d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          </svg>
        </div>
        <div className="flex flex-1 mx-4">
          <div className="flex items-center h-[48px] border-2 border-[#002f34] bg-white rounded-md px-2">
            <svg width="18px" height="18px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd">
              <path d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path>
            </svg>
            <input className=" pl-4 text-[#002f34] placeholder:text-[#002f34] focus:outline-none" type="text" placeholder="India" />
            <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd">
              <path d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path>
            </svg>
          </div>
          <div className="border-2 border-black flex items-center ml-4 w-full rounded-md overflow-hidden">
            <input className="px-2 border-0 h-11 w-full" type="text" placeholder="Find Cars, Mobile Phones and more..." />
            <button className="p-2 bg-[#002f34] h-[45px] px-3">
              <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className=" fill-white" fillRule="evenodd">
                <path d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center text-[#002f34] text-md font-semibold">
          <div className="flex items-center">
            English
            <button className="p-4">
              <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" ḥ="evenodd">
                <path d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path>
              </svg>
            </button>
          </div>
          <button onClick={()=>navigate("/login")} className=" border-b-2 border-black hover:border-0 mr-8 ">{user ? user.displayName : "Login"}</button>
          <button onClick={signout} className="">
            Logout
          </button>
          <button onClick={()=>navigate("/sell")} className="w-[104px] h-[44px] mx-4">
            <SellButton />
          </button>
        </div>
      </div>
    </header>
  );
}

export default TopNav;
