import "./ratio.css";
import { useState } from "react";

useState;

export default function RatioButton() {
  const { checked, setChecked } = useState(false);

  return (
    <label className="container">
      One
      <input
        onChange={() => setChecked(!checked)}
        type="radio"
        checked={checked}
        name="radio"
      />
      <span className="checkmark" />
    </label>
  );
}
