const { PI, sin, cos, tan, asin, acos, atan, pow, sqrt } = Math;

function integrate(func, dx, addtion = "1") {
	let res = 0;
	func.forEach(dx, (sec, x) => {
		res += func.value(sec, x) * eval(addtion) * dx;
	});
	return res;
}

module.exports = {
	integrate
};