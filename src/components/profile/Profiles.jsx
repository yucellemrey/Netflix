import styled from "styled-components";
import { profilesData } from "../../profiles";
import Profile from "./Profile"; // Ensure this path is correct
import { useState } from "react";

const ProfilesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 2rem;
`;

export default function Profiles(props) {
  const { setActiveProfile } = props; // corrected here
  const [profiles, setProfiles] = useState(profilesData);

  return (
    <ProfilesContainer>
      {profiles.map((profile) => (
        <Profile
          key={profile.id}
          profile={profile}
          setActiveProfile={setActiveProfile} // corrected here
        />
      ))}
    </ProfilesContainer>
  );
}
