import React, { FormEvent } from "react";

interface IFormUserDetails {
	nextStep: () => void;
	prevStep: () => void;
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

const FormPersonalDetails = ({
	handleChange,
	nextStep,
	prevStep,
	values,
}: IFormUserDetails) => {
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
				<label htmlFor="occupation">Occupation</label>
				<input
					autoFocus
					type="text"
					name="occupation"
					id="occupation"
					placeholder="Your ocuupation"
					onChange={handleChange}
					defaultValue={values.occupation}
				/>
			</div>
			<div className="input-block">
				<label htmlFor="city">Yout city</label>
				<input
					type="text"
					id="city"
					name="city"
					placeholder="Yout city"
					onChange={handleChange}
					defaultValue={values.city}
				/>
			</div>
			<div className="input-block">
				<label htmlFor="bio">Your bio</label>
				<input
					type="text"
					id="bio"
					name="bio"
					placeholder="Your bio"
					onChange={handleChange}
					defaultValue={values.bio}
				/>
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

export default FormPersonalDetails;
