import styled from "styled-components";
import React from "react";

const Card = styled.img`
  width: 16%;
`;

function Movie(props) {
  const { movie } = props;
  return <Card src={movie.poster_path} />;
}

export default Movie;
