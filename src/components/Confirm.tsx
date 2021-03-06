import React, { FormEvent } from "react";

interface IFormUserDetails {
	nextStep: () => void;
	prevStep: () => void;
	values: {
		name: string;
		lastName: string;
		email: string;
		occupation: string;
		city: string;
		bio: string;
	};
}

const Confirm = ({ nextStep, prevStep, values }: IFormUserDetails) => {
	const handleContinue = (e: FormEvent) => {
		e.preventDefault();
		nextStep();
	};

	const handleGoBack = (e: FormEvent) => {
		e.preventDefault();
		prevStep();
	};

	return (
		<div className="container">
			<div className="input-block">
				<label htmlFor="name">Your name</label>
				<p>{values.name}</p>
			</div>
			<div className="input-block">
				<label htmlFor="lastName">Your Last Name</label>
				<p>{values.lastName}</p>
			</div>
			<div className="input-block">
				<label htmlFor="email">Your email</label>
				<p>{values.email}</p>
			</div>
			<div className="input-block">
				<label htmlFor="email">Your occupation</label>
				<p>{values.occupation}</p>
			</div>
			<div className="input-block">
				<label htmlFor="email">Your city</label>
				<p>{values.city}</p>
			</div>
			<div className="input-block">
				<label htmlFor="email">Your bio</label>
				<p>{values.bio}</p>
			</div>
			<div className="input-block">
				<button onClick={handleGoBack} className="back">
					Go Back
				</button>
				<button onClick={handleContinue}>Continue</button>
			</div>
		</div>
	);
};

export default Confirm;
