import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const superHeroData = [
  {
    name: "Spiderman",
    img: "./spidy.png",
    description:
      "Peter Parker is a high school student who gained spider-like abilities after being bitten by a radioactive spider. He first appeared in Amazing Fantasy #15 in 1962.",
    wikiLink: "https://en.wikipedia.org/wiki/Spider-Man",
  },
  {
    name: "Captain Marvel",
    img: "./captain-marvel.png",
    description:
      "Captain Marvel is the alter ego of Carol Danvers, a former U.S. Air Force pilot who gained superhuman strength, speed, and the ability to fly after being exposed to alien technology. She first appeared in Marvel Super-Heroes #13 in 1968.",
    wikiLink: "https://en.wikipedia.org/wiki/Captain_Marvel_(Marvel_Comics)",
  },
  {
    name: "Green Lantern",
    img: "./green-lantern.png",
    description:
      "Green Lantern is the alter ego of Hal Jordan, a test pilot who was chosen to join the Green Lantern Corps, an intergalactic police force. He first appeared in Showcase #22 in 1959.",
    wikiLink: "https://en.wikipedia.org/wiki/Green_Lantern",
  },
  {
    name: "Superman",
    img: "./superman.png",
    description:
      "Superman is the alter ego of Clark Kent, a journalist for the Daily Planet. He has superhuman strength, speed, and the ability to fly. He first appeared in Action Comics #1 in 1938.",
    wikiLink: "https://en.wikipedia.org/wiki/Superman",
  },
  {
    name: "Batman",
    img: "./batman.png",
    description:
      "Batman is the alter ego of Bruce Wayne, a wealthy industrialist and philanthropist. He has no superhuman abilities, but is a highly skilled detective and martial artist. He first appeared in Detective Comics #27 in 1939.",
    wikiLink: "https://en.wikipedia.org/wiki/Batman",
  },
  {
    name: "Black Panther",
    img: "./black-panther.png",
    description:
      "Black Panther is the alter ego of T'Challa, the king of the fictional African nation of Wakanda. He has superhuman strength, speed, and agility, and is a skilled martial artist. He first appeared in Fantastic Four #52 in 1966.",
    wikiLink: "https://en.wikipedia.org/wiki/Black_Panther_(comics)",
  },
  {
    name: "Thor",
    img: "./thor.png",
    description:
      "Thor is the Norse god of thunder, who is based on the deity of the same name from Norse mythology. He has superhuman strength, speed, and the ability to control lightning. He first appeared in Journey into Mystery #83 in 1962.",
    wikiLink: "https://en.wikipedia.org/wiki/Thor_(Marvel_Comics)",
  },
];
function App() {
  const [currentCarouselIdx, setCurrentCarouselIdx] = useState(0);

  const handlePrev = () => {
    setCurrentCarouselIdx((prevIdx) =>
      prevIdx === 0 ? superHeroData.length - 1 : prevIdx - 1
    );
  };

  const handleNext = () => {
    setCurrentCarouselIdx((prevIdx) =>
      prevIdx === superHeroData.length - 1 ? 0 : prevIdx + 1
    );
  };

  return (
    <div className="carousel-container">
      <button onClick={handlePrev}>Previous</button>
      <div className="carousel-content">
        <div className="card">
          <div className="content">
            <h2>{superHeroData[currentCarouselIdx].name}</h2>
            <p>{superHeroData[currentCarouselIdx].description}</p>
            <a
              href={superHeroData[currentCarouselIdx].wikiLink}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
            >
              read more
            </a>
          </div>
          <img
            src={superHeroData[currentCarouselIdx].img}
            alt={superHeroData[currentCarouselIdx].name}
          />
        </div>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;
