import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };
 
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          {" "}
          <BiCameraMovie />
          <ReactTyped
            strings={[
              "CineArquivo",
              '"GoodFellas"',
              '"Parasite"',
              '"Pulp Fiction"',
              '"Spirited Away"',
            ]}
            typeSpeed={180}
            backSpeed={195}
            loop
          />
        </Link>
      </h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Procurar filmes"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
