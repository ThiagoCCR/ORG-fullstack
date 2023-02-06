import { useState } from "react";
import styled from "styled-components";
import useSelectHabit from "../../hooks/api/useSelectHabit";
import useDeselectHabit from "../../hooks/api/useDeselectHabit";
import CheckIcon from "../../components/Icons/CheckIcon";
import UncheckIcon from "../../components/Icons/UncheckIcon";

export default function Habit({ name, done, habitId, dayId }) {
  const [selected, setSelected] = useState(done);
  const { selectHabit } = useSelectHabit();
  const { deselectHabit } = useDeselectHabit();
  const auth = JSON.parse(localStorage.getItem("org"));

  async function handleSelection() {
    if (selected === false) {
      const body = { habitId, dayId };
      await selectHabit(body, auth.token);
      setSelected(!selected);
    }
    const body = { habitId, dayId };
    await deselectHabit(body, auth.token);
    setSelected(!selected);
  }

  return (
    <Wrapper selected={selected} onClick={handleSelection}>
      <p>{name}</p>
      {selected ? (
        <CheckIcon
          iconProps={{
            color: "#FFFFFF",
            className: "global-class-name",
            size: "40px",
          }}
        />
      ) : (
        <UncheckIcon
          iconProps={{
            color: "#FFFFFF",
            className: "global-class-name",
            size: "40px",
          }}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 4rem;
  width: 20rem;
  background-color: ${(props) =>
    props.selected === true ? "#c6eeae" : "#FC8787"};
  border-radius: 3rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  p {
    font-weight: 700;
    font-size: 1.2rem;
  }
`;
