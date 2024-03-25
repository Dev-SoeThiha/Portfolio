import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import profile from "../assets/profile.png";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header id="about" className="min-h-screen max-w-screen-2xl mx-auto px-10">
      <nav className="flex justify-between items-center h-20">
        <Logo />
        <ul className="flex items-center">
          <li onClick={() => setDarkMode(!darkMode)}>
            <BsFillMoonStarsFill className="text-xl dark:text-white cursor-pointer" />
          </li>
          <li className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md px-4 py-2 ml-8 hover:cursor-pointer">
          <a href="#contact">Contact Me</a>
            
          </li>
        </ul>
      </nav>
      <div className="max-w-screen-xl flex flex-col h-[calc(100vh-80px)] md:flex-row items-center justify-center mx-auto text-left px-10">
        <div>
          <h2 className="text-5xl lg:text-7xl py-2 text-teal-600 font-medium">
            Soe Thiha
          </h2>
          <h3 className="text-2xl lg:text-3xl py-2 dark:text-white">
            Senior .NET Developer
          </h3>
          <p className="text-lg lg:text-xl py-5 max-w-2xl mx-auto text-gray-800 dark:text-gray-300">
            👋 Welcome to my portfolio! I`m Soe Thiha, a Senior .NET Developer
            at Codigo.co. With over 7 years of hands-on experience, I specialize
            in .NET development, backend architecture, and cloud solutions. My
            commitment to innovation and excellence ensures that I deliver
            transformative solutions that exceed expectations.
          </p>
          <p className="text-lg lg:text-xl py-5 max-w-2xl mx-auto text-gray-800 dark:text-gray-300">
            🚀 Let`s team up and turn your digital dreams into reality! ✨
          </p>
          <div className="text-5xl flex justify-center md:justify-start gap-16 py-3 text-gray-600 dark:text-gray-300">
            <a target="_blank" href="https://www.linkedin.com/in/s-thiha/">
              <AiFillLinkedin className="hover:text-teal-500 cursor-pointer transition-all duration-300" />
            </a>
            <a target="_blank" href="https://github.com/Dev-SoeThiha/">
              <AiFillGithub className="hover:text-teal-500 cursor-pointer transition-all duration-300" />
            </a>
          </div>
        </div>
        <div
          className="mx-auto md:mr-0 rounded-full w-80 md:w-96 aspect-square mt-20
        md:mt-0 overflow-hidden bg-gradient-to-r from-cyan-500 to-teal-500"
        >
          <img src={profile} alt="" className="object-cover h-full" />
        </div>
      </div>
    </header>
  );
};
