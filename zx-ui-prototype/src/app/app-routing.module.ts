import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleMapComponent } from './google-map/google-map.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TomtomMapComponent } from './tomtom-map/tomtom-map.component';
import { TreeViewComponent } from './tree-view/tree-view.component';

const routes: Routes = [
  { path: 'gmap', component: GoogleMapComponent },
  { path: 'ttmap', component: TomtomMapComponent },
  // { path: '', redirectTo: 'gmap', pathMatch: 'full' }, // redirect to `first-component`
  {path: '', component: LeftPanelComponent},
  { path: '**', component: NotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
