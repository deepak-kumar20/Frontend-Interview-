import { useState, useEffect } from "react";

const ImageCrousel = () => {
  const images = [
    "https://picsum.photos/id/10/800/400",
    "https://picsum.photos/id/20/800/400",
    "https://picsum.photos/id/30/800/400",
    "https://picsum.photos/id/40/800/400",
    "https://picsum.photos/id/50/800/400",
    "https://picsum.photos/id/60/800/400",
    "https://picsum.photos/id/70/800/400",
  ];
  const [index, setIndex] = useState(0);

  const handleImageRight = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleImageLeft = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-play carousel with interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleImageRight();
    }, 4000);
  }, []);

  return (
    <div className="container">
      <button onClick={handleImageLeft}>{"<"}</button>
      <img src={images[index]} alt={`Slide ${index + 1}`} />
      <button onClick={handleImageRight}>{">"}</button>
    </div>
  );
};
export default ImageCrousel;