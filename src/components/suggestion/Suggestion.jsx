import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Movies from "./Movies";
import axios from "axios";

const Title = styled.h2`
  color: white;
  text-align: left;
`;

const Card = styled.div`
  padding: 1rem;
  width: 100vw;
`;

function Suggestion(suggestion) {
  const [movies, setMovies] = useState([]);

  const { title, category } = suggestion;

  useEffect(() => {
    axios
      .get("https://movies-api14.p.rapidapi.com/" + category, {
        headers: {
          "x-rapidapi-key":
            "721424ee2cmsh0a971d6caa6d1c9p11c023jsndff58599334d",
          "x-rapidapi-host": "movies-api14.p.rapidapi.com",
        },
      })
      .then((response) => setMovies(response.data.movies.slice(0, 6)))
      .catch((error) => console.error(error));
  }, [category]);

  return (
    <div>
      <Card>
        <Title>{title}</Title>
        <Movies movies={movies} />
      </Card>
    </div>
  );
}

export default Suggestion;
