/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { StyledCharacterDetail } from "./StyledCharacterDetail";

import headImage from "./../../images/header.svg";
import underline from "./../../images/line-thin.svg";

import data from "./../../data/shinchan.json";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Footer from "../Footer";
import ShinchanAnimation from "../ShinchanAnimation";

function CharacterDetail() {
  let [searchParams] = useSearchParams();
  const [characterDetails, setCharacterDetails] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  const onClickName = (name) => {
    navigate(`/character?name=${name}`);
  };

  useEffect(() => {
    const details = data.characters.find(
      (e) => e.name === searchParams.get("name")
    );
    setCharacterDetails(details);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <StyledCharacterDetail>
      <div className="headImage">
        <img src={headImage} alt="header background" />
      </div>
      <div className="character-container">
        <div className="details">
          <div className="name">
            <h3>{characterDetails?.name}</h3>
            <img src={underline} alt="underline" />
          </div>
          <div className="description">
            <p>{characterDetails?.description}</p>
          </div>

          <div className="photo-mobile">
            <ShinchanAnimation />
          </div>

          {characterDetails?.age && (
            <div className="flex-details">
              <h4>Age: </h4>
              <p>{characterDetails?.age}</p>
            </div>
          )}

          {characterDetails?.family && (
            <div className="flex-details">
              <h4>Family: </h4>
              <div>
                {characterDetails?.family?.parents?.father && (
                  <p
                    onClick={() => {
                      onClickName(characterDetails?.family?.parents?.father);
                    }}
                    className="char-link"
                  >
                    Father: {characterDetails?.family?.parents?.father}
                  </p>
                )}

                {characterDetails?.family?.parents?.mother && (
                  <p
                    onClick={() => {
                      onClickName(characterDetails?.family?.parents?.mother);
                    }}
                    className="char-link"
                  >
                    Mother: {characterDetails?.family?.parents?.mother}
                  </p>
                )}
                {characterDetails?.family?.sister && (
                  <p
                    onClick={() => {
                      onClickName(characterDetails?.family?.sister);
                    }}
                    className="char-link"
                  >
                    Sister: {characterDetails?.family?.sister}
                  </p>
                )}
                {characterDetails?.family?.brother && (
                  <p
                    onClick={() => {
                      onClickName(characterDetails?.family?.brother);
                    }}
                    className="char-link"
                  >
                    Brother: {characterDetails?.family?.brother}
                  </p>
                )}
                {characterDetails?.family?.wife && (
                  <p
                    onClick={() => {
                      onClickName(characterDetails?.family?.wife);
                    }}
                    className="char-link"
                  >
                    Wife: {characterDetails?.family?.wife}
                  </p>
                )}
                {characterDetails?.family?.children && (
                  <p>
                    Children:{" "}
                    {characterDetails?.family?.children?.map((e, i) => {
                      return (
                        <span
                          key={i}
                          onClick={() => {
                            onClickName(e);
                          }}
                          className="char-link"
                        >
                          {e}
                        </span>
                      );
                    })}
                  </p>
                )}
              </div>
            </div>
          )}

          {characterDetails?.friends && (
            <div className="flex-details">
              <h4>Friends: </h4>
              <div>
                {characterDetails?.friends?.map((e, i) => {
                  return (
                    <span
                      key={i}
                      onClick={() => {
                        onClickName(e);
                      }}
                      className="char-link"
                    >
                      {e},{" "}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {characterDetails?.hobbies && (
            <div className="flex-details">
              <h4>Hobbies: </h4>
              <p>{characterDetails?.hobbies.join(", ")}</p>
            </div>
          )}

          {characterDetails?.favorite_things && (
            <div className="flex-details">
              <h4>Favorite Things: </h4>
              <div>
                <p>Snack: {characterDetails?.favorite_things?.snack}</p>
                <p>Toy: {characterDetails?.favorite_things?.toy}</p>
              </div>
            </div>
          )}

          {characterDetails?.powers && (
            <div className="flex-details">
              <h4>Powers: </h4>
              <p>{characterDetails?.powers?.join(", ")}</p>
            </div>
          )}
        </div>

        <div className="photo-desktop">
          <ShinchanAnimation />
        </div>
      </div>
      <Footer />
    </StyledCharacterDetail>
  );
}

export default CharacterDetail;
