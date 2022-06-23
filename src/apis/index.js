import axios from "axios";

const getAll = async () => {
  try {
    const data = await axios.get(
      "https://api.chucknorris.io/jokes/search?query=all"
    );
    return data;
  } catch (err) {
    return err;
  }
};
const getAllCategories = async () => {
  try {
    const data = await axios.get("https://api.chucknorris.io/jokes/categories");
    console.log("data");
    return data.data;
  } catch (err) {
    return err;
  }
};
export { getAll, getAllCategories };
