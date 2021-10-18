import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { MerchComponent } from "./merch/merch.component";
import { NewsComponent } from "./news/news.component";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
    {
        path: '', component: PagesComponent, pathMatch: 'full'
    },
    {
        path: 'About', component: AboutComponent
    },
    {
        path: 'News', component: NewsComponent
    },
    {
        path: 'Merch', component: MerchComponent
    },
    {
        path: 'Contact', component: ContactComponent
    },
    {
        path:'**', redirectTo: '/'
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes,{
            initialNavigation: 'enabled'
        }),
    ],
    exports:[RouterModule],
})
export class PagesRoutingModule{}