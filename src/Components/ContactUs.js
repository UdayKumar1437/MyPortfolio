import React from "react";
import { Box, Button } from "@mui/material";
import CountUp from "react-countup";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailIcon from '@mui/icons-material/Mail';
import TextField from '@mui/material/TextField';

const ContactUs = () => {
  return (
    <div className="flex pt-[100px] w-full bg-[#FFFFFF] iPhoneSE:flex-col laptop:flex-row pb-[50px]">
      <div className="w-1/2 iPhoneSE:w-full laptop:w-1/2 flex pl-[5%] flex-col gap-[40px]">
        <h1 className="text-start font-bold text-4xl pr-[20%]">Need help? Get in touch now!</h1>
        <div className="flex gap-[20px] ">
          <div className="bg-[#FFF5EF] h-[60px] w-[60px] flex justify-center items-center rounded-xl">
            <PhoneInTalkIcon sx={{ color: "#FA6C2C" }} />
          </div>
          <div className="flex flex-start flex-col">
            <p className="text-start">Phone</p>
            <p className="text-start">+91 7670848696</p>
          </div>
        </div>
        <div className="flex gap-[20px]">
          <div className="bg-[#FFF5EF] h-[60px] w-[60px] flex justify-center items-center rounded-xl">
            <MailIcon sx={{ color: "#FA6C2C" }} />
          </div>
          <div className="flex flex-start flex-col">
            <p className="text-start">Email</p>
            <p className="text-start">udaykumarvalapudasu@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="pr-[5%] w-1/2 iPhoneSE:w-full flex flex-col justify-center gap-[10px] laptop:w-1/2 text-left pl-[5%]">
        <form className="flex flex-col gap-[20px]">
        <div className="flex gap-[10px] flex-col laptop:flex-row">
        <TextField color="warning" id="outlined-basic" fullWidth helperText="Please enter your name" label="Name" variant="outlined" />
        <TextField color="warning" id="outlined-basic" helperText="Please enter your Phone Number" label="Phone" fullWidth variant="outlined" />
        </div>
        <TextField color="warning" id="outlined-basic" helperText="Please enter your Email" fullWidth label="Email" variant="outlined" />
        <TextField color="warning" helperText="Please enter your Message" fullWidth multiline rows={3} id="outlined-basic" label="Message" variant="outlined" />
        <Button sx={{ color: "#FFFFFF" , fontWeight: "bold",textTransform: "none",fontSize: "17px"}} variant="contained" color="warning">Send Me a Message</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
