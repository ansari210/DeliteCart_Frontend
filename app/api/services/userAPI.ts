import Axios from "../axios";
export const createUser = async (user: { name: string; email: string }) => {
  const { data } = await Axios.post("/users", user);
  return data;
};
export const loginUser = async (user: { email: string; password: string }) => {
  const { data } = await Axios.post("/user/login", user);
  return data;
};
export const getUsers = async () => {
  const { data } = await Axios.get("/user/get_user_profile");
  return data;
};
export const updateUser = async (id: string, user: { name: string; email: string }) => {
  const { data } = await Axios.put(`/users/${id}`, user);
  return data;
};

export const deleteUser = async (id: string) => {
  const { data } = await Axios.delete(`/users/${id}`);
  return data;
};