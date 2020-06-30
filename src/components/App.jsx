import React from "react";
import Game from "./Game";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="header-container">
        <Header />
      </div>
      <div className="game-container">
        <Game />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}
