import { Cookies } from "react-cookie";
const cookies = new Cookies();
export const getCookie = (name) => {
  try {
    return cookies.get(name);
  } catch (error) {
    console.log(error);
  }
};

export const setCookie = (name, value, option = {}) => {
  try {
    return cookies.set(name, value, { ...option });
  } catch (error) {
    console.log(error);
  }
};

export const removeCookie = (name, option = {}) => {
  try {
    return cookies.remove(name, { ...option });
  } catch (error) {
    console.log(error);
  }
};
