import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import ListJokes from "./pages/listJokes/ListJokes";
import Joke from "./pages/joke/Joke";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.scss";
function App() {
  if (import.meta.webpackHot) {
    import.meta.webpackHot.accept("./index", () => {
      render();
    });
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<ListJokes></ListJokes>}></Route>
          <Route path="/joke/:id" element={<Joke></Joke>}></Route>
          <Route path="*" element={<></>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById("root"));
// if (module.hot) {
//   module.hot.accept("./index", () => {
//     const NextApp = require("./index").default;
//     ReactDOM.render(<NextApp></NextApp>, document.getElementById("root"));
//   });
// }
