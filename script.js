let image = document.querySelector(".left img");
const sections = document.querySelectorAll(".section");
const sectionContainer = document.querySelector(".right");
const container = document.querySelector(".container");

// For tracking the section currently displayed
let currentSection = 0;
let canScroll = true;

// Touch data (for mobile)
let touchStart = 0;
let touchEnd = 0;

// Add event listener for scrolling, so we can do our scroll jacking
container.addEventListener("wheel", (event) => {
	// Check if we can scroll yet, or if we're in the middle of a scroll jack.
	// If so, prevent all scrolling
	if (!canScroll) {
		return;
	}

	// Not in a scroll, so set a timeout for when scrolling can happen next
	canScroll = false;
	setTimeout(() => {
		canScroll = true;
	}, 1000);

	// Perform the scroll to the next section
	// First, get the next section to scroll to by checking if the scroll position is greater or less than the position of the current position.
	scrollDir = event.deltaY > 1 ? 1 : -1;
	performScroll(scrollDir);
});

// set image
const setImage = (currSec) => {   
   return (image.src = `./images/${currSec}.jpg`);
}

// set Dot Indicator
const setDotIndicator = (currSec) => {
    let getCurrSec = document.querySelector(`.sec${currSec} .dot`);
    getCurrSec.classList.add("activeSection");
}

// reset Dot Indicator
const resetDotIndicator = (currSec) => {
	let getCurrSec = document.querySelector(`.sec${currSec} .dot`);
	getCurrSec.classList.remove("activeSection");
};

// perform scroll

function performScroll(scrollDir) {
    resetDotIndicator(currentSection);
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
    setImage(currentSection);
    setDotIndicator(currentSection);
}
