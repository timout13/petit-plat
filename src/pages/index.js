import logo from "../../public/imgs/logo.svg";
import { ajaxRequest } from "../utils/test.js";
export class IndexPage extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const template = document.createElement("template");
    let test = { cle: "reponse", autre: 'reps' };
    template.innerHTML = `
        <header class="py-[69px] px-[51px] bg-hero-pattern bg-cover bg-no-repeat">
            <img class="mb-[170px]" src="${logo}">
            <h1 class="text-[44px] mx-[275px] mb-[30px] text-warning text-center font-main">
                CHERCHEZ PARMI PLUS DE 1500 RECETTES 
                DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES
            </h1>
            <search-bar class="relative h-[72px] block w-[954px] m-auto"></search-bar>
        </header>
        <section class="px-[104px] pt-[20px] bg-bg">
          <div class="flex gap-[64px]">
            <p-select></p-select>
            <p-select></p-select>
            <p-select></p-select>
            <p class="font-main flex-1 text-end">15000 recettes</p>
          </div>
          <div class="mt-[55px] flex gap-y-[66px] gap-x-[48px]">
            <p-recipe data-object='${JSON.stringify(test)}'></p-recipe>
            <p-recipe></p-recipe>
            <p-recipe></p-recipe>
          </div>
        </section>
          `;
    this.appendChild(template.content);
      ajaxRequest('GET', '/backEnd/data.json', null, (err, res) => {
        console.log(res);
    })
  }
}
