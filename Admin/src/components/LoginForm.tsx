import { useUser } from "@/hooks/useUser";
import { User } from "@/types/user.t";
import axios from "axios";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = React.useState<User>({
    username: "",
    password: "",
  });

  const navigate = useNavigate()

  const { user,login } = useUser();

  useEffect(() => {
    if(user){
        navigate("/dashboard")
    }
  },[user])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/auth/login", formData);
      login(data);
      toast.success(data.message)
      navigate("/dashboard")
    } catch (error) {
     toast.error((error as any).response.data.message );
    }
  };
  return (
    <div className="w-full p-7 rounded border ">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-customBlue ">Login</h1>
        <p className="text-sm text-gray-500">
          Enter your credentials to login to your account
        </p>
      </div>
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 pt-4">
            <label className="text-black text-sm font-medium">Username</label>
            <input
              className="w-full p-2 border text-sm rounded"
              type="text"
              placeholder="enter your username"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 pt-3">
            <label className="text-black text-sm font-medium ">Password</label>
            <input
              className="w-full p-2 border text-sm  rounded"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <button className="w-full bg-black font-medium p-2 rounded mt-8 text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
