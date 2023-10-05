let hamburgerIsOpen = false;

const openHamburger = (x) => {
  x.classList.toggle("change");
  let hamburgerNavContainer = document.getElementById(
    "hamburger-nav-container"
  );

  if (!hamburgerIsOpen) {
    hamburgerNavContainer.style.display = "block";
    hamburgerNavContainer.style.marginTop = "0";
    hamburgerIsOpen = true;
  } else {
    hamburgerNavContainer.style.display = "none";
    hamburgerIsOpen = false;
  }
};
