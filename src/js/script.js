"use strict";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  runCallbacksOnInit: true,
  // === new change
  on: {
    slideChange: function () {
      const slides = document.getElementsByClassName("swiper-slide");
      const slideCounter = document.querySelector("#slide-count");
      slideCounter.textContent = this.realIndex + 1 + "/" + slides.length;
    },
  },
});

const swiperEl = document.querySelector(".swiper").swiper;
console.log(swiperEl.activeIndex);

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

const navItemsContainer = document.querySelector("#nav-items");
const mobileMenuBtn = document.querySelector("#mob-menu-btn");

const createNavItem = function (navItem) {
  const navItemElement = document.createElement("li");
  navItemElement.classList.add("lg1:py-4");
  navItemElement.innerHTML = `
    <a
      href="${navItem.url}"
      class="smooth-transition text-brand-gray-500 hover:opacity-80"
    >
      ${navItem.text}
    </a>
  `;
  return navItemElement;
};

const createDropdownUl = function () {
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

<ul id="dropdown" class="bg-white absolute top-[52px] -right-5 flex flex-col gap-6
justify-center py-6 pl-4 pr-[74px] rounded-lg drop-shadow-small opacity-0
invisible pointer-events-none smooth-transition group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:pointer-events-auto " >

</ul>
</li>`;
  navItemsContainer.insertAdjacentHTML("beforeend", dropdownHTML);
};

const createdDropdownNavItem = function (navItem) {
  const dropdownNavItem = `<li>
  <a href="${navItem.url}" class="smooth-transition text-brand-gray-500 hover:opacity-80">
    ${navItem.text}
  </a>
</li>`;

  return dropdownNavItem;
};

const renderAllINavItems = function (navItemsData) {
  navItemsContainer.innerHTML = "";

  navItemsData.forEach((navItem) => {
    const navItemElement = createNavItem(navItem);
    navItemsContainer.appendChild(navItemElement);
  });
};

const renderAdjustedNavItems = function (navItemsData) {
  navItemsContainer.innerHTML = "";

  const firstPartNavItems = navItemsData.slice(0, 8);

  const secondPartNavItems = navItemsData.slice(8);

  // Render first 8 elements from data
  firstPartNavItems.map((navItem) => {
    const navItemElement = createNavItem(navItem);
    navItemsContainer.appendChild(navItemElement);
  });

  // Render remaining elements from data

  if (navItemsData.length > 8) {
    createDropdownUl();
  }

  // DIFFERENT APPROACH WITH < insertAdjacentHtml > just to show i know both ways.
  secondPartNavItems.map((navItem) => {
    const navItemElement = createdDropdownNavItem(navItem);
    const dropdownUl = document.querySelector("#dropdown");
    dropdownUl.insertAdjacentHTML("beforeend", navItemElement);
  });
};

// check screen width and call corresponding function
const checkScreenWidth = function () {
  const screenWidth = window.innerWidth;

  if (screenWidth < 1240) {
    renderAllINavItems(navItemsData);
  } else if (screenWidth >= 1240 && screenWidth < 1920) {
    renderAdjustedNavItems(navItemsData);
  } else if (screenWidth >= 1920) {
    renderAllINavItems(navItemsData);
  }
};
checkScreenWidth();

// Event Listeners
// Handle mobile navigation
mobileMenuBtn.addEventListener("click", function () {
  const headerNavContainer = document.querySelector("#header-nav");
  headerNavContainer.classList.toggle("translate-x-full");
});

// Trigger function on browser resize
window.addEventListener("resize", checkScreenWidth);
