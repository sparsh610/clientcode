import { NgModule } from '@angular/core';
import { Router,Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { MaterialButtonsComponent } from './material-buttons/material-buttons.component';
import { MatButtonToggleComponent } from './mat-button-toggle/mat-button-toggle.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DisplaySectionComponent } from './display-section/display-section.component';
import { MaterialIconComponent } from './material-icon/material-icon.component';
import { MaterialBadgesComponent } from './material-badges/material-badges.component';
import { MatSpinnerComponent } from './mat-spinner/mat-spinner.component';
import { MaterialToolbarComponent } from './material-toolbar/material-toolbar.component';
import { MaterialSidenavComponent } from './material-sidenav/material-sidenav.component';
import { MaterialMenuComponent } from './material-menu/material-menu.component';
import { MaterialListComponent } from './material-list/material-list.component';
import { MaterialGridListComponent } from './material-grid-list/material-grid-list.component';
import { MaterialExpansionPanelComponent } from './material-expansion-panel/material-expansion-panel.component';
import { MaterialCardsComponent } from './material-cards/material-cards.component';
import { MaterialTabsComponent } from './material-tabs/material-tabs.component';
import { MaterialSteppersComponent } from './material-steppers/material-steppers.component';
import { MaterialInputComponent } from './material-input/material-input.component';
import { MaterialSelectComponent } from './material-select/material-select.component';
import { MaterialAutocompleteComponent } from './material-autocomplete/material-autocomplete.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailComponent } from './detail/detail.component';
import { AdminComponent } from './admin/admin.component';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';
import { SecurityComponent } from './security/security.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {path:'security',component:SecurityComponent,canActivate: [AuthGuard] },
  {path:'main',component:MainComponent,canActivate: [AuthGuard] },
  {path:'employees',component:EmployeeComponent,canActivate: [AuthGuard] },
  {path:'profile',component:ProfileComponent,canActivate: [AuthGuard] },
  {path:'detail/:id',component:DetailComponent,canActivate: [AuthGuard] },
  {path:'admin',component:AdminComponent,canActivate: [AuthGuard] },
  {path : 'display', component:DisplaySectionComponent,canActivate: [AuthGuard] },
  {path:'',component:LoginComponent},
  {path: 'formexample',component:FormExampleComponent,canActivate: [AuthGuard] },
  {path:'matbutton',component:MaterialButtonsComponent,canActivate: [AuthGuard] },
  {path:'matbuttontoggle',component:MatButtonToggleComponent,canActivate: [AuthGuard]} ,
  {path:'signup',component:RegistrationComponent},
  {path:'signin',component:LoginComponent},
  {path:'icon',component:MaterialIconComponent,canActivate: [AuthGuard] },
  {path:'badge',component:MaterialBadgesComponent,canActivate: [AuthGuard] },
  {path:'spinner',component:MatSpinnerComponent,canActivate: [AuthGuard] },
  {path:'badge',component:MaterialBadgesComponent,canActivate: [AuthGuard] },
  {path:'toolbar',component:MaterialToolbarComponent,canActivate: [AuthGuard] },
  {path:'sidenav',component:MaterialSidenavComponent,canActivate: [AuthGuard] },
  {path:'menu',component:MaterialMenuComponent,canActivate: [AuthGuard] },
  {path:'list',component:MaterialListComponent,canActivate: [AuthGuard] },
  {path:'gridlist',component:MaterialGridListComponent,canActivate: [AuthGuard] },
  {path:'expansionlist',component:MaterialExpansionPanelComponent,canActivate: [AuthGuard] },
  {path:'cards',component:MaterialCardsComponent,canActivate: [AuthGuard] },
  {path:'tabs',component:MaterialTabsComponent,canActivate: [AuthGuard] },
  {path:'stepper',component:MaterialSteppersComponent,canActivate: [AuthGuard] },
  {path:'input',component:MaterialInputComponent,canActivate: [AuthGuard] },
  {path:'select',component:MaterialSelectComponent,canActivate: [AuthGuard] },
  {path:'autocomplete',component:MaterialAutocompleteComponent,canActivate: [AuthGuard] },
  {path:'shopping',component:ShoppingCartComponent,canActivate: [AuthGuard] },
  {path:'shopping/order',component:OrderDetailsComponent,canActivate: [AuthGuard]} ,
  {path : '404', component:PageNotFoundComponent},
  {path : '401', component:UnauthorisedComponent},
  {path : '**', component:PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule {
constructor(private router : Router){
this.router.errorHandler = (error:any)=>{
  this.router.navigate(['/404']);
}

}

}
