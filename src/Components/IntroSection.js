import React from "react";
import { TypeAnimation } from "react-type-animation";
import FacebookIcon from "@mui/icons-material/Facebook";
import { IconButton } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const IntroSection = () => {
  return (
    <div className="flex pt-[100px] w-full bg-[#FFF3EA] iPhoneSE:flex-col-reverse laptop:flex-row">
      <div className="w-1/2 iPhoneSE:w-full flex flex-col justify-center gap-[10px] laptop:w-1/2 text-left pl-[5%]">
        <h1>I'M GLAD YOU'RE HERE.</h1>
        <h1 className="font-semibold text-3xl">Hi 👋 I’m Uday Kumar Solving</h1>
        <TypeAnimation
          className="text-3xl text-[#FA6C2C] font-bold"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "modern problems",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "modern solutions",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
        <h1 className="font-bold text-3xl">through design</h1>
        <p>
          I'm creative UX/UI Designer based in Canada, and I'm very passionate
          and dedicated to my work. Solving modern problem through design. I'm
          creative UX/UI Designer based in Canada, and I'm very passionate and
          dedicated to my work. Solving modern problem through design.
        </p>
        <div>
          <h1 className="mb-[10px] font-medium">FIND WITH ME</h1>
          <div className="flex gap-[10px]">
            <div className="rounded-lg bg-[#FA6C2C] hover:bg-[#FFFFFF]">
              <IconButton sx={{ color: "white",":hover": { color: "#FA6C2C" } }}>
                <FacebookIcon />
              </IconButton>
            </div>
            <div className="rounded-lg bg-[#FA6C2C] hover:bg-[#FFFFFF]">
              <IconButton>
                <XIcon sx={{ color: "white",":hover": { color: "#FA6C2C" } }} />
              </IconButton>
            </div>
            <div className="rounded-lg bg-[#FA6C2C] hover:bg-[#FFFFFF]">
              <IconButton>
                <LinkedInIcon sx={{ color: "white",":hover": { color: "#FA6C2C" } }} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 iPhoneSE:w-full laptop:w-1/2 flex justify-center">
        <img
          alt="profile"
          className="h-[500px] iPhoneSE:h-[300px] laptop:h-[500px] float-right"
          src={
            "https://credesign.vercel.app/onePage/onePageFour/img/homeBannerFourImg.png"
          }
        />
      </div>
    </div>
  );
};

export default IntroSection;
