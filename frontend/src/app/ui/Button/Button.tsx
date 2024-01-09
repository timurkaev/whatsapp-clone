import React, {FC, ReactNode} from "react";
import styles from "./Buttton.module.css";

interface ButtonProps {
	children: ReactNode;
}
export const Button: FC<ButtonProps> = ({children}) => {
	return (
		<button className={styles.button}>{children}</button>
	)
}