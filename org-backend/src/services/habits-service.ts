import { notFoundError, badRequestError } from "@/errors";
import { HabitParams } from "@/schemas/create-habit-schema";
import HabitsRepository from "@/repositories/habits-repository";
import dayjs from "dayjs";
import { Habit } from "@prisma/client";

async function createHabit({ name, days }: HabitParams, userId: number) {
  const newHabit = await HabitsRepository.createHabit({ name, userId });
  if (!newHabit) throw badRequestError();
  days.forEach(async (day) => {
    await HabitsRepository.createHabitDay(newHabit.id, day);
  });
  return newHabit;
}

async function findUserHabits(userId: number) {
  const Habits = await HabitsRepository.findAllUserHabits(userId);
  const filteredDays: any = Habits.map((habit) => {
    const days = habit.HabitDay;
    const daysArr = days.map((habitDay) => habitDay.day);

    return { ...habit, days: daysArr };
  });
  if (!Habits) throw notFoundError();
  return filteredDays;
}

async function findUserTodayHabits(userId: number) {
  const now = dayjs().format("dddd");
  const date = dayjs().format("DD-MM-YY");
  const todayNumber = filterTodayNumber(now);
  const Habits = await HabitsRepository.findAllUserHabits(userId);
  if (!Habits) throw notFoundError();

  const filteredHabits = Habits.map((habit) => {
    const days = habit.HabitDay;
    const filteredDays = days.filter((curr) => {
      if (curr.day === todayNumber) return curr;
    });
    return { ...habit, HabitDay: filteredDays };
  });
  const finalHabits = filteredHabits.filter((habit) => habit.HabitDay.length > 0);
  const response = [];

  for (let i = 0; i < finalHabits.length; i++) {
    let currHabit = finalHabits[i];
    let status = false;
    const habitLog = await HabitsRepository.findHabitLog(currHabit.id, date);
    if (habitLog) {
      status = habitLog.done;
    }
    currHabit = { ...currHabit, done: status } as any;
    response.push(currHabit);
  }
  return response;
}

function filterTodayNumber(today: string) {
  if (today === "Sunday") return 0;

  if (today === "Monday") return 1;

  if (today === "Tuesday") return 2;

  if (today === "Wednesday") return 3;

  if (today === "Thursday") return 4;

  if (today === "Friday") return 5;

  if (today === "Saturday") return 6;
}

async function checkHabit(habitId: number, dayId: number) {
  const now = dayjs().format("DD-MM-YY");
  const habitLogExists = await HabitsRepository.findHabitLog(habitId, now);

  if (habitLogExists && habitLogExists.done === false) {
    const checkedHabit = await HabitsRepository.checkOrUncheckUserHabit(habitLogExists.id, true);
    if (!checkedHabit) throw badRequestError();
    return checkedHabit;
  }

  const newHabitLog = await HabitsRepository.createHabitLog(habitId, dayId, now, true);
  if (!newHabitLog) throw badRequestError();
  return newHabitLog;
}

async function uncheckHabit(habitId: number, dayId: number) {
  const now = dayjs().format("DD-MM-YY");
  const habitLogExists = await HabitsRepository.findHabitLog(habitId, now);

  if (habitLogExists && habitLogExists.done === true) {
    const checkedHabit = await HabitsRepository.checkOrUncheckUserHabit(habitLogExists.id, true);
    if (!checkedHabit) throw badRequestError();
    return checkedHabit;
  }

  const newHabitLog = await HabitsRepository.createHabitLog(habitId, dayId, now, false);
  if (!newHabitLog) throw badRequestError();
  return newHabitLog;
}

const habitsService = {
  createHabit,
  findUserHabits,
  findUserTodayHabits,
  checkHabit,
  uncheckHabit,
};

export default habitsService;
