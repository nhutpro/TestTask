import React, { useEffect, useRef, useState } from "react";
import "./ListJokes.scss";
import LabelJoke from "../../components/labelJoke/LabelJoke";
import JokeCard from "../../components/jokeCard/JokeCard";
import Loading from "../../components/loading/loading";
import axios from "axios";
import * as Api from "../../apis";
const ListJokes = () => {
  const [loading, setLoading] = useState(true);
  const [num, setNum] = useState(6);
  const data = [
    {
      categories: [],
      created_at: "2020-01-05 13:42:28.143137",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "EGX-zVEzRkS6AlOveV6xFQ",
      updated_at: "2020-01-05 13:42:28.143137",
      url: "https://api.chucknorris.io/jokes/EGX-zVEzRkS6AlOveV6xFQ",
      value:
        "Sir Issac Newton developed his groundbreaking theories on gravitation after he recovered from being almost killed by an apple thrown by Chuck Norris.",
    },
    {
      categories: [],
      created_at: "2020-01-05 13:42:28.143137",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "omejgYO-RAGf9XVDWkVfhA",
      updated_at: "2020-01-05 13:42:28.143137",
      url: "https://api.chucknorris.io/jokes/omejgYO-RAGf9XVDWkVfhA",
      value:
        "When Chuck Norris wa born 3 nurses and 2 doctors were killed when he shot them with 2 MPK-5's he had developed while in the womb.",
    },
    {
      categories: [],
      created_at: "2020-01-05 13:42:28.143137",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "2Bu4jfTDSvKRYUnbaW2pMw",
      updated_at: "2020-01-05 13:42:28.143137",
      url: "https://api.chucknorris.io/jokes/2Bu4jfTDSvKRYUnbaW2pMw",
      value:
        "Chuck Norris won the National Pie Eating Contest by devoring 168 hotdogs in less than 10 minutes.",
    },
    {
      categories: [],
      created_at: "2020-01-05 13:42:28.420821",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "a42l7tLFQmeQVrWDeE1hfg",
      updated_at: "2020-01-05 13:42:28.420821",
      url: "https://api.chucknorris.io/jokes/a42l7tLFQmeQVrWDeE1hfg",
      value:
        "Johnson & Johnson spent $3.5 million in developing Band-Aids for Chuck Norris which are made of lead based Kevlar lined with an asbestos absorbent pad and adhesive bands coated with Super-Glue. However, Chuck Norris, impervious to injury, will never need to use one.",
    },
    {
      categories: [],
      created_at: "2020-01-05 13:42:28.420821",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "aFy-o4b0RQSjBybiP8RAIQ",
      updated_at: "2020-01-05 13:42:28.420821",
      url: "https://api.chucknorris.io/jokes/aFy-o4b0RQSjBybiP8RAIQ",
      value:
        "Tigers developed stripes as an evolutionary strategy. Chuck Norris made them an endangered species anyway.",
    },
    {
      categories: [],
      created_at: "2020-01-05 13:42:28.984661",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "-3CjPqg6SaKvAZBLgTp_6w",
      updated_at: "2020-01-05 13:42:28.984661",
      url: "https://api.chucknorris.io/jokes/-3CjPqg6SaKvAZBLgTp_6w",
      value:
        "If you play Stairway to heaven backwards you hear a satanic message. If you play the theme song to Walker,Texas Ranger backwards you hear Chuck Norris kicking the Devils ass.",
    },
    {
      categories: [],
      created_at: "2020-01-05 13:42:28.984661",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "U42BlItTRSiD6EPoTlIBXA",
      updated_at: "2020-01-05 13:42:28.984661",
      url: "https://api.chucknorris.io/jokes/U42BlItTRSiD6EPoTlIBXA",
      value:
        "Chuck Norris isn't a cannibal, because he is actually a superior species. So next time he devours a family member, don't be upset, just remember this is just the beautiful cycle of nature.",
    },
    {
      categories: [],
      created_at: "2020-01-05 13:42:29.296379",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "UJeUN80PQl65CCrwxhstaQ",
      updated_at: "2020-01-05 13:42:29.296379",
      url: "https://api.chucknorris.io/jokes/UJeUN80PQl65CCrwxhstaQ",
      value:
        "There is no angel upon Chuck Norris' shoulder... the devil sits there. His other shoulder is where he rests the bazooka",
    },
    {
      categories: [],
      created_at: "2020-01-05 13:42:29.569033",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "KYTvMG11SlO5BgkKVqrVbQ",
      updated_at: "2020-01-05 13:42:29.569033",
      url: "https://api.chucknorris.io/jokes/KYTvMG11SlO5BgkKVqrVbQ",
      value:
        'Chuck Norris once won a non-glitchy, non-buggy edition of vanilla Minecraft before he even got the "Getting Wood" achievement. It was version Indev 0.30. Only Chuck Norris can play Minecraft Indev 0.30. For everyone else, the oldest Minecraft Indev version is 0.31.',
    },
    {
      categories: ["movie"],
      created_at: "2020-01-05 13:42:29.855523",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "bEfuO4msQ12ub8S1ZKJqvw",
      updated_at: "2020-01-05 13:42:29.855523",
      url: "https://api.chucknorris.io/jokes/bEfuO4msQ12ub8S1ZKJqvw",
      value:
        'In the director\'s cut of "The End of Days," Arnold Schwarzenegger is fighting a losing battle with the Devil until he prays to a stained glass window of Chuck Norris putting on a pair of jeans. They had to use CGI to superimpose a crucified Jesus for the theatrical release.',
    },
    {
      categories: [],
      created_at: "2020-01-05 13:42:30.480041",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "tExOLgwDSOKUA_W3GcxFnQ",
      updated_at: "2020-01-05 13:42:30.480041",
      url: "https://api.chucknorris.io/jokes/tExOLgwDSOKUA_W3GcxFnQ",
      value:
        "Chuck Norris obtained his rugged good looks and martial art skills when he made a deal with the devil. once he received both gifts from satan Chuck Norris delivered a roundhouse kick to the devils skull and took his soul back. the devil who appreciated irony laughed at the attack. they now play golf every third tuesday of the month.",
    },
  ];
  const [openMore, setOpenMore] = useState(true);
  const [categories, setCategories] = useState([]);
  const [cardList, setCardList] = useState([]);
  const [current, setCurrent] = useState("all");
  const getCardList = async (type) => {
    setLoading(true);
    setNum(6);
    let cardListData = await axios(
      "https://api.chucknorris.io/jokes/search?query=all"
    );
    setCurrent(type);
    cardListData = cardListData.data.result;
    if (type !== "all") {
      if (type === "uncategories") {
        cardListData = cardListData.filter(
          (item) => item.categories.length === 0
        );
      } else {
        cardListData = cardListData.filter(
          (item) => item.categories[0] === type
        );
      }
    }

    if (cardListData.length > 6) {
      setOpenMore(true);
    } else {
      setOpenMore(false);
    }
    setCardList(cardListData);
    setLoading(false);
  };
  const firstLoading = async () => {
    setLoading(true);
    setNum(6);
    let categoriesData = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );


    let getAllData = await axios(
      "https://api.chucknorris.io/jokes/search?query=all"
    );
    setCardList(getAllData.data.result);
    setCategories(categoriesData.data);
    setLoading(false);
  };
  useEffect(() => {
    firstLoading();
  }, []);
  const handdleViewMore = () => {
    if (num + 3 >= cardList.length) {
      setNum(data.length);
      setOpenMore(false);
    } else setNum(num + 3);
  };
  const handleClickLable = (e) => {
    const type = e.target.getAttribute("value");

    getCardList(type);
  };
  return (
    loading ?<Loading></Loading>: (
      <div className="ListJokes__Container">
        <div className="ListJokes__Main">
          <div className="ListJokes__LabelList">
            {categories.map((item, index) => (
              <div
                className="ListJokes__Label"
                value={item}
                key={index}
                onClick={handleClickLable}
              >
                <LabelJoke text={item}></LabelJoke>
              </div>
            ))}
            <div
              className="ListJokes__Label"
              value={"uncategories"}
              onClick={handleClickLable}
            >
              <LabelJoke text={"uncategories"}></LabelJoke>
            </div>
            <div
              className="ListJokes__Label"
              value={"all"}
              onClick={handleClickLable}
            >
              <LabelJoke text={"all"}></LabelJoke>
            </div>
          </div>
          <div className="ListJokes__Current">
            <p>{current} jokes</p>
          </div>
          <div className="ListJokes__CardList">
            {cardList.map((item, index) => {
              if (index < num)
                return <JokeCard joke={item} key={index}></JokeCard>;
            })}
          </div>
          {openMore && (
            <div className="More__container">
              <button onClick={handdleViewMore}>
                <p>view more</p>
                <img src="./assets/assets_Homework_Front-End_01/path-copy-3@2x.png"></img>
              </button>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default ListJokes;
