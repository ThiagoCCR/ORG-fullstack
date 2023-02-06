import useAsync from "../useAsync";
import * as habitApi from "../../services/habitsService";

export default function useTodayHabit(today) {
  const {
    loading: getTodayHabitsLoading,
    error: getTodayHabitsError,
    act: getTodayHabits,
  } = useAsync(habitApi.getTodayHabits, false);

  return {
    getTodayHabitsLoading,
    getTodayHabitsError,
    getTodayHabits,
  };
}
