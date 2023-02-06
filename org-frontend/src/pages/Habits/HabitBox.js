import { useState } from "react";
import styled from "styled-components";
import ModalIcon from "../../components/Icons/EditIcon";
import days from "../../configs/constants/days";

export default function HabitBox({ name, selectedDays }) {
  const auth = JSON.parse(localStorage.getItem("org"));
  //edit and exclude habit by modal

  return (
    <Wrapper>
      <NameAndEdit>
        <p>{name}</p>
        <ModalIcon
          iconProps={{
            color: "#040404",
            className: "global-class-name",
            size: "25px",
          }}
        />
      </NameAndEdit>
      <DivLine></DivLine>
      <DaysContainer>
        {days.map((day, i) => (
          <Day key={day + i} name={i} selected={selectedDays.includes(i)}>
            <p>{day.simbol}</p>
          </Day>
        ))}
      </DaysContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 7rem;
  width: 20rem;
  background-color: #d9d9d9;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  p {
    font-weight: 700;
    font-size: 1.2rem;
  }
`;

const NameAndEdit = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DivLine = styled.div`
  height: 2px;
  width: 100%;
  background-color: #ffffff;
  margin: 0.5rem 0 0.6rem 0;
`;

const DaysContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: ${(props) =>
    props.selected === true ? "#040404" : "#ffffff"};
  border-radius: 50%;
  p {
    font-weight: 700;
    color: ${(props) => (props.selected === true ? "#ffffff" : "#040404")};
    font-size: 1rem;
  }
`;
