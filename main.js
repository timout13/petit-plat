import './public/assets/style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'



// import pages
import {IndexPage} from "./src/pages/index.js"
window.customElements.define("index-page", IndexPage);

// Open the index page
document.body.insertAdjacentHTML("afterbegin", "<index-page></index-page>");