export class SearchBar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
        <input type="text" class="h-[72px] px-[35px] w-full rounded-[11px]" placeholder="Rechercher une recette, un ingrédient, ...">
        <button class="absolute right-0 top-1/2 translate-x-[-10px] translate-y-[-50%]">
            <svg width="51" height="53" viewBox="0 0 51 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.421875" width="51" height="52" rx="10" fill="#1B1B1B"/>
                <circle cx="22" cy="22.4219" r="9.5" stroke="white"/>
                <line x1="30.3536" y1="31.0683" x2="39.3536" y2="40.0683" stroke="white"/>
            </svg>
        </button>
          `;
    this.appendChild(template.content);
  }
}
