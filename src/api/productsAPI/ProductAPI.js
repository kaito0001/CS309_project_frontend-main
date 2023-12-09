import { instance } from "../axios/instance";

function ProductsAPI() {
  // home
  async function getProducts() {
    try {
      const result = await instance.get("/posts");

      return result.data || null;
    } catch (error) {
      console.log(error);
    }
  }

  // normal user
  async function searchProduct(name) {
    try {
      const regexPattern = new RegExp("^.*" + name + ".*$");
      const result = await instance.get(`/posts/${regexPattern}`);

      return result.data || null;
    } catch (error) {
      console.log(error);
    }
  }

  // admin
  async function getProduct(id) {
    try {
      const result = await instance.get(`/posts/${id}`);

      return result.data || null;
    } catch (error) {
      console.log(error);
    }
  }

  async function postProduct(params) {
    try {
      const result = await instance.post("/posts", params);

      return result.data || null;
    } catch (error) {
      console.log(error);
    }
  }

  async function putProduct(params) {
    try {
      const restult = await instance.put(`/posts/${params.id}`);

      return restult.data || null;
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProduct(id) {
    try {
      const result = await instance.delete(`/posts/${id}`);

      return result.data || null;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    getProducts,
    getProduct,
    postProduct,
    searchProduct,
    putProduct,
    deleteProduct,
  };
}

export default ProductsAPI();
