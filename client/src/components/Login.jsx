import { useState } from "react";
import { useAppContext } from "../context/AppContent";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const Login = () => {
  const { setShowLogin, axios, login, navigate } = useAppContext();
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

   const onSubmitHandler = async (e) => {
      try {
       e.preventDefault();
       
      const { data } = await axios.post(`/api/user/${state}`, {
        name, email, password,
      });
      if (data.success) {
        login(data.token); // sets token + axios Authorization header
        setShowLogin(false);
        toast.success(state === "login" ? "Logged in successfully!" : "Account created!");
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
   };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowLogin(false)}
      className="fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center text-sm text-gray-600 bg-black/60 backdrop-blur-sm"
    >
       <motion.form 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        onSubmit={onSubmitHandler} 
        onClick={(e)=>e.stopPropagation()} 
        className="flex flex-col gap-4 m-auto items-start p-8 py-10 w-80 sm:w-[380px] text-gray-500 rounded-2xl shadow-2xl border border-gray-100 bg-white"
      >
            <p className="text-2xl font-bold m-auto mb-2 text-gray-800">
                <span className="text-primary">{state === "login" ? "Welcome Back" : "Join Us"}</span>
            </p>
            <p className="text-gray-400 text-center w-full mb-4">Please enter your details to continue</p>
            
            {state === "register" && (
                <div className="w-full">
                    <p className="mb-1 font-medium">Name</p>
                    <input onChange={(e) => setName(e.target.value)} value={name} placeholder="John Doe" className="border border-gray-200 rounded-lg w-full p-2.5 outline-primary transition-all focus:ring-2 focus:ring-primary/20" type="text" required />
                </div>
            )}
            <div className="w-full ">
                <p className="mb-1 font-medium">Email Address</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="example@mail.com" className="border border-gray-200 rounded-lg w-full p-2.5 outline-primary transition-all focus:ring-2 focus:ring-primary/20" type="email" required />
            </div>
            <div className="w-full ">
                <p className="mb-1 font-medium">Password</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="••••••••" className="border border-gray-200 rounded-lg w-full p-2.5 outline-primary transition-all focus:ring-2 focus:ring-primary/20" type="password" required />
            </div>
            
            <button className="bg-primary hover:bg-primary-dull active:scale-[0.98] transition-all text-white w-full py-3 rounded-xl cursor-pointer font-semibold mt-4 shadow-lg shadow-primary/20">
                {state === "register" ? "Create Account" : "Login"}
            </button>

            <div className="w-full text-center mt-2">
              {state === "register" ? (
                  <p>
                      Already have account? <span onClick={() => setState("login")} className="text-primary font-semibold cursor-pointer hover:underline">click here</span>
                  </p>
              ) : (
                  <p>
                      Create an account? <span onClick={() => setState("register")} className="text-primary font-semibold cursor-pointer hover:underline">click here</span>
                  </p>
              )}
            </div>
        </motion.form>
    </motion.div>
  );
};

export default Login;
