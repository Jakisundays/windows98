export const getLocal = (response) => {
  const info = response.data.result;

  const jwt = response.data.token;
  const username = info.username;
  const id = info._id;

  localStorage.setItem("jwt", jwt);
  localStorage.setItem("username", username);
  localStorage.setItem("id", id);
};
