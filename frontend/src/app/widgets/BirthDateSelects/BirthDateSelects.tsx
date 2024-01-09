import React, { FC } from "react";
import { AuthSelect } from "@/app/ui/AuthSelect/AuthSelect";
import styles from "./BirthDateSelects.module.css";

export const BirthDateSelects: FC = (): JSX.Element => {
  return (
    <>
      <label className={styles.label}>Дата рождения</label>
      <div className={styles.selectGroup}>
        <AuthSelect defaultOption="День">
          <option>1</option>
        </AuthSelect>
        <AuthSelect defaultOption="Месяц">
          <option>Август</option>
        </AuthSelect>
        <AuthSelect defaultOption="Год">
          <option>1999</option>
        </AuthSelect>
      </div>
    </>
  );
};
