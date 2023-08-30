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
