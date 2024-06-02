// step of add localhost
// set local storage to the browser
// get local storage to the browser
// remove local storage access to the browser

export const setToLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }

  return localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key: string) => {
  // console.log("keys", localStorage.getItem(key));
  // if (!key || typeof window === "undefined") {
  //   return "";
  // }
  return localStorage.getItem(key);
};

export const removeFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.removeItem(key);
};
