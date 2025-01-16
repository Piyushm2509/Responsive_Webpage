// Functionality for Collapsible Menu
const toggleMenuButton = document.getElementById("toggle-menu");
const leftMenu = document.querySelector(".left-menu");

toggleMenuButton.addEventListener("click", () => {
  leftMenu.classList.toggle("hidden");
  toggleMenuButton.textContent = leftMenu.classList.contains("hidden")
    ? "☰ Expand Menu"
    : "☰ Toggle Menu";
});

// Function to Adjust Page Scaling Based on Screen Width
function adjustPageWidth() {
  const screenWidth = window.innerWidth;
  let scale = 1; // Default scale

  if (screenWidth <= 600) {
    scale = 0.5;
  } else if (screenWidth > 600 && screenWidth <= 700) {
    scale = 0.75;
  } else if (screenWidth > 700 && screenWidth <= 767) {
    scale = 0.8;
  } else if (screenWidth > 992 && screenWidth <= 1600) {
    scale = 0.9;
  }

  // Apply scaling to the body
  document.body.style.transform = `scale(${scale})`;
  document.body.style.transformOrigin = "0 0";
}

// Initial call to set scaling and event listener for resizing
adjustPageWidth();
window.addEventListener("resize", adjustPageWidth);

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Enhancing the User Experience with Menu Hover Feedback
const menuLinks = document.querySelectorAll(".menu ul li a");

menuLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.transform = "scale(1.1)";
    link.style.transition = "transform 0.2s ease-in-out";
  });

  link.addEventListener("mouseout", () => {
    link.style.transform = "scale(1)";
  });
});
