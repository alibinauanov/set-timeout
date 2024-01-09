console.log("ayo this text shows that extension reached to content.js");

const elementClassName = "main-hero-banner__flight-search";
// const elementClassName = "horizontal-flight-search";

function showAllElementsImmediately() {
  // I had to put the index because there are many elements and have to choose specific one
  const elements = document.getElementsByClassName(elementClassName);

  // i didn't put the index there because i need to work with all elements inside of "main-hero-banner__flight-search" class. 
  // i looped all elements
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
  }
}

showAllElementsImmediately();

// overall, it still doesn't work. i guess it can be a problem of choosing a wrong class. i tried to use some of them, but again, it still doesn't work