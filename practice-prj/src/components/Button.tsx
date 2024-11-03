import { FC } from "react";
import { ButtonShape } from "../types/button_types";

export const Button: FC<ButtonShape> = ({ label, onClick, disabled }) => {
  return (
    <div>
      <button onClick={onClick} disabled={disabled}>
        {label}
      </button>
    </div>
  );
};
