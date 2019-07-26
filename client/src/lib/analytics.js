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

export const makeChartData = () => {
	return Array(6).fill(0).map((_, i) => ({
		Period: 'Period ' + i,
		Requests: Math.floor(Math.random() * 10) + 2,
		amt: Math.floor(Math.random() * 10) + 2
	}));
};
