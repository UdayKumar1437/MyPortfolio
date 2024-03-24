import React from "react";
import { Button } from "@mui/material";
import CountUp from "react-countup";
import myPic from "../Utils/UdayCropped.png";

const About = () => {
  return (
    <div className="flex pt-[100px] w-full bg-[#FFFFFF] iPhoneSE:flex-col laptop:flex-row gap-0 iPhoneSE:gap-[15px] laptop:gap-0">
      <div className="w-1/2 iPhoneSE:w-full laptop:w-1/2 flex justify-center">
        <img
          alt="profile"
          className="h-[500px] iPhoneSE:h-[400px] laptop:h-[500px] float-right"
          // src={
          //   "https://credesign.vercel.app/onePage/onePageFour/img/aboutFourImg.png"
          // }
          src={myPic}
        />
      </div>
      <div className="pr-[5%] w-1/2 iPhoneSE:w-full flex flex-col justify-center gap-[25px] laptop:w-1/2 text-left pl-[5%]">
        <h1 className="text-4xl font-semibold">
          I design that help user more easily to use
        </h1>
        <p className="text-[#656565]">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
        <p className="text-[#656565]">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
        <table>
          <tr>
            <td>
              <h1 className="text-3xl text-[#FA6C2C] font-bold">
                <CountUp end={107} duration={2} />+
              </h1>
              <p>Complete Project</p>
            </td>
            <td>
              <h1 className="text-3xl text-[#FA6C2C] font-bold">
                <CountUp end={17} duration={2} />+
              </h1>
              <p>Clients on worldwide</p>
            </td>
            <td>
              <h1 className="text-3xl text-[#FA6C2C] font-bold">
                <CountUp end={16} duration={2} />+
              </h1>
              <p>Client Satisfied</p>
            </td>
          </tr>
        </table>
        <div className="mb-0 iPhoneSE:mb-[20px] laptop:mb-0">
          <Button
            sx={{
              color: "white",
              backgroundColor: "#FA6C2C",
              ":hover": { backgroundColor: "#FA6C2C" },
              fontWeight: "bold",
            }}
          >
            Download My CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
