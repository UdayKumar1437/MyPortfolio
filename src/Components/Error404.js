import React from "react";
import errorKitten from "../Utils/404.jpg";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#A7B8B7] h-full w-full bg-blend-overlay flex flex-col iPhoneSE:flex-col laptop:flex-row ">
      <div className="w-1/3 iPhoneSE:w-full laptop:w-1/3 flex items-center justify-center">
        <img
          className="w-[300px] h-[500px] rounded-xl"
          src={errorKitten}
          alt="kitten"
        />
      </div>
      <div className="w-2/3 iPhoneSE:w-full laptop:w-2/3 font-Poppins px-[20px] flex flex-col justify-center text-lg">
        <h1 className="leading-loose">
          Meow! Looks like you've encountered a wandering kitten instead of the
          page you were looking for. We're sorry for the mix-up! While we track
          down the missing page, please accept this fluffy friend as a small
          consolation.
        </h1>
        <h1>
          In the meantime, feel free to click the button below to return to our
          homepage:{" "}
          <Button onClick={() => navigate("/")} variant="contained">
            Home
          </Button>
        </h1>
      </div>
    </div>
  );
};

export default Error404;
