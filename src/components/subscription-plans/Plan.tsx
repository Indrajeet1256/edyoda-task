import React from "react";
import { Plans } from "../../assets/data/plans";

type Props = {
	plan: Plans;
	handleSelectedPlan: (plan: Plans) => void;
	selectedPlan: Plans;
};

const PlanIcon = ({
	plan,
	selectedPlan,
}: {
	plan: Plans;
	selectedPlan: Plans;
}) => {
	const isPlanExpired = plan.isPlanExpired;
	const isPlanSelected = plan.id === selectedPlan?.id;

	return (
		<div
			className={`w-6 h-6 rounded-full ${
				!isPlanSelected && "border-text-disabled "
			} border-2 relative`}>
			<div
				className={`rounded-full  absolute flex items-center justify-center ${
					!isPlanExpired ? "inset-0" : "inset-1 bg-text-disabled"
				} ${
					isPlanSelected && !isPlanExpired
						? " bg-alert-border-to"
						: plan.isPlanExpired
						? "bg-danger bg-opacity-75"
						: "bg-white"
				} `}>
				{isPlanSelected && !isPlanExpired && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="white"
						className="w-4 h-4">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4.5 12.75l6 6 9-13.5"
						/>
					</svg>
				)}
			</div>
		</div>
	);
};

const Plan = ({ plan, handleSelectedPlan, selectedPlan }: Props) => {
	const isPlanRecommendedOrExpired = plan.isRecommended || plan?.isPlanExpired;

	return (
		<div
			onClick={() => handleSelectedPlan(plan)}
			className={`z-10 w-full relative rounded-md border-gray-300 border-2 overflow-hidden cursor-pointer ${
				plan.isPlanExpired
					? "bg-gray-100 pointer-events-none opacity-70"
					: plan.id === selectedPlan?.id
					? "bg-green-100 border-green-500"
					: "bg-white"
			}`}>
			{isPlanRecommendedOrExpired ? (
				<div
					className={`absolute top-0 left-8 ${
						plan.isRecommended && !plan?.isPlanExpired
							? "bg-alert-border-to"
							: " bg-danger-1"
					}  text-white h-5 pointer-events-none min-w-[120px] -z-10  flex items-center justify-center rounded-bl-md rounded-br-md`}>
					<span className="text-xs  tracking-tight">
						{!plan.isPlanExpired ? "Recommended" : "Offer expired"}
					</span>
				</div>
			) : null}

			<div className="px-2 py-3 flex gap-2 items-center justify-between mt-1">
				<div className="inline-flex items-center gap-2 flex-grow flex-shrink-0">
					<PlanIcon plan={plan} selectedPlan={selectedPlan} />
					<h2
						className={`${
							plan.id === selectedPlan?.id ? "font-semibold" : ""
						} text-sm`}>
						{plan.months} Months Subscription
					</h2>
				</div>
				<div className="flex flex-col">
					<div className="text-sm inline-flex gap-2 items-center">
						<span className="self-end">Total</span>
						<span className="text-base font-semibold text-gray-700">
							&#x20B9;{plan.total}
						</span>
					</div>
					<div className="text-xs inline-flex gap-2 items-center self-end">
						<span className="">&#x20B9;{plan.perMonth}</span>
						<span>/mo</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Plan;
