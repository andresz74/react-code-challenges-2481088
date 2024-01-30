import { useState } from "react";

export default function DogPics() {
  // API: https://dog.ceo/dog-api/
  const [dogImgSrc, setDogImgSrc] = useState(
    "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg"
  );
  const getDogImage = async () => {
    try {
      const result = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await result.json()
      setDogImgSrc(data.message);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="dog-pics">
      <img src={dogImgSrc} alt="Dog" />
      <button onClick={(e) => getDogImage()}>🐶</button>
    </div>
  );
}
