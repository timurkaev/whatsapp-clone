import React, {ReactNode, FC, ChangeEvent} from "react";
import {inspect} from "util";
import styles from "./AuthInput.module.css"

interface AuthInputProps {
	children?: ReactNode;
	type?: "password" | "text";
	required?: boolean;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	value?: string;
}

export const AuthInput: FC<AuthInputProps> = (props): JSX.Element => {
	const {children,
		type = "text",
		required = true,
		onChange,
		value
	} = props;

	return (
		<div>
			<label className={styles.inputLabel}>{children}</label>
			<input className={styles.input} type={type} onChange={onChange} required={required} value={value}/>
		</div>
	)
}