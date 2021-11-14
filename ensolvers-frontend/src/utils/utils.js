const baseApiUrl = "https://ensolvers-todo-backend.herokuapp.com/api/v1";

const setToken = () => {
  const loggedUser = window.localStorage.getItem("loggedUser");
  if (loggedUser) {
    const user = JSON.parse(loggedUser);
    const config = {
      headers: { Authorization: user.token },
    };
    return config;
  }
  return null;
};
export { baseApiUrl, setToken };
