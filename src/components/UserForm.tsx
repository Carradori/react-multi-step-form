import React, { useState } from "react";
import Confirm from "./Confirm";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";

// import { Container } from './styles';

const UserForm = () => {
	const [step, setStep] = useState(1);
	const [fields, setFields] = useState({
		name: "",
		lastName: "",
		email: "",
		occupation: "",
		city: "",
		bio: "",
	});

	const handleNextStep = () => {
		setStep((step) => step + 1);
	};
	const handlePrevStep = () => {
		setStep((step) => step - 1);
	};

	const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFields({
			...fields,
			[name]: value,
		});
	};

	switch (step) {
		case 1:
			return (
				<FormUserDetails
					nextStep={handleNextStep}
					handleChange={handleFieldChange}
					values={fields}
				/>
			);
		case 2:
			return (
				<FormPersonalDetails
					nextStep={handleNextStep}
					prevStep={handlePrevStep}
					handleChange={handleFieldChange}
					values={fields}
				/>
			);
		case 3:
			return (
				<Confirm
					nextStep={handleNextStep}
					prevStep={handlePrevStep}
					values={fields}
				/>
			);
		case 4:
			return <h1>Success</h1>;
	}

	return null;
};

export default UserForm;
