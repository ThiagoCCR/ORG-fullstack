import styled from "styled-components";
import Header from "../../components/Header/Header.js";
import dayjs from "dayjs";
import Habit from "./Habit.js";
import LoadingContext from "../../configs/contexts/LoadingContext";
import { useEffect, useContext, useCallback, useState } from "react";
import useTodayHabit from "../../hooks/api/useTodayHabit";

export default function TodayPage() {
  const { isLoading, setisLoading } = useContext(LoadingContext);
  const Now = dayjs();
  const auth = JSON.parse(localStorage.getItem("org"));
  const [todayHabits, setTodayHabits] = useState([]);
  const { getTodayHabits } = useTodayHabit();

  const getDataFromApi = useCallback(async () => {
    try {
      setisLoading(true);
      const habits = await getTodayHabits(auth.token);
      setTodayHabits(habits);
      setisLoading(false);
    } catch (error) {
      console.error(error.message);
      setisLoading(false);
    }
  }, [getTodayHabits]);

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <Wrapper>
      <Header />
      <h1>
        {Now.format("dddd").toUpperCase()}, {Now.format("DD/MM")}
      </h1>
      <TodayHabits>
        <h2>Seus Habitos:</h2>
        {todayHabits?.map((habit, i) => (
          <Habit
            key={i}
            name={habit.name}
            done={habit.done}
            habitId={habit.id}
            dayId={habit.HabitDay[0].id}
          />
        ))}
      </TodayHabits>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f8f8f8;
  position: relative;
  padding: 10rem 0 0rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  width: 100vw;
  height: 100vh;
  > h1 {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }
`;

const TodayHabits = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 380px;
  min-height: 200px;
  padding: 2rem 0;
  > h2 {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
  }
`;
