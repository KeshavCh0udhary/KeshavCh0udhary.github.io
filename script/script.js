let Skills = [
	"Java",
	"JavaScript",
    "Data Structures & Algorithms",
	"HTML",
    "CSS",
	"Git",
];

let skill = 0;

const textId = setInterval(() => {
	document.getElementById("text_change").innerText = Skills[skill];
	skill++;
	if (skill == Skills.length) {
		skill = 0;
	}
}, 1500);