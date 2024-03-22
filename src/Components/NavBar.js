import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material";
import IntroSection from "./IntroSection";
import About from "./About";
import MyServices from "./MyServices";
import EducationAndExperience from "./EducationAndExperience";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
      <nav className="bg-[#FFFFFF] py-[20px] iPhoneSE:py-[10px] laptop:py-[20px] flex justify-between px-[30px] items-center">
        <div>
          <Link to="/">
            <img alt="logo" className="h-[40px]" src={'https://credesign.vercel.app/onePage/onePageFour/img/Logo.png'} />
          </Link>
        </div>
        <ul className="flex items-center gap-[20px] iPhoneSE:hidden iPadMini:flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Services</Link>
          </li>
          <li>
            <Link to="/contact-us">Resume</Link>
          </li>
          <li>
            <Link to="/contact-us">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact-us">Testimonial</Link>
          </li>
          <li>
            <Link to="/contact-us">Blog</Link>
          </li>
          <li>
            <Button sx={{ color: "white",backgroundColor:"#FA6C2C",':hover': { backgroundColor: '#FA6C2C' }}} >Contact us</Button>
          </li>
        </ul>
        <div onClick={() => setOpen(!open)} className={`block iPadMini:hidden`}>
          <IconButton>
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </nav>
      <ul className={`bg-[#FFFFFF]`} style={{ display: open ? "block" : "none" }}>
      <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Services</Link>
          </li>
          <li>
            <Link to="/contact-us">Resume</Link>
          </li>
          <li>
            <Link to="/contact-us">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact-us">Testimonial</Link>
          </li>
          <li>
            <Link to="/contact-us">Blog</Link>
          </li>
        </ul>
      </div>
      <IntroSection/>
      <About/>
      <MyServices/>
      <EducationAndExperience/>
    </>
  );
};

export default NavBar;
