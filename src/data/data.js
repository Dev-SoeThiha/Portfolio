import { AiOutlineDesktop } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import { AiOutlineCloudServer } from "react-icons/ai";
import { BsSpeedometer2 } from "react-icons/bs";
import flow from "../assets/projectFlow.png";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default [
  {
    title: "Custom Web Development",
    icon: AiOutlineDesktop,
    description:
      "Crafting tailored digital solutions to meet your unique needs.",
  },
  {
    title: "Backend Development",
    icon: GoGear,
    description:
      "Empowering seamless functionality and performance for your digital applications.",
  },
  {
    title: "Cloud Solutions",
    icon: AiOutlineCloudServer,
    description:
      "Elevating your business to the cloud with scalable and secure solutions.",
  },
  {
    title: "Performance Optimization",
    icon: BsSpeedometer2,
    description:
      "Boosting speed, scalability, and reliability for optimal user experiences.",
  },
];

export const projects = [
  {
    title: "Flow",
    image: flow,
    description:
      "Explore a cutting-edge music streaming platform enriched with karaoke functionality and integrated with various payment options for premium upgrades. Rest assured, your payments are secure as I meticulously engineered the backend and cloud infrastructure to prioritize data security and user privacy, ensuring a seamless and safe user experience.",
    techStack: ["C#", ".NET Core", "MySQL", "AWS"],
  },
];

export const contacts = [
  {
    title: "Email",
    icon: MdEmail,
    text: "soethiha.tech.dev@gmail.com",
    ext: "mailto:",
  },
  {
    title: "Telephone",
    icon: AiFillPhone,
    text: "+95 9 4025 17843",
    ext: "tel:",
  },
  {
    title: "LinkedIn",
    icon: AiFillLinkedin,
    text: "https://www.linkedin.com/in/s-thiha/",
    ext: "",
  },
];
