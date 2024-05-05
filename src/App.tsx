import { useState } from "react";
import "./App.css";

const superHeroData = [
  {
    name: "Spiderman",
    img: "./spidy.png",
    class: "spidey",
    description:
      "Peter Parker is a high school student who gained spider-like abilities after being bitten by a radioactive spider. He first appeared in Amazing Fantasy #15 in 1962.",
    wikiLink: "https://en.wikipedia.org/wiki/Spider-Man"
  },
  {
    name: "Captain Marvel",
    img: "./captain-marvel.png",
    class: "captain-marvel",
    description:
      "Captain Marvel is the alter ego of Carol Danvers, a former U.S. Air Force pilot who gained superhuman strength, speed, and the ability to fly after being exposed to alien technology. She first appeared in Marvel Super-Heroes #13 in 1968.",
    wikiLink: "https://en.wikipedia.org/wiki/Captain_Marvel_(Marvel_Comics)"
  },
  {
    name: "Green Lantern",
    img: "./green-lantern.png",
    class: "green-lantern",
    description:
      "Green Lantern is the alter ego of Hal Jordan, a test pilot who was chosen to join the Green Lantern Corps, an intergalactic police force. He first appeared in Showcase #22 in 1959.",
    wikiLink: "https://en.wikipedia.org/wiki/Green_Lantern"
  },
  {
    name: "Superman",
    img: "./superman.png",
    class: "superman",
    description:
      "Superman is the alter ego of Clark Kent, a journalist for the Daily Planet. He has superhuman strength, speed, and the ability to fly. He first appeared in Action Comics #1 in 1938.",
    wikiLink: "https://en.wikipedia.org/wiki/Superman"
  },
  {
    name: "Batman",
    img: "./batman.png",
    class: "batman",
    description:
      "Batman is the alter ego of Bruce Wayne, a wealthy industrialist and philanthropist. He has no superhuman abilities, but is a highly skilled detective and martial artist. He first appeared in Detective Comics #27 in 1939.",
    wikiLink: "https://en.wikipedia.org/wiki/Batman"
  },
  {
    name: "Black Panther",
    img: "./black-panther.png",
    class: "black-panther",
    description:
      "Black Panther is the alter ego of T'Challa, the king of the fictional African nation of Wakanda. He has superhuman strength, speed, and agility, and is a skilled martial artist. He first appeared in Fantastic Four #52 in 1966.",
    wikiLink: "https://en.wikipedia.org/wiki/Black_Panther_(comics)"
  },
  {
    name: "Thor",
    img: "./thor.webp",
    class: "thor",
    description:
      "Thor is the Norse god of thunder, who is based on the deity of the same name from Norse mythology. He has superhuman strength, speed, and the ability to control lightning. He first appeared in Journey into Mystery #83 in 1962.",
    wikiLink: "https://en.wikipedia.org/wiki/Thor_(Marvel_Comics)"
  },
  {
    name: "Wonder Woman",
    img: "./wonder-woman.png",
    class: "wonder-woman",
    description:
      "Wonder Woman is an Amazonian warrior princess named Diana, who possesses superhuman strength, agility, and combat skills. She wields magical weaponry such as the Lasso of Truth and the Bracelets of Submission. She first appeared in All Star Comics #8 in 1941.",
    wikiLink: "https://en.wikipedia.org/wiki/Wonder_Woman"
  },
  {
    name: "The Flash",
    img: "./flash.png",
    class: "the-flash",
    description:
      "The Flash is the alter ego of Barry Allen, a forensic scientist who gained the ability to move at superhuman speeds after a lightning strike. He is a member of the Justice League and protects Central City. He first appeared in Showcase #4 in 1956.",
    wikiLink: "https://en.wikipedia.org/wiki/Flash_(comics)"
  },
  {
    name: "Iron Man",
    img: "./iron-man.png",
    class: "iron-man",
    description:
      "Iron Man is the alter ego of Tony Stark, a billionaire industrialist and genius inventor who created a powered exoskeleton suit equipped with advanced technology. He uses his suit to fight crime and protect the world. He first appeared in Tales of Suspense #39 in 1963.",
    wikiLink: "https://en.wikipedia.org/wiki/Iron_Man"
  },
  {
    name: "Hulk",
    img: "./hulk.png",
    class: "hulk",
    description:
      "Hulk is the alter ego of Bruce Banner, a physicist who transforms into a green-skinned giant with immense strength and invulnerability when he experiences intense emotions, particularly anger. He is a founding member of the Avengers. He first appeared in The Incredible Hulk #1 in 1962.",
    wikiLink: "https://en.wikipedia.org/wiki/Hulk_(comics)"
  },
  {
    name: "Aquaman",
    img: "./aquaman.png",
    class: "aquaman",
    description:
      "Aquaman is the alter ego of Arthur Curry, the king of Atlantis who possesses superhuman strength, speed, and the ability to communicate with marine life. He protects the oceans and is a founding member of the Justice League. He first appeared in More Fun Comics #73 in 1941.",
    wikiLink: "https://en.wikipedia.org/wiki/Aquaman"
  }
];

const DESCRIPTION_TRUNCATE_LENGTH = 250;
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
    <div className="content">
      <div className="nav-bar">
        {[...superHeroData].map((superHero) => {
          // navbar
          return (
            <div
              key={superHero.name}
              className={`nav-item ${
                superHeroData[currentCarouselIdx].name === superHero.name
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setCurrentCarouselIdx(superHeroData.indexOf(superHero))
              }
            >
              <img src={superHero.img} alt={superHero.name} />
              <p>{superHero.name}</p>
            </div>
          );
        })}
      </div>
      <div className="carousel-container">
        <button onClick={handlePrev} className="arrow arrow-previous">
          {"Previous"}
          <i className="fas fa-arrow-left"></i>
        </button>
        <div className="carousel-content">
          <div
            className={`carousel-slide card ${superHeroData[currentCarouselIdx].class}`}
          >
            <div className="card-content">
              <h2>{superHeroData[currentCarouselIdx].name}</h2>
              <p style={{ fontSize: ".8rem" }}>
                {
                  // truncate description
                  superHeroData[currentCarouselIdx].description.length >
                  DESCRIPTION_TRUNCATE_LENGTH
                    ? `${superHeroData[currentCarouselIdx].description.slice(
                        0,
                        DESCRIPTION_TRUNCATE_LENGTH
                      )}...`
                    : superHeroData[currentCarouselIdx].description
                }
              </p>
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
        <button onClick={handleNext} className="arrow arrow-next">
          <i className="fas fa-arrow-right"></i>
          {"Next"}
        </button>
      </div>
    </div>
  );
}

export default App;
