import React from "react";
import List from "./List";
import { format } from "../../utils/formatNumber";

const Info = () => {
	return (
		<article className="lg:col-span-7 col-span-12 px-3 py-4">
			<div className="flex flex-col gap-3">
				<h1 className="text-2xl sm:text-4xl font-bold max-w-[600px] text-white">
					Access curated courses worth &#x20B9;&nbsp;
					<span>
						<span className="relative">
							{format(18500)}
							<span className="absolute w-full h-1 bg-red-500 left-[2px] top-[50%] z-10 -translate-y-1/2"></span>
						</span>
					</span>
					&nbsp;at just{" "}
					<span className="text-blue-500 font-bold">&#x20B9;&nbsp;99</span> per
					year!
				</h1>
				<List />
			</div>
		</article>
	);
};

export default Info;
