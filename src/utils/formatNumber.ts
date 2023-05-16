export const format = (val: any) =>
	val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
