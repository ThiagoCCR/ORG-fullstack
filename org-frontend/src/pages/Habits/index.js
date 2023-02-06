import styled from "styled-components";
import Header from "../../components/Header/Header.js";
import HabitBox from "./HabitBox.js";
import useHabit from "../../hooks/api/useHabit.js";
import { useState, useCallback, useContext, useEffect } from "react";
import LoadingContext from "../../configs/contexts/LoadingContext.js";
import CreateHabitBox from "./CreateHabitBox.js";
import AddButton from "../../components/Icons/AddButton.js";

export default function HabitsPage() {
  const auth = JSON.parse(localStorage.getItem("org"));
  const { isLoading, setisLoading } = useContext(LoadingContext);
  const [habits, setHabits] = useState([]);
  const [create, setCreate] = useState(false);
  const { getHabits } = useHabit();

  const getDataFromApi = useCallback(async () => {
    try {
      setisLoading(true);
      const habits = await getHabits(auth.token);
      setHabits(habits);
      setisLoading(false);
    } catch (error) {
      console.error(error.message);
      setisLoading(false);
    }
  }, [auth.token, getHabits, setisLoading]);

  useEffect(() => {
    getDataFromApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header />
      <TitleAndAddHabitContainer>
        <h2>My Habits</h2>
        <div onClick={() => setCreate(!create)}>
          <AddButton
            iconProps={{
              color: "#040404",
              className: "global-class-name",
              size: "35px",
            }}
          />
        </div>
      </TitleAndAddHabitContainer>
      <CreateHabitBox visible={create} setCreate={setCreate} getDataFromApi={getDataFromApi}/>
      <Container>
        {habits.length === 0 ? (
          <h2>You have no registered habits</h2>
        ) : (
          <>
            {habits.map((habit, i) => (
              <HabitBox
                key={`${habit.name}i`}
                name={habit.name}
                selectedDays={habit.days}
              />
            ))}
          </>
        )}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f8f8f8;
  position: relative;
  padding: 8rem 0 0rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  gap: 1rem;
`;

const TitleAndAddHabitContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 24rem;
  > h2 {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
  }
`;

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 24rem;
  padding: 1rem 0;
  min-height: 10rem;
  > h2 {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
  }
`;
