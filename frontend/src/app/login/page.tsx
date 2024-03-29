import React from 'react';
import Image from "next/image";
import {AuthModal} from "@/app/ui/AuthModal/AuthModal";
import {LoginForm} from "@/app/widgets/LoginForm/LoginForm";

const Page = () => {
	return (
		<div className="auth-page">
			<AuthModal>
				<LoginForm/>
			</AuthModal>
		</div>
	);
};

export default Page;