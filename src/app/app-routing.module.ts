import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthenticationGuard } from 'microsoft-adal-angular6';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: WelcomeComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
