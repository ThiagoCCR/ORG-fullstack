import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function SelectionBox() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <HabitBox onClick={() => navigate("/habits")}>
        <p>Habits</p>
      </HabitBox>
      <HumorBox onClick={() => navigate("/humor")}>
        <p>Humor</p>
      </HumorBox>
      <FinanceBox onClick={() => navigate("/finances")}>
        <p>Finances</p>
      </FinanceBox>
      <CalendarBox onClick={() => navigate("/calendar")}>
        <p>Calendar</p>
      </CalendarBox>
      <TodayButton onClick={() => navigate("/today")}>TODAY</TodayButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 24rem;
  height: 24rem;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  padding: 3rem 0 3rem 0;
  p {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
  }
`;

const HabitBox = styled.div`
  width: 10rem;
  height: 8rem;
  background: #5e80d8;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4rem 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HumorBox = styled.div`
  width: 10rem;
  height: 8rem;
  background: #ab71bf;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0 4rem 0 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FinanceBox = styled.div`
  width: 10rem;
  height: 8rem;
  background: #64a14f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 0px 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CalendarBox = styled.div`
  width: 10rem;
  height: 8rem;
  background: #d86f6f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0 0px 4rem 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodayButton = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: #ffffff;
  position: absolute;
  top: 50%-4rem;
  right: 50%-4rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;
