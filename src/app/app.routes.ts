
import { Routes } from "@angular/router"
import { CocktailsComponent } from "./views/cocktails/cocktails.component"
import { NotFoundComponent } from "./views/not-found/not-found.component"


export const routes : Routes= [
    {
        path : '',
        pathMatch:'full',
        redirectTo:'cocktails'
    },
    {
        path:'cocktails',
        component: CocktailsComponent,
    },
    {
        path: 'admin',
        loadChildren: async () => (await import("./views/admin/admin.routes")).routes
    },
    {
        path:'basket',
        loadComponent: async () => (await import('./views/basket/basket.component')).BasketComponent,
    },
    {
        path:'**',
        component: NotFoundComponent,
    }
    
]