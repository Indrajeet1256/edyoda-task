export type Plans = {
	id: number;
	isPlanExpired: boolean;
	months: number;
	total: number;
	perMonth: number;
	isRecommended?: boolean;
	expiration?: number | null;
};

const plans: Plans[] = [
	{
		id: 1,
		isPlanExpired: true,
		months: 12,
		total: 99,
		perMonth: 8,
		isRecommended: false,
		expiration: null,
	},
	{
		id: 2,
		isPlanExpired: false,
		months: 12,
		total: 179,
		perMonth: 15,
		isRecommended: true,
		expiration: new Date().setTime(new Date().getTime() + 1000 * 60 * 60 * 2),
	},
	{
		id: 3,
		isPlanExpired: false,
		months: 6,
		total: 149,
		perMonth: 25,
		isRecommended: false,
		expiration: new Date().setTime(new Date().getTime() + 1000 * 60 * 60 * 4),
	},
	{
		id: 4,
		isPlanExpired: false,
		months: 3,
		total: 99,
		perMonth: 33,
		isRecommended: false,
		expiration: new Date().setTime(new Date().getTime() + 1000 * 60 * 60 * 4),
	},
];

export default plans;
