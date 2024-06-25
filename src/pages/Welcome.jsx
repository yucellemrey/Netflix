import Profiles from "../components/profile/Profiles";
import styled from "styled-components";

const Button = styled.div`
  color: gray;
  padding: 0.5rem 1.5rem;
  border: 1px solid gray;
  display: inline-block;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
    color: black;
  }
`;

export default function Welcome(props) {
  const { setActiveProfile } = props;
  return (
    <div>
      <h1>Who's Watching?</h1>
      <Profiles setActiveProfile={setActiveProfile} />
      <Button>Manage Profiles</Button>
    </div>
  );
}
