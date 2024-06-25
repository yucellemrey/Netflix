import { useEffect, useState } from "react";
import { userSuggestionData } from "../userSuggestion";
import Suggestion from "../components/suggestion/Suggestion";

export default function Home(props) {
  const [suggestions, setSuggestions] = useState([]);
  const { activeProfile } = props;
  const { name } = activeProfile;

  useEffect(() => {
    const suggestionData = userSuggestionData[activeProfile.id];
    setSuggestions(suggestionData);
    console.log(activeProfile);
  }, [activeProfile]);

  return (
    <>
      <div>Home {name}</div>{" "}
      {suggestions.map((suggestion) => {
        return <Suggestion key={suggestion.id} suggestion={suggestion} />;
      })}
    </>
  );
}
