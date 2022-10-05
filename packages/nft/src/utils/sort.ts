// https://stackoverflow.com/questions/15478954/sort-array-elements-string-with-numbers-natural-sort/15479354#15479354
export function naturalCompare(a: string, b: string) {
	var ax: any[] = [];
	var bx: any[] = [];

	a.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
		ax.push([$1 || Infinity, $2 || '']);

		return '';
	});

	b.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
		bx.push([$1 || Infinity, $2 || '']);

		return '';
	});

	while (ax.length && bx.length) {
		var an = ax.shift();
		var bn = bx.shift();
		var nn = an[0] - bn[0] || an[1].localeCompare(bn[1]);
		if (nn) return nn;
	}

	return ax.length - bx.length;
}
