"use strict";
// Navigation items data
const navItemsData = [
  { text: "პოლიტიკა", url: "#" },
  { text: "საზოგადოება", url: "#" },
  { text: "Covid-19", url: "#" },
  { text: "სამართალი", url: "#" },
  { text: "ბიზნესი & ეკონომიკა", url: "#" },
  { text: "კრიმინალი", url: "#" },
  { text: "შემთხვევა", url: "#" },
  { text: "მსოფლიო", url: "#" },
  { text: "სპორტი", url: "#" },
  { text: "რელიგია", url: "#" },
  { text: "ხელოვნება", url: "#" },
];

//Containers of elements
const headerContainer = document.querySelector("#header");

// Mobile Menu button
const mobileMenuBtn = document.querySelector("#mob-menu-btn");

// Render all navigation items
const renderAllItems = function (navItemsData) {
  const navItemsContainer = document.querySelector("#nav-items");
  navItemsContainer.innerHTML = "";

  navItemsData.forEach((data) => {
    const navItem = document.createElement("li");
    navItem.classList.add("lg1:py-4");
    navItem.innerHTML = `
      <a
        href="${data.url}"
        class="smooth-transition text-brand-gray-500 hover:opacity-80"
      >
        ${data.text}
      </a>
    `;
    navItemsContainer.appendChild(navItem);
  });
};

// Render adjusted navigation items
// DIFFERENT APPROACH WITH < insertAdjacentHtml >
const renderAdjustedNavItems = function (navItemsData) {
  const navItemsContainer = document.querySelector("#nav-items");
  navItemsContainer.innerHTML = "";

  // Get first 8 elements from data
  const firstPartNavItems = navItemsData.slice(0, 8);

  // Get all remaining element from data
  const secondPartNavItems = navItemsData.slice(8);

  // Render first 8 elements from data
  firstPartNavItems.map((navItem) => {
    const navItemsHTML = `<li class="lg1:py-4">
    <a
    href="${navItem.url}"
    class="smooth-transition text-brand-gray-500 hover:opacity-80"
  >
    ${navItem.text}
  </a>
    </li>`;
    navItemsContainer.insertAdjacentHTML("beforeend", navItemsHTML);
  });

  // Get and render remaining elements from data
  const dropdownHTML = `<li class="group/dropdown lg1:py-4">
    <a
    href="#"
    class="group/opacity flex items-center justify-center gap-2 smooth-transition text-brand-red-500 hover:opacity-80"
  >
    მეტი <span class="smooth-transition group-hover/opacity:opacity-80 group-hover/dropdown:-rotate-180">

    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.3 4.93333C4.9 5.46667 4.1 5.46667 3.7 4.93333L1.2 1.6C0.705573 0.940764 1.17595 0 2 0H7C7.82405 0 8.29443 0.940764 7.8 1.6L5.3 4.93333Z" fill="currentColor"/>
    </svg>
  </span>
  </a>

  <ul class="bg-white absolute top-[52px] -right-5 flex flex-col gap-6
  justify-center py-6 pl-4 pr-[74px] rounded-lg drop-shadow-small opacity-0
  invisible pointer-events-none smooth-transition group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:pointer-events-auto" >
 
  ${secondPartNavItems
    .map(
      (navItem) => `
  <li> 
    <a href="${navItem.url}" class="smooth-transition text-brand-gray-500 hover:opacity-80">
      ${navItem.text}
    </a>
  </li>
`
    )
    .join("")}
  </ul>
  </li>`;

  navItemsContainer.insertAdjacentHTML("beforeend", dropdownHTML);
};

// check screen width and call corresponding function
const checkScreenWidth = function () {
  const screenWidth = window.innerWidth;

  if (screenWidth < 1240) {
    renderAllItems(navItemsData);
  } else if (screenWidth >= 1240 && screenWidth < 1920) {
    renderAdjustedNavItems(navItemsData);
  } else if (screenWidth >= 1920) {
    renderAllItems(navItemsData);
  }
};
checkScreenWidth();

// Event Listeners
// Handle mobile navigation
mobileMenuBtn.addEventListener("click", function () {
  const navContainer = document.querySelector("#header-nav");
  navContainer.classList.toggle("translate-x-full");
});

window.addEventListener("resize", checkScreenWidth);
