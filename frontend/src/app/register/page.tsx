import React from 'react';
import Image from "next/image";
import {AuthModal} from "@/app/ui/AuthModal/AuthModal";
import {RegisterForm} from "@/app/widgets/RegisterForm/RegisterForm";

const Page = () => {
	return (
		<div className="auth-page">
			<AuthModal>
				<RegisterForm />
			</AuthModal>
		</div>
	);
};

export default Page;