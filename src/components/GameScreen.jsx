import React from "react";
import Header from "./Header";
import Tamagotchi from "./Tamagotchi";
import PropTypes from "prop-types";
import Action from "./Action";

const GameScreen = () => {
  return (
    <div>
      <Header />
      <Action />
      <Tamagotchi />
    </div>
  );
};


export default GameScreen;