import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {HttpClientModule} from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeFormEditableExampleComponent } from './employee-form-editable-example/employee-form-editable-example.component';
import { MaterialButtonsComponent } from './material-buttons/material-buttons.component';
import { MatButtonToggleComponent } from './mat-button-toggle/mat-button-toggle.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
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

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    MainComponent,
    FormExampleComponent,
    PageNotFoundComponent,
    EmployeeFormEditableExampleComponent,
    MaterialButtonsComponent,
    MatButtonToggleComponent,
    RegistrationComponent,
    LoginComponent,
    DisplaySectionComponent,
    MaterialIconComponent,
    MaterialBadgesComponent,
    MatSpinnerComponent,
    MaterialToolbarComponent,
    MaterialSidenavComponent,
    MaterialMenuComponent,
    MaterialListComponent,
    MaterialGridListComponent,
    MaterialExpansionPanelComponent,
    MaterialCardsComponent,
    MaterialTabsComponent,
    MaterialSteppersComponent,
    MaterialInputComponent,
    MaterialSelectComponent,
    MaterialAutocompleteComponent,
    ShoppingCartComponent,
    OrderDetailsComponent,
    ProfileComponent,
    DetailComponent,
    AdminComponent,
    UnauthorisedComponent,
    SecurityComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
