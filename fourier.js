const { integrate } = require("./integrate");
const { MFunction, Section, Range } = require("./fun");
const INV_PI = 1 / Math.PI;

function fourier(func, n = 100, dx = 0.1) {
	let a = [ INV_PI * 0.5 * integrate(func, dx) ], b = [ ];
	for (let i = 0; i < n; i++) {
		a.push(INV_PI * integrate(func, dx, "cos(" + i + " * x)"));
		b.push(INV_PI * integrate(func, dx, "sin(" + i + " * x)"));
	}
	return { a, b };
}
function format(fr) {
	let { a, b } = fr;
	let res = `${(a[0] * 0.5).toLocaleString()}`;
	for (let i = 1; i < a.length; i++) {
		if (Math.abs(a[i]) < 0.1) continue;// 为0
		if (a[i] > 0) res += "+";
		res += `${a[i].toLocaleString()}cos(${i}x)`;
	}
	for (let i = 0; i < b.length; i++) {
		if (Math.abs(b[i]) < 0.1) continue;// 为0
		if (b[i] > 0) res += "+";
		res += `${b[i].toLocaleString()}sin(${i}x)`;
	}
	return res;
}

module.exports = {
	fourier, format
};