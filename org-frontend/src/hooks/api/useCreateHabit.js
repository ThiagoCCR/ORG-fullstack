import useAsync from "../useAsync";
import * as habitApi from "../../services/habitsService";

export default function useCreateHabit() {
  const {
    loading: createHabitLoading,
    error: createHabitError,
    act: createHabit,
  } = useAsync(habitApi.createHabit, false);

  return {
    createHabitLoading,
    createHabitError,
    createHabit,
  };
}
