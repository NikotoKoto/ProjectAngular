import { cocktails } from "./cocktails.data";

export async function seedData(){
    await fetch('https://restapi.fr/api/cocktails', {
        method : 'POST',
        headers:{
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(cocktails)
    })
}