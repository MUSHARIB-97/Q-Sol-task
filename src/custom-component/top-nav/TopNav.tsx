// TopNavbar.tsx
import React, { useState } from "react";
import logo from "./../../assets/images/logo.svg";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.js";
import CustomModal from "../custom-modal/CustomModal.js";
import { Button } from "@/components/ui/button.js";

const TopNavbar: React.FC = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const openModal = () => setLoginModalOpen(true);
  const closeModal = () => setLoginModalOpen(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });
      // console.log("API response:", response.data);
      alert("Successfully login");
      closeModal();
    } catch (error) {
      console.log("API error:", error);
      alert(error);
    }
  };

  return (
    <div className="bg-[#eeedf2] h-16 text-white flex justify-between items-center">
      <div className="w-2/12 pl-4">
        <img src={logo} alt="" className="object-contain w-full h-full" />
      </div>
      <div className="pr-4 flex items-center gap-6">
        <div className="flex gap-2">
          <Button variant="default" size="lg" onClick={openModal}>
            Login
          </Button>
          <Button variant="outline" size="lg">
            Signup
          </Button>
        </div>
        <Avatar style={{ width: "3rem", height: "3rem" }}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      {/* Modal for Login */}
      <CustomModal isOpen={isLoginModalOpen} onClose={closeModal}>
        <h2 className="text-lg font-semibold mb-4">Login</h2>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded-md p-2 outline-none bg-slate-600"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-md p-2 outline-none bg-slate-600"
          />
          <Button variant="default" size="lg" type="submit">
            Submit
          </Button>
        </form>
      </CustomModal>
    </div>
  );
};

export default TopNavbar;
