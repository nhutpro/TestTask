import React, { useEffect, useState } from "react";

import "./Joke.scss";
import { useParams, useNavigate, Link } from "react-router-dom";
import Loading from "../../components/loading/loading";
import axios from "axios";
const Joke = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [joke, setJoke] = useState(null);
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const navigate = useNavigate();
  const getJoke = async () => {
    setLoading(true);
    let jokeData = await axios.get(
      "https://api.chucknorris.io/jokes/search?query=all"
    );
    jokeData = jokeData.data.result;
    jokeData = jokeData.filter((item) => item.id === id);

    setJoke(jokeData[0]);
    setLoading(false);
  };
  const handleBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    getJoke();
  }, [id]);
  const handleNextJoke = async () => {
    setLoading(true);
    let respond = await axios.get(
      "https://api.chucknorris.io/jokes/search?query=all"
    );
    respond = respond.data.result;
    let num = 0;
    let listJoke = respond.filter((item, index) => {
      if (joke.categories.length !== 0) {
        return item.categories[0] === joke.categories[0];
      } else {
        return item.categories.length === 0;
      }
    });

    for (let i = 0; i < listJoke.length; i++) {
      if (listJoke[i].id === joke.id) {
        num = i + 1;
      }
    }
    if (num === listJoke.length) {
      num = listJoke.length;
    }

    navigate("/joke/" + listJoke[num].id);
  };
  const handlePrevJoke = async () => {
    setLoading(true);
    let respond = await axios.get(
      "https://api.chucknorris.io/jokes/search?query=all"
    );
    respond = respond.data.result;
    let num = 0;
    let listJoke = respond.filter((item, index) => {
      if (joke.categories.length !== 0) {
        return item.categories[0] === joke.categories[0];
      } else {
        return item.categories.length === 0;
      }
    });

    for (let i = 0; i < listJoke.length; i++) {
      if (listJoke[i].id === joke.id) {
        num = i - 1;
      }
    }
    if (num < 0) {
      num = 1;
    }
    console.log([listJoke, num, respond, joke]);
    navigate("/joke/" + listJoke[num].id);
  };
  return loading ? (
    <Loading></Loading>
  ) : (
    <div className="Joke__Container">
      <div className="Joke__Back" onClick={handleBack}>
        <button></button>
      </div>
      <div className="Joke__Main">
        <div className="Joke">
          <div className="Joke__Text">
            <div className="Joke__Label">
              <p>
                {joke.categories.length === 0
                  ? "uncategoried"
                  : joke.categories[0]}
              </p>
              {like <= 50 ? (
                <p className="Label--popular">popular</p>
              ) : like <= 100 ? (
                <p className="Label--trending">trending</p>
              ) : (
                <p className="Label--epic">epic</p>
              )}
            </div>
            <div className="Joke__Title">
              <div className="Title__Container">
                <p>{joke.id}</p>
              </div>
              <p>no # 1</p>
            </div>
            <div className="Joke__description">
              <p>{joke.value}</p>
            </div>
          </div>
          <div className="Joke__Interact">
            <div className="Joke__Icon">
              <div
                className="Icon__Group--like"
                onClick={(e) => setLike(like + 1)}
              >
                <div className="Icon--like">
                  <img src="../assets/assets_Homework_Front-End_02/hand@2x.png"></img>
                </div>
                <p>{like}</p>
              </div>
              <div className="Icon__Group--dislike">
                <div
                  className="Icon--dislike"
                  onClick={(e) => setDislike(dislike + 1)}
                >
                  <img src="../assets/assets_Homework_Front-End_02/hand-copy@2x.png"></img>
                </div>

                <p>{dislike}</p>
              </div>
            </div>
            <div className="Joke__Button">
              <button className="Button--prev" onClick={handlePrevJoke}>
                <img src="../assets/assets_Homework_Front-End_02/arrow-left-copy-2@2x.png"></img>
                <p>prev. joke</p>
              </button>
              <button className="Button--next" onClick={handleNextJoke}>
                <p>next joke</p>
                <img src="../assets/assets_Homework_Front-End_02/arrow-left-copy@2x.png"></img>
              </button>
            </div>
          </div>
        </div>
        <div className="Joke__List">
          <p className="List__Title"> the top 10 jokes this week</p>
          <ul>
            <li>
              <Link to="/joke/x5whniztqdancooc9w-ggg">
                <span>x5whniztqdancooc9w-ggg</span>
              </Link>
            </li>
            <li>
              <Link to="/joke/5XQ7Aq6yRJeF976LbPNm8g">
                <span>5XQ7Aq6yRJeF976LbPNm8g</span>
              </Link>
            </li>
            <li>
              <Link to="/joke/RX3L0rCGRc6pSCzghxzL3g">
                <span>RX3L0rCGRc6pSCzghxzL3g</span>
              </Link>
            </li>
            <li>
              <Link to="/joke/7w-LfoTwQNiNjIncQUsNIQ">
                <span>7w-LfoTwQNiNjIncQUsNIQ</span>
              </Link>
            </li>
            <li>
              <Link to="/joke/zSHg9mMSQnKpyzNodYA8rA">
                <span>zSHg9mMSQnKpyzNodYA8rA</span>
              </Link>
            </li>
            <li>
              <Link to="/joke/3EOemsGMSEKttDnddHyi9A">
                <span>3EOemsGMSEKttDnddHyi9A</span>
              </Link>
            </li>
            <li>
              <Link to="/joke/yYAmRPoeSYKP2xu8jfx_BQ">
                <span>yYAmRPoeSYKP2xu8jfx_BQ</span>
              </Link>
            </li>
            <li>
              <Link to="/joke/ov5fl59UT-SgbxuP8LAreA">
                <span>ov5fl59UT-SgbxuP8LAreA</span>
              </Link>
            </li>
            <li>
              <Link to="/joke/VEDOQuIsSI-2CAgq3-2DaQ">
                <span>VEDOQuIsSI-2CAgq3-2DaQ</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Joke;
