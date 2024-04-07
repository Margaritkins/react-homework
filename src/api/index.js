const API_BASE = "https://randomuser.me/api/";

export const getUsers = ( results=10 ) => {
  return fetch(`${API_BASE}?results=${results}&seed=ma1208`).then((responce) =>
    responce.json()
  );
};
