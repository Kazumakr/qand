import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const Navbar = ({ placeholder }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?keyword=${searchKeyword}`);
  };
  return (
    <div className="navbar mb-12 py-3">
      <div className="container mx-auto">
        <div className="flex-1 px-2 mx-2">
          <Link to="/" className="text-4xl font-bold">
            QAND
          </Link>
        </div>
        <div className="flex-1">
          <form
            className="flex w-full bg-gray-300 rounded-lg px-3"
            onSubmit={handleSubmit}
          >
            <input
              type="search"
              className="input bg-gray-300 w-full focus:outline-none"
              placeholder={placeholder || "Search questions"}
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button type="submit">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
          </form>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end items-center space-x-2">
            <Link to="/create" className="btn btn-lg rounded-btn">
              Create
            </Link>
            <Link to="/login" className="btn btn-ghost btn-sm rounded-btn">
              Log in
            </Link>
            <Link to="/signup" className="btn btn-ghost btn-sm rounded-btn">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
