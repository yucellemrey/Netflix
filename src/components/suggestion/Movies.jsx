import React from "react";
import styled from "styled-components";
import Movie from "./Movie";

const Card = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Movies(props) {
  const { movies } = props;
  return (
    <Card>
      {movies.map((movie) => {
        return <Movie movie={movie} key={movie._id} />;
      })}
    </Card>
  );
}

export default Movies;
