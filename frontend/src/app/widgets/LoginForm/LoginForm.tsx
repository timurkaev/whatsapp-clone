import React, { FC } from "react";
import { AuthInput } from "@/app/ui/AuthInput/AuthInput";
import styles from "./LoginForm.module.css";
import { Button } from "@/app/ui/Button/Button";
import { LinkButton } from "@/app/ui/LinkButton/LinkButton";

export const LoginForm: FC = () => {
  return (
    <form>
      <h1 className={styles.modalTitle}>С возвращением!</h1>
      <div className={styles.modalSubTitle}>Мы так рады видеть вас снова!</div>
      <AuthInput type="text" required={true}>
        Адрес электронной почты или номер телефона
      </AuthInput>
      <div className={styles.margin} />
      <AuthInput type="text" required={true}>
        Пароль
      </AuthInput>
      <LinkButton href="/forgot-password">Забыли пароль?</LinkButton>
      <Button>Вход</Button>
      <div className={styles.register}>
        Нужна учетная запись?{" "}
        <LinkButton href="/register">Зарегистрироваться</LinkButton>
      </div>
    </form>
  );
};
