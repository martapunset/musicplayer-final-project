import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiLibrary } from "react-icons/Bi";
export const navBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    text: "Home",
  },
  {
    title: "Search",
    path: "/search",
    icon: <BsSearch />,
    text: "Search" ,
  },
  {
    title: "Liked",
    path: "/liked",
    icon: <AiOutlineHeart />,
    text: "Songs you like",
  },
  {
    title: "Liked",
    path: "/",
    icon: <BiLibrary />,
    text: "Library" ,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <FaUserAlt />,
    text: "Profile" ,
  },
];
