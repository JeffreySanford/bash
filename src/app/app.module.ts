import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// used to create fake backend
import { fakeBackendProvider } from "./_helpers";

import {
  MatGridListModule,
  MatListModule,
  MatDialogModule,
  MatInputModule,
  MatDialogRef,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { routing } from "./app.routing";

import { AlertComponent } from "./_directives";
import { AuthGuard } from "./_guards";
import { JwtInterceptor, ErrorInterceptor } from "./_helpers";
import { AlertService, AuthenticationService, UserService } from "./_services";
import { HomeComponent } from "./home";
import { LoginComponent } from "./login";
import { RegisterComponent } from "./register";

import { AgmCoreModule } from "@agm/core";
import { AgmComponent } from "./home/agm/agm.component";

import { GuideService } from "./_services/guides.service";
import { GuestService } from "./_services/guests.service";
import { AppHeaderComponent } from "./app-header/app-header.component";
import { AppFooterComponent } from "./app-footer/app-footer.component";
import { RelatedUsersComponent } from "./home/related-users/related-users.component";
import { UserInterestsComponent } from "./home/user-interests/user-interests.component";
import { SelectedGuideComponent } from "./home/selected-guide/selected-guide.component";
import { SelectedInterestService } from "./_services/selected-interest.service";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

//  New fontawesome package for angular

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';;
import { ServiceWorkerModule } from '@angular/service-worker'
;
import { environment } from './environments/environment';
library.add(faCoffee);

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCKkl5bmy0asqfc2SALju9okIlwnisZi-o&libraries=places"
    }),
    MatGridListModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    NgbModule,
    FontAwesomeModule
,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    NgbModule,
    FontAwesomeModule,
    AppHeaderComponent,
    AppFooterComponent
  ],
  declarations: [
    AppComponent,
    AgmComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AppHeaderComponent,
    AppFooterComponent,
    RelatedUsersComponent,
    UserInterestsComponent,
    SelectedGuideComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    GuestService,
    GuideService,
    SelectedInterestService,

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
