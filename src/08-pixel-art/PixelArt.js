import React from "react";

const ColorContext = React.createContext({
  color: "lightGrey",
  setColor: () => {},
});

function ColorPicker() {
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];
  const { setColor } = React.useContext(ColorContext);
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => setColor(color)}
        />
      ))}
    </div>
  );
}

function Pixel() {
  const { color } = React.useContext(ColorContext);
  const [pixelColor, setPixelColor] = React.useState("lightGrey");
  return (
    <div
      onClick={() => setPixelColor(color)}
      style={{
        height: "30px",
        width: "30px",
        backgroundColor: pixelColor,
        margin: "1px",
      }}
    />
  );
}

function Pixels() {
  const pixels = [];
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        width: "310px",
        margin: "0 auto",
      }}
    >
      {pixels}
    </div>
  );
}

export default function PixelArt() {
  const [color, setColor] = React.useState("lightGrey");

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      <div>
        <ColorPicker />
        <Pixels />
      </div>
    </ColorContext.Provider>
  );
}
