/* eslint-disable no-unused-vars */
import CryptoJS from "crypto-js";

export const UUID = () => {
  return Math.floor(Math.random() * 999999999);
};

export const encodeValue = (value) => {
  return CryptoJS.AES.encrypt(
    JSON.stringify(value),
    import.meta.env.VITE_SECRET_KEY,
  ).toString();
};

export const decodeValue = (value) => {
  const bytes = CryptoJS.AES.decrypt(value, import.meta.env.VITE_SECRET_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

export function searchByCharacter(text, data) {
  const keyWord = text.charAt(0).toUpperCase();
  const products = [...data];
  let characterData = [];

  if (keyWord === "S") {
    const arr = ["sale", "shoes"];
    characterData = [...arr];
  }

  if (keyWord === "M") {
    const arr = ["men"];
    characterData = [...arr];
  }

  if (keyWord === "W") {
    const arr = ["women"];
    characterData = [...arr];
  }

  if (text) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].name.charAt(0) === keyWord) {
        if (characterData.length === 0) {
          characterData.push(products[i].name.toLowerCase());
        } else if (
          characterData.indexOf(products[i].name.toLowerCase()) === -1
        ) {
          characterData.push(products[i].name.toLowerCase());
        }
      } else if (products[i].category.charAt(0) === keyWord) {
        if (characterData.length === 0) {
          characterData.push(products[i].category.toLowerCase());
        } else if (
          characterData.indexOf(products[i].category.toLowerCase()) === -1
        ) {
          characterData.push(products[i].category.toLowerCase());
        }
      }
    }
  }

  return characterData;
}

/* Search-Function*/
export function search(str, data) {
  let keyWord = str.trim();
  let searchData = [];

  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].match(keyWord.toLowerCase())) searchData.push(data[i]);
    }
  }

  return searchData;
}

/* ==================Cookie================== */
export function setCookie(cookieName, cookieValue, expireDays) {
  const date = new Date();
  date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();

  document.cookie =
    cookieName + "=" + encodeValue(cookieValue) + ";" + expires + "; path=/";
}

export function getCookie(cookieName) {
  let name = cookieName + "=";
  let cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1);
    }

    if (cookie.indexOf(name) == 0) {
      return decodeValue(cookie.substring(name.length, cookie.length));
    }
  }

  return "";
}

// Change VND
export function changeVND(money) {
  let changeMoney = money.split("");
  let length = changeMoney.length;

  for (let i = length - 3; i > 0; i -= 3) {
    changeMoney.splice(i, 0, ".");
  }

  return changeMoney.join("");
}
