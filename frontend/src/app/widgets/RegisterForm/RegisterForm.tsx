import React, { FC } from "react";
import styles from "./RegisterForm.module.css";
import { AuthInput } from "@/app/ui/AuthInput/AuthInput";
import { BirthDateSelects } from "@/app/widgets/BirthDateSelects/BirthDateSelects";
import { Button } from "@/app/ui/Button/Button";
import { LinkButton } from "@/app/ui/LinkButton/LinkButton";

export const RegisterForm: FC = () => {
  return (
    <form className={styles.registerForm}>
      <h1 className={styles.formTitle}>Создать учетную запись</h1>
      <AuthInput required={true}>E-MAIL</AuthInput>
      <AuthInput>Отоброжаемое имя</AuthInput>
      <AuthInput required={true}>Имя пользователя</AuthInput>
      <AuthInput type="password" required={true}>
        Пароль
      </AuthInput>
      <BirthDateSelects />
      <Button>Продолжить</Button>
      <LinkButton href="/login">Уже зарегистрированы?</LinkButton>
    </form>
  );
};
