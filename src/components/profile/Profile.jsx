import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Card = styled.div`
  width: 20%;
  max-width: 200px;
  padding: 1rem;
  box-sizing: border-box;
`;

const Avatar = styled.img`
  width: 100%;
  border-radius: 0.2rem;
`;

const Name = styled.h2`
  color: gray;
  text-align: center;
  margin-top: 0.5rem;
`;

export default function Profile({ profile, setActiveProfile }) {
  const { name, avatar } = profile;

  const history = useHistory();

  function activeProfileHandler() {
    setActiveProfile(profile);
    history.push("/home");
  }

  return (
    <Card onClick={activeProfileHandler}>
      <Avatar src={avatar} />
      <Name>{name}</Name>
    </Card>
  );
}
