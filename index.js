"use strict";

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) =>
      tabContent.classList.remove("is-active")
    );
    target.classList.add("is-active");
  });
});

// Second part of the task

let obj = new URL("http://ffwagency.com/do/any.php?a=1#foo");

console.log("[obj.hash]", obj.hash);
console.log("[obj.hostname]", obj.hostname);
console.log("[obj.pathname]", obj.pathname);
