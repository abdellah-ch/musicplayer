import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";



export default function Searchbar() {
  const navigate = useNavigate();
  const [searchTerm, setsearchTerm] = useState("");

  const handeleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <form className="form" onSubmit={handeleSubmit}>
      <label htmlFor="search-field">Search all files</label>
      <div className="search_container">
        <FiSearch className="search_icon" />
        <input
          type="search"
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="search_field"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
}
