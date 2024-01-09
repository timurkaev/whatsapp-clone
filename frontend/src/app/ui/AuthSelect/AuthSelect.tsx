import React, { ChangeEvent, FC, ReactNode } from "react";
import styles from "./AuthSelect.module.css";
interface AuthSelectProps {
  children: ReactNode;
  defaultOption: "День" | "Месяц" | "Год";
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const AuthSelect: FC<AuthSelectProps> = ({
  children,
  defaultOption,
  value,
  onChange,
}): JSX.Element => {
  return (
    <select className={styles.select} value={value} onChange={onChange}>
      <option hidden={true} value="">
        {defaultOption}
      </option>
      {children}
    </select>
  );
};
