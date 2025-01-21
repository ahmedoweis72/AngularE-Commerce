import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LogainComponent } from './logain/logain.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShowDescriptionComponent } from './show-description/show-description.component';

export const routes: Routes = [
{path: '', redirectTo: '', pathMatch: 'full'},
{path: '', component: ProductListComponent},
{path: 'register', component: RegisterComponent},
{path: 'login', component: LogainComponent},
{path: 'cart', component: ShoppingCartComponent},
{path: 'desc', component: ShowDescriptionComponent},
{path: '**', component: NotFoundComponent}
];
