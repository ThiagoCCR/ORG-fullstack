import useAsync from "../useAsync";
import * as habitApi from "../../services/habitsService";

export default function useSelectHabit() {
  const {
    loading: selectHabitLoading,
    error: selectHabitError,
    act: selectHabit,
  } = useAsync(habitApi.checkHabit, false);

  return {
    selectHabitLoading,
    selectHabitError,
    selectHabit,
  };
}
