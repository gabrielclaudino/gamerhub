const users = [];

export const addUser = (id, nome, email, password) => {
  users.push({ id, nome, email, password });
};

export const getUsers = () => users;
