import React from "react";
import { pages } from "../subscription-plans/SubscriptionPlans";

type Props = {
	setSelectedPage: (page: string) => void;
};
const PaymentNav = ({ setSelectedPage }: Props) => {
	return (
		<div className="w-full flex items-center justify-around px-2 py-3 gap-2">
			<div
				className="flex flex-col  items-center"
				role="button"
				onClick={() => setSelectedPage(pages["1"])}>
				<span className="w-8 h-8 rounded-full inline-flex items-center justify-center text-white bg-gradient-to-tl from-[#0048FF] to-[#0096FF] font-bold">
					1
				</span>
				<span className="text-sm mt-[3px]">{pages["1"]}</span>
			</div>
			<div
				className="flex flex-col  items-center"
				role="button"
				onClick={() => setSelectedPage(pages["2"])}>
				<span className="w-8 h-8 rounded-full inline-flex items-center justify-center text-white bg-gradient-to-tl from-[#0048FF] to-[#0096FF] font-bold">
					2
				</span>
				<span className="text-sm mt-[3px]">{pages["2"]}</span>
			</div>
		</div>
	);
};

export default PaymentNav;
