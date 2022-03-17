import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from "./layouts/upload/upload.component";
import { StatusComponent } from "./layouts/status/status.component";

const routes: Routes = [
  { path: '', component: UploadComponent },
  { path: 'status', component: StatusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
