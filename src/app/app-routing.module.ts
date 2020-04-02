import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './tables/tables.component';
import { UploadComponent } from './upload/upload.component';


const routes: Routes = [
  { path: '', component: UploadComponent, pathMatch: 'full' },
  { path: 'tables', component: TablesComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
