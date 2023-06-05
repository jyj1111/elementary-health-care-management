import { Cookies } from "react-cookie";
const cookies = new Cookies();
export const getCookie = (name) => {
  try {
    return cookies.get(name);
  } catch (error) {
    console.log(error);
  }
};
