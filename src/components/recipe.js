export class Recipe extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const dataAttribute = this.getAttribute("data-object");
const monObjet = JSON.parse(dataAttribute);
    const template = document.createElement("template");
    template.innerHTML = `
          <article class="rounded-[21px] relative bg-white h-[731px] w-[380px]">
            <div class="h-[253px] rounded-t-[21px] bg-red-500">
              <img class="object-contain w-full " src="/" alt="">
            </div>
            <div class="pt-[32px] px-[25px]">
              <h2 class="font-main text-[18px]">Limonade de Coco</h2>
              <h3 class="mt-[29px] text-[12px] font-body font-bold uppercase">Recette</h3>
              <p class="mt-[15px] text-[14px]">Mettre les glaçons à votre goût dans le blender, Ajouter le lait  la crème de coco, le jus de 2 citrons et le sucre ensemble. Mixer jusqu'à obtenir la consistance désirée.</p>              
              <h3 class="mt-[32px] mb-[15px] text-[12px] font-body font-bold uppercase">Ingrédients</h3>
              <ul class="flex flex-wrap gap-y-[21px]">
                <li class="flex-[50%]">
                  <p class="text-[14px] font-body font-medium">Lait de coco</p>
                  <p class="text-[14px] font-body text-grey">400ml</p>
                </li>
                <li class="flex-[50%]">
                  <p class="text-[14px] font-body font-medium">Lait de coco</p>
                  <p class="text-[14px] font-body text-grey">400ml</p>
                </li>
                <li class="flex-[50%]">
                  <p class="text-[14px] font-body font-medium">Lait de coco</p>
                  <p class="text-[14px] font-body text-grey">400ml</p>
                </li>
                <li class="flex-[50%]">
                  <p class="text-[14px] font-body font-medium">Lait de coco</p>
                  <p class="text-[14px] font-body text-grey">400ml</p>
                </li>
                <li class="flex-[50%]">
                  <p class="text-[14px] font-body font-medium">Lait de coco</p>
                  <p class="text-[14px] font-body text-grey">400ml</p>
                </li>
                
              </ul>
            </div>
            <span class="absolute top-[22px] right-[22px] bg-warning py-[5px] px-[15px] rounded-[14px]">10min<span>
          </article>
          `;
    this.appendChild(template.content);
  }
}
