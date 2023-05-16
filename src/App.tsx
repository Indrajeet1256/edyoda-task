import React from "react";
import { Navbar, Info, SubscriptionPlans } from "./components";

const App = () => {
	return (
		<main className="main-background-image h-screen relative overflow-x-hidden overflow-y-auto">
			<Navbar />
			<section className="grid grid-cols-12 mt-20 mb-8 gap-2 w-full px-2 sm:px-12 py-3">
				<Info />
				<SubscriptionPlans />
			</section>
		</main>
	);
};

export default App;
