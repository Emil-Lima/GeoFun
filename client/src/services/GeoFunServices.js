const baseURL = "http://localhost:9000/api/users/";

export const getUsers = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const postUser = (payload) => {
  if (payload.name && payload.age && payload.avatar) {
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  } else {
    alert("name, age and avatar required");
  }
};

export const patchUser = (payload) => {
  return fetch(baseURL + payload._id, {
    method: "PATCH",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};
