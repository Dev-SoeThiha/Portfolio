import { Logo } from "./Logo";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="max-w-screen-xl mx-auto px-10 mt-40 pb-10 border-t border-gray-300">
      <div className="flex flex-col md:flex-row gap-10 text-lg text-center items-center sm:flex-row justify-between">
        <Logo />
        <div className="flex flex-col md:flex-row gap-5 text-lg text-gray-600 dark:text-gray-300">
          <a href="#about">About Me</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
        <div className="text-4xl flex gap-2 text-gray-600 dark:text-gray-300">
          <a target="_blank" href="https://www.linkedin.com/in/s-thiha/">
            <AiFillLinkedin className="hover:text-teal-500 cursor-pointer transition-all duration-300" />
          </a>
          <a target="_blank" href="https://github.com/Dev-SoeThiha/">
            <AiFillGithub className="hover:text-teal-500 cursor-pointer transition-all duration-300" />
          </a>
        </div>
      </div>
      <p className="text-sm text-right text-gray-600 dark:text-gray-300">
        &copy; All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
