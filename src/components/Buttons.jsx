import React from "react";

const Buttons = () => {
  var buttonStyles = {
    fontSize: "50px",
    marginRight: "20px"
  };

  return (
    <div>
      <hr />
      <button className="btn btn-primary" style={buttonStyles} onClick={() => { }}>⇦</button>
      <button className="btn btn-primary" style={buttonStyles} onClick={() => { }}>⇨</button>
      <button className="btn btn-primary" style={buttonStyles} onClick={() => { }}>O</button>
    </div>
  );
};

export default Buttons;

//will need method for sending data back to app