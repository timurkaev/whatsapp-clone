import React, {ReactNode} from "react";
import styles from "./AuthModal.module.css";

export const AuthModal: React.FC<{children: ReactNode}> = ({children}): JSX.Element => {
	return (
		<div className={styles.authModal}>
			{children}
		</div>
	)
}