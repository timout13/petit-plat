export class Select extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
        <select>
            <option value='1'>op</option>
            <option value='2'>ok</option>
            <option value='3'>non</option>
            <option value='4'>allez</option>
        </select>
          `;
    this.appendChild(template.content);
  }
}
