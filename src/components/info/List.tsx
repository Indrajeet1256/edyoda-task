import React from "react";
import { format } from "../../utils/formatNumber";

import { icon1, icon2, icon4, icon5, icon6 } from "../../assets/data/icons";

const List = () => {
	return (
		<div className="mt-4 relative">
			<ul className="flex flex-col gap-5">
				<li>
					<div className="py-2 inline-flex gap-5 items-center">
						<img src={icon1} alt="" className="w-8 h-8" />
						<p className="text-white text-lg">
							<span className="text-blue-500 font-semibold">
								{format("100")}+
							</span>
							&nbsp;Job relevant courses
						</p>
					</div>
				</li>
				<li>
					<div className="py-2 inline-flex gap-5 items-center">
						<img src={icon4} alt="" className="w-8 h-8" />
						<p className="text-white text-lg">
							<span className="text-blue-500 font-semibold">
								{format("20,000")}+
							</span>
							&nbsp;Hours of content
						</p>
					</div>
				</li>
				<li>
					<div className="py-2 inline-flex gap-5 items-center">
						<img src={icon2} alt="" className="w-8 h-8" />
						<p className="text-white text-lg">
							<span className="text-blue-500 font-semibold">Exclusive</span>
							&nbsp;webinar access
						</p>
					</div>
				</li>
				<li>
					<div className="py-2 inline-flex gap-5 items-center">
						<img src={icon5} alt="" className="w-8 h-8" />
						<p className="text-white text-lg">
							Scholarship worth&nbsp;
							<span className="text-blue-500 font-semibold">
								&#x20B9;{format("94500")}
							</span>
						</p>
					</div>
				</li>
				<li>
					<div className="py-2 inline-flex gap-5 items-center">
						<img src={icon6} alt="" className="w-8 h-8" />
						<p className="text-white text-lg">
							<span className="text-blue-500 font-semibold">Ad Free</span>
							&nbsp;Learning Experience
						</p>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default List;
