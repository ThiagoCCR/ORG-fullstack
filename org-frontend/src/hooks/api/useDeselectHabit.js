import useAsync from "../useAsync";
import * as habitApi from "../../services/habitsService";

export default function useDeselectHabit() {
  const {
    loading: deselectHabitLoading,
    error: deselectHabitError,
    act: deselectHabit,
  } = useAsync(habitApi.uncheckHabit, false);

  return {
    deselectHabitLoading,
    deselectHabitError,
    deselectHabit,
  };
}
