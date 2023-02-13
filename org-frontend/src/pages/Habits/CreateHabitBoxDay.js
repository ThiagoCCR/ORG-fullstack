import { useState } from "react";
import styled from "styled-components";

export default function CreateHabitBoxDay({
  onClickSelect,
  day,
  clicked: initialClicked = false,
}) {
  const [clicked, setClicked] = useState(initialClicked);

  function handleClick() {
    onClickSelect(day);
    setClicked(!clicked);
  }

  return (
    <Wrapper selected={clicked} onClick={handleClick}>
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
