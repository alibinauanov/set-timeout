const elementClassName = "main-hero-banner__flight-search";

function setElementTimeout() {
  const element = document.querySelector(`.${elementClassName}`);
  if (element) {
    setTimeout(() => {
        document.getElementsByClassName(`.${elementClassName}`);
    }, 0);
  }
}

document.addEventListener("DOMContentLoaded", setElementTimeout);