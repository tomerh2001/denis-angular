import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ConsentsComponent } from './consents/consents.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'consents', component: ConsentsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [LoginComponent, ConsentsComponent]