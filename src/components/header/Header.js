import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  const [formActive, setFormActive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [result, setResult] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const search = useRef(null);
  const handleSearch = async (e) => {
    setSearchValue(e.target.value);

    let respond = [];
    try {
      respond = await axios.get(
        "https://api.chucknorris.io/jokes/search?query=" + e.target.value
      );
      respond = respond.data.result;
      if (respond.legnth >= 6) {
        respond = respond.slice(0, 5);
        console.log(respond);
      }
    } catch (err) {
      respond = [];
    }
    setResult(respond);
    // if (respond instanceof Error) {
    //   console.log("error");
    // }
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (search.current && !search.current.contains(event.target)) {
        setSearchActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [search]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (result.length !== 0) {
      navigate("/joke/" + result[0].id);
    } else {
      navigate("/");
    }
    setResult([]);
    setSearchActive(false);
    setSearchValue("");
  };
  return (
    <div className="Header__Container">
      <div className="Header__Top">
        <div className="Header__Item">
          <p>SO FUNKTIONIER'S</p>
        </div>
        <div className="Header__Item">
          <p>SONDERANGEBOTE</p>
        </div>
        <div
          className="Header__Item"
          onClick={(e) => {
            setOpenMenu(!openMenu);
          }}
        >
          <img src="./assets/assets_Homework_Front-End_01/shape@2x.png"></img>
          <p>MEIN BEREICH</p>
          <img src="./assets/assets_Homework_Front-End_01/path_2@2x.png"></img>
          <ul className={openMenu ? "Header__Sub" : "Header__Sub displayNone"}>
            <li>
              <p>My published jokes</p>
            </li>
            <li>
              <p>My saved jokes</p>
            </li>
            <li>
              <p>Account Information</p>
            </li>
            <li>
              <p>Public new joke</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="Header__Bottom">
        <p>The Joke Bible</p>
        <p>Daily Laughs For Your and Yours </p>
        <div className="Header__Search" ref={search}>
          <form
            onFocus={(e) => {
              setFormActive(true);
              setSearchActive(true);
            }}
            onBlur={(e) => setFormActive(false)}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="How can we make you laugh today?"
              name="search"
              value={searchValue}
              onChange={handleSearch}
            ></input>
            <button type="submit">
              <img
                className={formActive ? "displayNone" : undefined}
                src="./assets/assets_Homework_Front-End_01/search-copy@2x.png"
              ></img>
              <img
                className={!formActive ? "displayNone" : undefined}
                src="./assets/assets_Homework_Front-End_02/search-copy@2x.png"
              ></img>
            </button>
          </form>
          <div
            className={
              searchActive && result.length !== 0
                ? "Search--result"
                : "Search--result displayNone"
            }
          >
            <ul>
              {/* <li>
                <img src="http://localhost:8080/assets/assets_Homework_Front-End_02/green-light@2x.png"></img>
                <p>Dad Jokes</p>
              </li> */}
              {result.map((item, index) => {
                if (index < 6)
                  return (
                    <li
                      key={index}
                      value={item.id}
                      onClick={(e) => {
                        e.preventDefault();

                        setResult([]);
                        setSearchActive(false);
                        navigate("/joke/" + e.target.getAttribute("value"));
                        setSearchValue("");
                      }}
                    >
                      <img
                        value={item.id}
                        src="http://localhost:8080/assets/assets_Homework_Front-End_02/green-light@2x.png"
                      ></img>
                      <p value={item.id}>{item.id}</p>
                    </li>
                  );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
