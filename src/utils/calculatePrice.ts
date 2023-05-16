const DEFAULT_TAX = 18;

export const calculatePrice = (value: number) => {
	const discount = (DEFAULT_TAX / 100) * value;
	return Math.floor(value - discount);
};
