import React from "react";
import "./JokeCard.scss";
import { Link } from "react-router-dom";
const JokeCard = ({ joke }) => {
  return (
    <Link to={"/joke/" + joke.id}>
      <div className="JokeCard">
        <div className="JokeCard__Title">
          <img
            src={
              "./assets/assets_Homework_Front-End_01/green-light-copy-6@2x.png"
            }
          ></img>
          <p>{joke.id}</p>
        </div>
        <div className="JokeCard__Main">
          <p>{joke.value}</p>
        </div>
        <div className="JokeCard__Path">
          <p>siew stats</p>
          <img
            src={"./assets/assets_Homework_Front-End_01/path-copy-3@2x.png"}
          ></img>
        </div>
      </div>
    </Link>
  );
};

export default JokeCard;
