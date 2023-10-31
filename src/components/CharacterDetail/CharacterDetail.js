import React, { useEffect, useState } from "react";
import { StyledCharacterDetail } from "./StyledCharacterDetail";

import data from "./../../data/shinchan.json";
import { useSearchParams } from "react-router-dom";

function CharacterDetail() {
  let [searchParams] = useSearchParams();
  const [characterDetails, setCharacterDetails] = useState();

  console.log(searchParams.get("name"));

  useEffect(() => {
    const details = data.characters.find(
      (e) => e.name === searchParams.get("name")
    );

    setCharacterDetails(details);
  }, []);

  //   console.log(details);
  return (
    <StyledCharacterDetail>
      <div>Name:{characterDetails?.name}</div>
    </StyledCharacterDetail>
  );
}

export default CharacterDetail;
