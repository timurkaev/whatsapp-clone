import React, {FC, ReactNode} from "react";
import styles from "./LinkButton.module.css";
import Link from "next/link";

interface LinkButtonProps {
	children: ReactNode;
	href: string;
}

export const LinkButton: FC<LinkButtonProps> = ({children, href}): JSX.Element => {
	return (
		<Link href={href}>
			<button className={styles.button}>
				{children}
			</button>
		</Link>
	)
}