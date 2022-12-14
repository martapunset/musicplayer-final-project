import { useForm } from "../hooks/useForm";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (evt) => {
    evt.preventDefault();

    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  };
  return (
    <>
      <div className="search-container">
        <form className=" text-start text-white" onSubmit={onSearchSubmit}>
          <input
            type="text"
            autoComplete="off"
            width="100"
            className="border search-input text-white form-control bg-transparent"
            placeholder="Search..."
            name="searchText"
            value={searchText}
            onChange={onInputChange}
          />
        </form>
      </div>
    </>
  );
};
