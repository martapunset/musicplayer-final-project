import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiLibrary } from "react-icons/Bi";
export const navBarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiFillHome />,
  },
  {
    title: "Liked",
    path: "/liked",
    icon: <AiOutlineHeart />,
  },
  {
    title: "Liked",
    path: "/",
    icon: <BiLibrary />,
  },
  {
    title: "Search",
    path: "/search",
    icon: <BsSearch />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <FaUserAlt />,
  },
];
