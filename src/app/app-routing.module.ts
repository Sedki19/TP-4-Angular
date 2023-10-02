import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddproduitComponent } from './addproduit/addproduit.component';

const routes: Routes = [
  { path: "produits", component: ProduitsComponent },
  { path: "addproduit", component: AddproduitComponent },
  { path: "", redirectTo: "produits", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
