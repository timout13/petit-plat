export class IndexPage extends HTMLElement{
    constructor() {
        super();
    };
    connectedCallback() {
        const template = document.createElement('template');
        template.innerHTML = '<h1>Gello World</h1>'
        this.appendChild(template.content);

     }
}