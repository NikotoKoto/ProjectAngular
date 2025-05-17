export interface Cocktail {
    _id : string;
    imageUrl : string;
    title: string;
    description : string;
    ingredients: string[];
}


export interface CocktailForm {
    _id?: string,
    imageUrl : string;
    title: string;
    description : string;
    ingredients: string[];
}