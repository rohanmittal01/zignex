import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import '@angular/compiler';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AngularSlickgridModule, CollectionService } from 'angular-slickgrid';
import { TranslateModule, TranslateService, TranslateLoader, TranslateStore } from '@ngx-translate/core';
// import { TranslateStore } from '@ngx-translate/core/ngx-translate-core';
import { AppComponent } from './app.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapViewComponent } from './map-view/map-view.component';
import { SlickgridComponent } from './slickgrid/slickgrid.component';
import { DexieService } from './_services/dexie.service';
import { HttpService } from './_services/http.service';
import { environment } from 'src/environments/environment';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpClient } from '@angular/common/http';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader/lib/http-loader';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// export function initTranslateLoader(http: HttpClient) {
//   console.log("load new files-----");
//   return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
// }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    TreeViewComponent,
    NavbarComponent,
    MapViewComponent,
    SlickgridComponent,
    AddTodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatTreeModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    AngularSlickgridModule.forRoot(),
    // TranslateModule,
    // TranslateLoader,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    ServiceWorkerModule.register('service-worker.js', {
      enabled: environment.production,
    }),
    RouterModule.forRoot([
    { path: '', component: MapViewComponent }
], { relativeLinkResolution: 'legacy' })
  ],
  providers: [
    DexieService,
    HttpService,
    TranslateService,
    TranslateStore,
    CollectionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
