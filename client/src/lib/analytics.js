export const HALF_HOUR = 1800000;
export const N_PERIODS = 6;

export const makeChartData = () => {
	return Array(N_PERIODS).fill(0).map((_, i) => makePeriod(i));
};

export const makePeriod = (n) => ({
	Period: `${getTimeStr(n)} - ${getTimeStr(n + 1)}`,
	Requests: 0
});

export const getTimeStr = (n) => {
	let period = new Date(new Date().getTime() + n * HALF_HOUR);
	const hr = period.getHours();
	const min = period.getMinutes();

	return `${addZero(hr)}:${addZero(min)}`;
};

export const nextMonthStr = (date) => {
	const refilledDate = new Date(date);
	const nextRefillDate = new Date(refilledDate.getFullYear(), refilledDate.getMonth() + 1, refilledDate.getDate());

	const [ _, month, day ] = nextRefillDate.toString().split(' ');
	return `${addZero(day)}. ${month}`;
};

export const addThousandSep = (n) => {
	if (typeof n == 'number') n = String(n);

	if (n.length > 4) {
		n = n.split('');
		n.splice(2, 0, '.');
		return n.join('');
	}

	return n;
};

export const addZero = (n) => (n < 10 ? `0${n}` : n);
