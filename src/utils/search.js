import {ajaxRequest} from "../utils/test";

export async function search(string) {
  let unformattedRecette = await ajaxRequest("GET", "/backEnd/data.json", null)
    .then((res) => res)
    .catch((err) => console.log(err));
    let allRecette = unformattedRecette.map(recette => {
        let ingredients = recette.ingredients.reduce((acc, current) => {
            //console.log(acc, current);
           return (acc+' ') + current.ingredient
        },"");
        //console.log(ingredients);
        recette.ingredients = ingredients;
        return recette;

    })
    console.log(allRecette);
}