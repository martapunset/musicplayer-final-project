import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
const HomeNavBar = () => {
  return (
    <>
      <div>
        <nav>
          <a>
            <AiFillHome />
            Home
          </a>
          <a>
            <AiOutlineHeart />
            Wish
          </a>
          <a>
            <BsSearch />
            Search
          </a>
          <a>
            <FaUserAlt />
            Profile
          </a>
        </nav>
      </div>
    </>
  );
};

export default HomeNavBar;
