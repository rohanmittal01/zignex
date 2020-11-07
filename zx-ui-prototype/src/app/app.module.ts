import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AngularSlickgridModule } from 'angular-slickgrid';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './shared/services/http.service';
import { CoreModule } from './shared/core/core.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GoogleMapComponent } from './google-map/google-map.component';
import { TomtomMapComponent } from './tomtom-map/tomtom-map.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { LeftPanelComponent } from './left-panel/left-panel.component';
// @dynamic
@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    TomtomMapComponent,
    NotFoundComponent,
    TreeViewComponent,
    LeftPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSlickgridModule.forRoot(),
    CoreModule,
    FormsModule,
    SharedModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    MatTreeModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatButtonToggleModule,
    ServiceWorkerModule.register('service-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
