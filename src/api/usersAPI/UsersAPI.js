import { instance } from "../axios/instance";

function getUsersAPI() {
  async function SignIn(params) {
    try {
      const result = await instance.get("/api/auth/login");

      return result.data || null;
    } catch (error) {
      console.log(error);
    }
  }

  async function postUser(params) {
    try {
      const result = await instance.post("/posts", params);

      return result.data || null;
    } catch (error) {
      console.log(error);
    }
  }
  async function getUser(email) {
    try {
      const result = await instance.get(`/get/${email}`);

      return result.data || null;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    SignIn,
    postUser,
    getUser,
  };
}

export default getUsersAPI();
