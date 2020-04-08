const { PI, sin, cos, tan, asin, acos, atan, pow, sqrt } = Math;

class MFunction {
	constructor(...sections) {
		this.sections = sections;
	}
	forEach(step, cb) {
		for (let secI = 0; secI < this.sections.length; secI++) {
			let sec = this.sections[secI];
			let range = sec.range;
			for (let i = range.s; i < range.e; i += step) {
				cb(sec, i);
			}
		}
	}
	value(sec, x) { return eval(sec.express); }
}
class Section {
	constructor(range, express) {
		this.express = express;
		this.range = range;
	}
}
class Range {
	constructor(s, e) {
		this.s = s;
		this.e = e;
	}
}
module.exports = {
	MFunction, Section, Range
};