import { useState, useCallback } from "react";
import styled from "styled-components";
import days from "../../configs/constants/days";
import CreateHabitBoxDay from "./CreateHabitBoxDay";
import useCreateHabit from "../../hooks/api/useCreateHabit";

export default function CreateHabitBox({ visible, setCreate}) {
  const [name, setName] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  const { createHabit } = useCreateHabit();

  const eraseData = useCallback(() => {
    setName("");
    setSelectedDays([]);
    setCreate(!visible);
  }, [setCreate, visible]);

  const sendDataToApi = useCallback(async () => {
    const auth = JSON.parse(localStorage.getItem("org"));
    if (name === "" || selectedDays.length === 0) return;
    try {
      await createHabit(auth.token, {
        name,
        days: selectedDays,
      });
      eraseData();
    } catch (error) {
      console.error(error.message);
    }
  }, [createHabit, eraseData, name, selectedDays]);

  function handleSelection(day) {
    if (selectedDays.includes(day)) {
      const filteredArray = selectedDays.filter(
        (curr) => curr.number !== day.number
      );
      setSelectedDays(filteredArray);
    }
    setSelectedDays([...selectedDays, day.number]);
  }

  return (
    <Wrapper visible={visible}>
      <input
        placeholder="Habit name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <DaysContainer>
        {days.map((day, i) => (
          <CreateHabitBoxDay
            key={day.number + i}
            onClickSelect={handleSelection}
            day={day}
            clicked={false}
          />
        ))}
      </DaysContainer>
      <ButtonsContainer>
        <button onClick={eraseData}>Cancel</button>
        <button onClick={sendDataToApi}>Save</button>
      </ButtonsContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 24rem;
  height: 10rem;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: all 0.2s linear;
  display: ${(props) => (props.visible === true ? "inital" : "none")};
  > input {
    width: 20rem;
    height: 3rem;
    border-radius: 0.5rem;
    font-size: 1.1rem;
  }
`;

const DaysContainer = styled.div`
  display: flex;
  width: 20rem;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 20rem;
  gap: 1rem;
  > button {
    height: 2rem;
    width: 4rem;
    border: none;
  }
`;
