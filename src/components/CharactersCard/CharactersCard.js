import React from "react";
import underline from "./../../images/line-bold.svg";
import { StyledHeroSection } from "./StyledCharactersCard";

import data from "./../../data/shinchan.json";
import { useNavigate } from "react-router-dom";

function CharactersCard() {
  const navigate = useNavigate();

  const onclickCard = (name) => {
    navigate(`/character?name=${name}`);
  };
  return (
    <StyledHeroSection>
      <div className="subheading-wrapper">
        <h2 className="subheading">Characters</h2>
        <img src={underline} alt="Underline" />
      </div>
      <div className="container">
        {data.characters?.map((e) => {
          return (
            <div
              key={e.name}
              className="card"
              onClick={() => {
                onclickCard(e.name);
              }}
            >
              <div className="image">
                {e.image && <img src={e.image} alt="character" />}
              </div>

              <div className="content">
                <h3>{e.name}</h3>
                <p>{e.description.slice(0, 150)}...</p>
              </div>
            </div>
          );
        })}
      </div>
    </StyledHeroSection>
  );
}

export default CharactersCard;
