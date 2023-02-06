import { useState } from "react";
import styled from "styled-components";

export default function CreateHabitBoxDay({ selectedDays, setDays, day }) {
  const [clicked, setClicked] = useState(false);

  function handleSelection() {
    if (selectedDays.includes(day)) {
      const filteredArray = selectedDays.filter(
        (curr) => curr.number !== day.number
      );
      setDays(filteredArray);
    }
    setDays([...selectedDays, day.number]);
    setClicked(!clicked);
  }

  return (
    <Wrapper selected={clicked} onClick={handleSelection}>
      <p>{day.simbol}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: ${(props) =>
    props.selected === true ? "#040404" : "#ffffff"};
  border-radius: 50%;
  border: 1px solid #040404;
  p {
    font-weight: 700;
    color: ${(props) => (props.selected === true ? "#ffffff" : "#040404")};
    font-size: 1rem;
  }
`;
