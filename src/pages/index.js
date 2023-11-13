import logo from "../../public/imgs/logo.svg";
import { ajaxRequest } from "../utils/test.js";
export class IndexPage extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
        <header class="py-[69px] px-[51px] h-[667px] bg-hero-pattern bg-contain bg-no-repeat">
            <img class="mb-[170px]" src="${logo}">
            <h1 class="text-[44px] mx-[275px] mb-[30px] text-warning text-center font-main">
                CHERCHEZ PARMI PLUS DE 1500 RECETTES 
                DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES
            </h1>
            <search-bar class="relative h-[72px] block w-[954px] m-auto"></search-bar>
        </header>
            <h1 class="text-3xl font-bold font-body underline">No World!</h1>
          `;
    this.appendChild(template.content);
      ajaxRequest('GET', '/backEnd/data.json', null, (err, res) => {
        console.log(res);
    })
  }
}
