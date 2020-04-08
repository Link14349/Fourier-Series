const readline = require('readline');
const { fourier, format } = require("./fourier");
const { MFunction, Section, Range } = require("./fun");
const { PI, sin, cos, tan, asin, acos, atan, pow, sqrt } = Math;
 
function readSyncByRl(tips) {
    tips = tips || '> ';
 
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
 
        rl.question(tips, (answer) => {
            rl.close();
            resolve(answer.trim());
        });
    });
}

(async function () {
	let sectionCount = Number(await readSyncByRl("Section Count: "));
	let sections = [];
	for (let i = 0; i < sectionCount; i++) {
		console.log(`==Section#${i}==`);
		let s = eval(await readSyncByRl("Start: "));
		let e = eval(await readSyncByRl("End: "));
		let expr = await readSyncByRl("Expression: ");
		sections.push(new Section(new Range(s, e), expr));
	}
	let ns = Number(await readSyncByRl("Number of Series: "));
	console.log(format(fourier(new MFunction(...sections), ns)));
})();