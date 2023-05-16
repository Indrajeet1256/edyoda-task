import { useState, useEffect } from "react";
import { Plans } from "../../assets/data/plans";
import plans from "../../assets/data/plans";
import Subscription from "./Subscription";
import Spinner from "../spinner/Spinner";
import { iconClock, razorPay } from "../../assets/data/icons";
import PaymentNav from "../payment-nav/PaymentNav";
import { calculatePrice } from "../../utils/calculatePrice";

const delay = (ms = 1000) =>
	new Promise((resolve, reject) => setTimeout(resolve, ms));

export const pages = Object.freeze({
	1: "Sign Up",
	2: "Subscribe",
});

const SubscriptionPlans = () => {
	const [subscriptions, setSubscriptions] = useState<Plans[]>(plans);
	const [selectedPlan, setSelectedPlan] = useState<null | Plans>(() => {
		return (
			subscriptions.find((subscription) => subscription.isRecommended) ?? null
		);
	});

	const [paymentProcessing, setPaymentProcessing] = useState<boolean>(false);
	const [selectedPage, setSelectedPage] = useState<string | null>(pages["2"]);

	useEffect(() => {
		const interval = setInterval(() => {
			const current = Date.now();
			const newSubscriptions = subscriptions.map((subscription: Plans) => {
				if (subscription?.expiration) {
					const checkSubscriptionExpired = subscription?.expiration - current;
					if (checkSubscriptionExpired <= 0) {
						return { ...subscription, isPlanExpired: true, expiration: null };
					}
					return subscription;
				}
				return subscription;
			});
			setSubscriptions(newSubscriptions);
		}, 1000);
		return () => clearInterval(interval);
	}, [subscriptions]);

	const handleSelectedPlan = (plan: Plans) => {
		setSelectedPlan(plan);
	};

	const handlePayment = async () => {
		if (!selectedPlan) return;
		setPaymentProcessing(true);
		await delay(3000);
		alert("Payment Succcessful...");
		setPaymentProcessing(false);
	};

	return (
		<article className="lg:col-span-5 col-span-12 rounded-md overflow-hidden flex lg:justify-end">
			<div className="lg:w-[450px] w-full bg-white px-3 py-2 shadow-sm rounded-md">
				<PaymentNav setSelectedPage={setSelectedPage} />

				{selectedPage === pages["2"] ? (
					<>
						<h2 className="text-center font-semibold md:text-2xl text-lg text-gray-700">
							Select your subscription plan
						</h2>
						<Subscription
							selectedPlan={selectedPlan}
							plans={subscriptions}
							handleSelectedPlan={handleSelectedPlan}
							paymentProcessing={paymentProcessing}
						/>
						<div className="w-full h-[1px] bg-gray-400 mt-4" />
						<div>
							<div className="px-8 py-2 flex justify-between items-center">
								<span>Subscription Fee</span>
								<span>&#x20B9;18,500</span>
							</div>
							<div className=" border-alert-border-to border-2 py-2 px-4 bg-danger-1 bg-opacity-10 relative overflow-hidden rounded-md">
								<div className="flex flex-row justify-between items-start">
									<div className="flex-grow mr-2">
										<h2 className="font-semibold text-danger-1">
											Limited time offer
										</h2>
										<p className="text-danger-1 inline-flex gap-2 items-center">
											<img src={iconClock} alt="" className="w-6 h-6" />
											<span className="text-sm">
												Offer valid till 25th March 2023
											</span>
										</p>
									</div>
									<p>
										-&nbsp;&#x20B9;<span>18,401</span>
									</p>
								</div>
							</div>
							<div className="px-8 py-2 flex justify-between items-center">
								<p className="text-sm">
									<span className="font-bold text-color text-base">Total</span>{" "}
									(Incl. of 18% GST)
								</p>
								<span className="font-bold text-lg">
									&#x20B9;{calculatePrice(selectedPlan?.total!)}
								</span>
							</div>
						</div>
						<footer className="flex flex-col gap-2">
							<div className="w-full flex flex-row justify-center gap-2">
								<button
									type="button"
									className="border-2 rounded-md bg-transparent cursor-pointer border-danger-1 px-2 py-3 w-full uppercase">
									Cancel
								</button>
								<button
									onClick={handlePayment}
									type="button"
									disabled={paymentProcessing}
									className="bg-success-color text-white uppercase rounded-md  cursor-pointer px-2 py-3 w-full inline-flex items-center justify-center relative overflow-hidden">
									{paymentProcessing ? (
										<Spinner />
									) : (
										<span>Proceed To Pay</span>
									)}
								</button>
							</div>
							<div className="w-full mt-2">
								<img
									src={razorPay}
									alt="razorPay"
									className="object-contain w-24"
								/>
							</div>
						</footer>
					</>
				) : (
					<>
						<h2 className="text-center text-lg font-bold uppercase text-gray-500">
							Sign Up
						</h2>
					</>
				)}
			</div>
		</article>
	);
};

export default SubscriptionPlans;
