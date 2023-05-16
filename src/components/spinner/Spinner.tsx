import React from "react";

import loading from "../../assets/images/loader.gif";

const Spinner = () => {
	return (
		<div className="absolute">
			<img src={loading} alt="Loading..." className="object-contain w-16" />
		</div>
	);
};

export default Spinner;
