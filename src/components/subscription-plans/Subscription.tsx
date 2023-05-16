import React from "react";
import { Plans } from "../../assets/data/plans";
import Plan from "./Plan";

type Props = {
	plans: Plans[];
	handleSelectedPlan: (plan: Plans) => void;
	selectedPlan: null | Plans;
	paymentProcessing: boolean;
};

const Subscription = ({
	plans,
	handleSelectedPlan,
	selectedPlan,
	paymentProcessing,
}: Props) => {
	return (
		<div
			className={`mt-3 w-full flex flex-col gap-4 ${
				paymentProcessing ? "pointer-events-none opacity-60" : ""
			}`}>
			{plans.map((plan: Plans) => (
				<Plan
					plan={plan}
					key={plan.id}
					handleSelectedPlan={handleSelectedPlan}
					selectedPlan={selectedPlan!}
				/>
			))}
		</div>
	);
};

export default Subscription;
