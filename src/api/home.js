import { instance } from "./axios/instance";

function HomeAPI() {
  const baseAPI = "";

  async function getUsers(params) {
    try {
      const result = await instance.get(`${baseAPI}/users`);

      return result.data || null;
    } catch (error) {
      console.log(error);
    }
  }

  async function postUser(params) {
    try {
      const result = await instance.post(`${baseAPI}/adduser`, params);

      return result.data || null;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    getUsers,
    postUser,
  };
}

export default HomeAPI();
