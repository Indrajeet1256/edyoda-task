import React from "react";

const SvgWrapper = ({
	children,
	classNames,
	...rest
}: {
	children: React.ReactElement;
	classNames: string;
}) => {
	return (
		<svg
			{...rest}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			className={classNames}
			stroke="currentColor">
			{children}
		</svg>
	);
};

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm py-3">
			<div className="px-4 sm:px-12 flex items-stretch gap-3 ">
				<div className="flex mr-0 flex-shrink-0 sm:mr-5 items-center justify-center">
					<a href="/">
						<img
							src="/assets/images/logo.svg"
							alt="logo"
							className="w-28 object-contain block"
						/>
					</a>
				</div>
				<div className="flex-grow flex items-center justify-between">
					<ul className="hidden sm:flex flex-row gap-2">
						<li>
							<button
								type="button"
								role="link"
								className="px-2 inline-flex gap-2 items-center">
								<span className="text-black">Courses</span>
								<SvgWrapper classNames="w-5 h-5 self-end">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19.5 8.25l-7.5 7.5-7.5-7.5"
									/>
								</SvgWrapper>
							</button>
						</li>
						<li>
							<button
								type="button"
								role="link"
								className="px-4 inline-flex gap-2 items-center">
								<span className="text-black">Programs</span>
								<SvgWrapper classNames="w-5 h-5 self-center">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19.5 8.25l-7.5 7.5-7.5-7.5"
									/>
								</SvgWrapper>
							</button>
						</li>
					</ul>

					<ul className="flex flex-row items-center  flex-grow justify-end gap-4">
						<li className="hidden md:block">
							<button
								type="button"
								role="link"
								className="px-4 inline-flex justify-center  py-2 items-center"
								aria-label="search">
								<SvgWrapper classNames="w-5 h-5 self-center">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
									/>
								</SvgWrapper>
							</button>
						</li>
						<li>
							<button type="button" role="link">
								<span className=" whitespace-nowrap">Log In</span>
							</button>
						</li>

						<li>
							<button
								type="button"
								className="px-2 py-3 text-sm bg-gradient-to-tr from-[#0048FF] to-[#0096FF] rounded-full text-white uppercase min-w-[150px]">
								<span>Join Now</span>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
