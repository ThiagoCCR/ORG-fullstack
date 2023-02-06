import api from "./api";

export async function getHabits(token) {
  const response = await api.get("/habits", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getTodayHabits(token) {
  const response = await api.get("/habits/today", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
});

  return response.data;
}

export async function checkHabit(body, token) {
  const response = await api.post("/habits/today/check", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
});

  return response.data;
}

export async function uncheckHabit(body, token) {
  const response = await api.post("/habits/today/uncheck", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
});

  return response.data;
}


export async function createHabit(token, body) {
  const response = await api.post("/habits", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
});

  return response.data;
}