import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpcComponent } from './add-pc/AddpcComponent';
import { pcsComponent } from './pc/pc.component';
import { UpdatepcComponent } from './update-pc/update-pc.component';


const routes: Routes = [
  { path: "pcs", component: pcsComponent },
  { path: "add-pc", component: AddpcComponent },
  { path: "", redirectTo: "pcs", pathMatch: "full" },
  { path: "updatepc/:id", component: UpdatepcComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
