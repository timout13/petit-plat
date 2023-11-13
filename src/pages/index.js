import logo from "../../public/imgs/logo.svg";

export class IndexPage extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
        <header class="py-[69px] px-[51px] h-[667px] bg-hero-pattern bg-contain bg-no-repeat">
            <img class="" src="${logo}">
            <h1 class="text-[44px] text-warning text-center font-main">Gello World</h1>
        </header>
            <h1 class="text-3xl font-bold font-body underline">No World!</h1>
          `;
    this.appendChild(template.content);
  }
}
