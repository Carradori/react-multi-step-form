import React, { FormEvent } from "react";

interface IFormUserDetails {
	nextStep: () => void;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	values: {
		name: string;
		lastName: string;
		email: string;
		occupation: string;
		city: string;
		bio: string;
	};
}

const FormUserDetails = ({
	handleChange,
	nextStep,
	values,
}: IFormUserDetails) => {
	const handleContinue = (e: FormEvent) => {
		e.preventDefault();
		nextStep();
	};

	return (
		<div>
			<div>
				<label htmlFor="name">Your name</label>
				<input
					autoFocus
					type="text"
					name="name"
					id="name"
					placeholder="Your name"
					onChange={handleChange}
					defaultValue={values.name}
				/>
			</div>
			<div>
				<label htmlFor="lastName">Your Last Name</label>
				<input
					type="text"
					name="lastName"
					id="lastName"
					placeholder="Your Last Name"
					onChange={handleChange}
					defaultValue={values.lastName}
				/>
			</div>
			<div>
				<label htmlFor="email">Your email</label>
				<input
					type="text"
					id="email"
					name="email"
					placeholder="Your email"
					onChange={handleChange}
					defaultValue={values.email}
				/>
			</div>
			<div>
				<button onClick={handleContinue}>Continue</button>
			</div>
		</div>
	);
};

export default FormUserDetails;
