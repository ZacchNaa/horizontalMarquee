// const dots = document.querySelectorAll(".dot");
const sections = document.querySelectorAll(".section");
const sectionContainer = document.querySelector(".scrolljacking");
// const loader = document.querySelector("#js-loader");

// For tracking the section currently displayed
let currentSection = 0;
let canScroll = true;

// Touch data (for mobile)
let touchStart = 0;
let touchEnd = 0;

// First, let's put some content in all the sections
// sections.forEach((section, index) => {
// 	fetch("https://baconipsum.com/api/?type=meat-and-filler&sentences=4")
// 		.then((blob) => {
// 			return blob.json();
// 		})
// 		.then(function (data) {
// 			loader.style.display = "none";
// 			section.innerHTML = `<h2>Section: ${index + 1}</h2><p>${data}</p>`;
// 			// set the first dot to be active.
// 			if (0 == index) {
// 				setDotIndicator();
// 			}
// 		});
// });

// // set event listeners on the dots
// dots.forEach((dot, index) => {
// 	dot.addEventListener("click", (event) => {
// 		resetDotIndicator();
// 		currentSection = index;
// 		sectionContainer.style.top = currentSection * -100 + "vh";
// 		setDotIndicator();
// 	});
// });

document.addEventListener("touchstart", (event) => {
	touchStart = event.changedTouches[0].clientY;
});

document.addEventListener("touchend", (event) => {
	touchEnd = event.changedTouches[0].clientY;
	if (touchStart > touchEnd) {
		performScroll(1);
	} else {
		performScroll(-1);
	}
});

// Add event listener for scrolling, so we can do our scroll jacking
document.addEventListener("wheel", (event) => {
	// Check if we can scroll yet, or if we're in the middle of a 
    // scroll jack.
	// If so, prevent all scrolling
	if (!canScroll) {
		return;
	}

	// Not in a scroll, so set a timeout for when scrolling can happen next
	canScroll = false;
	setTimeout(() => {
		canScroll = true;
	}, 15000);

	// Perform the scroll to the next section
	// First, get the next section to scroll to by checking if the scroll position is greater or less than the position of the current position.
	scrollDir = event.deltaY > 1 ? 1 : -1;
	performScroll(scrollDir);
});

function performScroll(scrollDir) {
	// resetDotIndicator();
	currentSection += scrollDir;

	// Make sure we stick to real sections and don't scroll out of it.
	if (currentSection >= sections.length - 1) {
		currentSection = sections.length - 1;
	}
	if (0 > currentSection) {
		currentSection = 0;
	}

	// perform the 'scroll'
	sectionContainer.style.top = currentSection * -100 + "vh";
	// setDotIndicator();
}

// reset the old dot to not be active
// function resetDotIndicator() {
// 	dots[currentSection].classList.remove("current-dot");
// }

// // Set the current dot displayed
// function setDotIndicator() {
// 	dots[currentSection].classList.add("current-dot");
// }