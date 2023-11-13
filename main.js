import "./public/assets/style.css";

// import pages
import { IndexPage } from "./src/pages/index.js";
window.customElements.define("index-page", IndexPage);

import { SearchBar } from "./src/components/search-bar.js";
window.customElements.define("search-bar", SearchBar);

document.querySelector("body").innerHTML = `
  <main class="h-full">
  </main>
`;

// Open the index page
document
  .querySelector("main")
  .insertAdjacentHTML("afterbegin", "<index-page></index-page>");
