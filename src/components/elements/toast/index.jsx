/* eslint-disable react/prop-types */
import "./toast.css";

export default function Toast({ message }) {
  return <div className="snackbar">{message}</div>;
}
