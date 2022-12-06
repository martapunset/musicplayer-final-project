import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

export const navBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
  },
  {
    title: "Wish",
    path: "/wish",
    icon: <AiOutlineHeart />,
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
