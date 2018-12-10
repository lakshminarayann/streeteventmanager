import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestModule } from './test/test.module';
import { CoreModule } from './core/core.module';
import { GamesModule } from './games/games.module';
import { SharedModule } from './shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

// ADAL Library
import { MsAdalAngular6Module, AuthenticationGuard } from 'microsoft-adal-angular6';
import { InterceptorService } from './core/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    TestModule,
    GamesModule,
    MsAdalAngular6Module.forRoot({
      instance: 'https://login.microsoftonline.com/',
      tenant: 'suryan67outlook.onmicrosoft.com',
      clientId: '1ca8cf2e-f577-4d2f-9ae9-bf095abfca29',
      redirectUri: window.location.origin,
      endpoints: {
        'https://localhost/Api/': 'xxx-bae6-4760-b434-xxx',
      },
      navigateToLoginRequestUrl: false,
    }),
    SharedModule
  ],
  providers: [AuthenticationGuard, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
