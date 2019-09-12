import React from "react";

const Buttons = () => {
  var buttonStyles = {
    fontSize: "50px",
    marginRight: "20px"
  }

  return (
    <div>
      <hr />
      <button style={buttonStyles} onClick={() => { }}>⇦</button>
      <button style={buttonStyles} onClick={() => { }}>⇨</button>
      <button style={buttonStyles} onClick={() => { }}>O</button>
    </div>
  );
};

export default Buttons;

//will need method for sending data back to app