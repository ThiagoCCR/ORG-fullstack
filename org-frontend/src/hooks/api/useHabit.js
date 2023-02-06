import useAsync from "../useAsync";
import * as habitApi from "../../services/habitsService";

export default function useHabit() {
  const {
    loading: getHabitsLoading,
    error: getHabitsError,
    act: getHabits,
  } = useAsync(habitApi.getHabits, false);

  return {
    getHabitsLoading,
    getHabitsError,
    getHabits,
  };
}
